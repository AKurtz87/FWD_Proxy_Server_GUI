const fs = require("fs");

async function readLinesFromFile(filePath) {
  try {
    const data = await new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
    const dataArray = data.toString().split("\n");
    let blackList = [];
    for (let i = 0; i < dataArray.length; i++) {
      let splitElements = dataArray[i].split(":  ");
      //blackList.push(splitElements[0], splitElements[1]);
      blackList.push(splitElements[0]);
    }
    //console.log(blackList);
    return blackList;
  } catch (err) {
    throw err;
  }
}

module.exports = readLinesFromFile;
