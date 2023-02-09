const fs = require("fs");

async function initHTML() {
  try {
    await fs.promises.writeFile("index.html", "");
    await fs.promises.appendFile(
      "index.html",
      `<!DOCTYPE html>
      <html>
        <head>
        <style>
        body {
          background-color: rgb(65, 64, 64);
        }
        .POST {
          margin: 10px;
          padding: 10px;
          background-color: rgb(53, 53, 53);
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgb(222, 238, 53);
          font-size: 20px;
          color: rgb(222, 238, 53);
          display = "block";
        }
        .CONNECT {
          margin: 10px;
          padding: 10px;
          background-color: rgb(53, 53, 53);
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgb(5, 218, 26);
          font-size: 20px;
          color: rgb(5, 218, 26);
          display = "block";
        }
        .DENIED {
          margin: 10px;
          padding: 10px;
          background-color: rgb(53, 53, 53);
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgb(250, 4, 41);
          font-size: 20px;
          color: rgb(250, 4, 41);
          display = "block";
        }
        .buttonPOST {
          margin: 10px;
          padding: 10px;
          background-color: rgb(53, 53, 53);
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgb(222, 238, 53);
          font-size: 20px;
          color: rgb(222, 238, 53);
          display = "block";
        }
        .buttonCONNECT {
          margin: 10px;
          padding: 10px;
          background-color: rgb(53, 53, 53);
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgb(5, 218, 26);
          font-size: 20px;
          color: rgb(5, 218, 26);
          display = "block";
        }
        .buttonDENIED {
          margin: 10px;
          padding: 10px;
          background-color: rgb(53, 53, 53);
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgb(250, 4, 41);
          font-size: 20px;
          color: rgb(250, 4, 41);
          display = "block";
        }
        .postSpace {
          margin: 10px;
          padding: 10px;
          background-color: #444;
          border-radius: 10px;
          box-shadow: 0px 0px 10px #555;
          font-size: 18px;
        }
        .postLink {
          margin: 10px;
          padding: 10px;
          background-color: rgb(130, 130, 130);
          border-radius: 10px;
          box-shadow: 0px 0px 10px #555;
          font-size: 18px;
        }
        .postTime {
          margin: 10px;
          padding: 10px;
          background-color: rgb(108, 108, 108);
          border-radius: 10px;
          box-shadow: 0px 0px 10px #555;
          font-size: 18px;
        }
        .post p {
          color: #fff;
          font-size: 18px;
          line-height: 1.5;
        }
        .post h3 {
          font-size: 22px;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
  
        .post p span {
          color: #ff7f50;
          font-weight: bold;
        }
  
        .titleCONNECT {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          margin: 20px 0;
          color: rgb(5, 218, 26);
        }
  
        .titlePOST {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          margin: 20px 0;
          color: rgb(222, 238, 53);
        }
        .titleDENIED {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          margin: 20px 0;
          color: rgb(250, 4, 41);
        }
      </style>
        </head>
        <script>
        function connect() {
          x = document.querySelectorAll(".CONNECT");
  
          for (let i = 0; i < x.length; i++) {
            if (x[i].style.display === "none") {
              x[i].style.display = "block";
            } else {
              x[i].style.display = "none";
            }
          }
        }
  
        function post() {
          x = document.querySelectorAll(".POST");
  
          for (let i = 0; i < x.length; i++) {
            if (x[i].style.display === "none") {
              x[i].style.display = "block";
            } else {
              x[i].style.display = "none";
            }
          }
        }
  
        function denied() {
          x = document.querySelectorAll(".DENIED");
  
          for (let i = 0; i < x.length; i++) {
            if (x[i].style.display === "none") {
              x[i].style.display = "block";
            } else {
              x[i].style.display = "none";
            }
          }
        }
      </script>
        <body>
        <button class="buttonCONNECT" onclick="connect()">CONNECT</button>
        <button class="buttonPOST" onclick="post()">POST</button>
        <button class="buttonDENIED" onclick="denied()">DENIED</button>
          `
    );
  } catch (err) {
    throw err;
  }
}

module.exports = initHTML;
