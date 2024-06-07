const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const fs = require('fs');
const {PythonShell} = require('python-shell');

const app = express();
app.use(bodyParser.json());

app.post('/process-email', async (req, res) => {
    const emailText = req.body.email;

    // Save email to file for Python processing
    fs.writeFileSync('email.txt', emailText);

    // Use Python to preprocess and predict
    PythonShell.run('process_email.py', null, function (err, results) {
        if (err) throw err;
        const structuredData = JSON.parse(results[0]);

        // Generate Excel file
        const {Workbook} = require('exceljs');
        let workbook = new Workbook();
        let worksheet = workbook.addWorksheet('Emails');

        worksheet.columns = [
            { header: 'Type', key: 'type', width: 30 },
            { header: 'Date', key: 'date', width: 30 },
            { header: 'Time', key: 'time', width: 30 }
        ];

        worksheet.addRow(structuredData);

        workbook.xlsx.writeFile('emails.xlsx')
            .then(() => {
                res.json({ success: true, message: 'Email processed and saved to Excel' });
            });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
