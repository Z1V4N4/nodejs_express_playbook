FROM svr-ocp-nex-d01.muf.co.id:5000/base-img/nodejs:16.13.0

# Install dependencies untuk Oracle Instant Client
RUN apt-get update && apt-get install -y \
    libaio1 wget unzip

# Set working directory untuk Oracle Instant Client
WORKDIR /opt/oracle

# Download Oracle Instant Client
RUN wget https://download.oracle.com/otn_software/linux/instantclient/2350000/instantclient-basic-linux.x64-23.5.0.24.07.zip  

# Extract Oracle Instant Client
RUN unzip instantclient-basic-linux.x64-23.5.0.24.07.zip && \
    rm *.zip

# Buat symlink library yang dibutuhkan
RUN ln -s /opt/oracle/instantclient_23_5/libclntsh.so.21.1 /usr/lib/libclntsh.so && \
    ln -s /opt/oracle/instantclient_23_5/libocci.so.21.1 /usr/lib/libocci.so

# Set environment variables untuk Oracle Instant Client
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_23_5
ENV ORACLE_HOME=/opt/oracle/instantclient_23_5
ENV PATH=$PATH:/opt/oracle/instantclient_23_5

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN chgrp -R 0 /usr/src/app && \
    chmod -R g=u /usr/src/app

EXPOSE 1521
CMD [ "npm", "start" ]