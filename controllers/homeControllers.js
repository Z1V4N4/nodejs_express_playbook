module.exports = {
  homePage: async (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>NODE Playbook</title>
        </head>
        <body>
            <h1>NODE Playbook</h1>
        </body>
        </html>
    `);
  },
};
