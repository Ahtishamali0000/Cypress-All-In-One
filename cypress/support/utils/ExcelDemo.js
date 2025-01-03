const ExcelJs = require('exceljs');

async function excelTest() {
    try {
        // Create a new workbook
        const Workbook = new ExcelJs.Workbook();

        // Read the Excel file
        await Workbook.xlsx.readFile("C:/Users/user1/Downloads/download.xlsx");

        // Access the desired worksheet
        const Worksheet = Workbook.getWorksheet('Sheet1');

        // Iterate over each row and cell
        Worksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber}:`);
            row.eachCell((cell, colNumber) => {
                console.log(` - Column ${colNumber}: ${cell.value}`);
            });
        });
    } catch (error) {
        console.error("Error reading Excel file:", error);
    }
}

// Call the function
excelTest();
