const fs = require("fs");

function createPOST(title, element) {
  //fs.appendFile("index.html", `<div class="${title}">${element}</div>`);

  fs.appendFile(
    "index.html",
    `<div class="${title}">${element}</div>`,
    (err) => {
      if (err) {
        console.error("An error occurred while writing logs to the file.".red);
      }
    }
  );
}

module.exports = createPOST;

/*
async function createPOST(title, element) {
  try {
    //for (let i = 0; i < elements.length - 1; i++) {
    await fs.promises.appendFile(
      "index.html",
      `<div class="${title}">${element}</div>`
    );
    //}
  } catch (err) {
    throw err;
  }
}
*/
