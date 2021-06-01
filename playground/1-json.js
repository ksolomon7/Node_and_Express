const fs=require('fs')
// const book={
//     title:"Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON=JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)
//called dataBuffer-represents binary code
// const dataBuffer=fs.readFileSync('1-json.json')
// const dataJson= dataBuffer.toString();
// const data=JSON.parse(dataJson);

const dataBuffer=fs.readFileSync('1-json.json');
const dataJson= dataBuffer.toString();
const data= JSON.parse(dataJson);
data.name="Daisy"
data.age=400
const json=JSON.stringify(data)
fs.writeFileSync('1-json.json',json )
