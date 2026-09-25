import XLSX from 'xlsx';
import path from 'path';//this is inbuilt inside node.js

export class ExcelReader{
       static readExcelFile(fileName,SheetName){
            //we are defining the path of the file
            const filePath=path.join(__dirname,'../data',fileName);
            //read excel file
            const workbook=XLSX.readFile(filePath);
            //get the sheetName
            const workSheet=workbook.Sheets[SheetName];
            //convert the sheet into Json
            const xlsxToJson=XLSX.utils.sheet_to_json(workSheet);
            return xlsxToJson;
        }
}