const http = require("http");

const fs = require("fs");

const initHTML = require("./webPage/utilities/initHTML");
const createPOST = require("./webPage/utilities/createPOST");

// TEXT COLORS
const colors = require("colors");
colors.setTheme({
  blue: "blue",
  B: "bold",
  green: "green",
  red: "red",
  yelllow: "yellow",
});

// NETWORK PART
const net = require("net");
const proxyServer = net.createServer();
const dns = require("dns");

// READ DOMAIN FROM TXT LIST AND CREATE ARRAY
const blacklist = require("./readList");

// PROXY EFFORT
(async () => {
  await initHTML();
  const blackList = await blacklist("./lists/noGoogle.txt");
  //console.log(blackList);

  proxyServer.on("connection", (clientToProxySocket) => {
    clientToProxySocket.once("data", (data) => {
      let isTLSConnection = data.toString().indexOf("CONNECT") !== -1;

      let serverPort = 80;
      let serverAddress;

      if (isTLSConnection) {
        serverPort = 443;
        serverAddress = data
          .toString()
          .split("CONNECT")[1]
          .split(" ")[1]
          .split(":")[0];
      } else {
        serverAddress = data.toString().split("Host: ")[1].split("\r\n")[0];
      }

      let requestMethod = data.toString().split(" ")[0];

      dns.lookup(serverAddress, (err, address) => {
        if (blackList.includes(serverAddress) || blackList.includes(address)) {
          clientToProxySocket.end("HTTP/1.1 403 Forbidden\r\n\r\n");
          console.log("DOMAIN BLOCKED".red.B, serverAddress.red.B);

          createPOST("DENIED", serverAddress);

          fs.appendFile(
            "./logs/DENIEDlogs.txt",
            serverAddress + "\n",
            (err) => {
              if (err) {
                console.error(
                  "An error occurred while writing logs to the file.".red
                );
              }
            }
          );

          return;
        }
        if (err) {
          console.log(`ERROR: NO IP address for ${serverAddress}`.yellow);
        }
        if (requestMethod === "POST") {
          createPOST("POST", serverAddress);
          fs.appendFile("./logs/POSTlogs.txt", serverAddress + "\n", (err) => {
            if (err) {
              console.error(
                "An error occurred while writing logs to the file.".red
              );
            }
          });
          console.log(
            "   POST ".yellow +
              `IP address for ${serverAddress.blue.B}:` +
              `  ${address.green.B}`
          );
        } else if (requestMethod === "CONNECT") {
          createPOST("CONNECT", serverAddress);
          fs.appendFile(
            "./logs/CONNECTlogs.txt",
            serverAddress + "\n",
            (err) => {
              if (err) {
                console.error(
                  "An error occurred while writing logs to the file.".red
                );
              }
            }
          );
          if (!address) {
            //console.error("ERROR: address UNDEFINED".yellow);
          } else {
            console.log(
              "CONNECT ".green +
                `IP address for ${serverAddress.blue.B}:` +
                `  ${address.green.B}`
            );
          }
        }
      });

      if (!serverAddress) {
        console.log("ERROR: Server Address UNDEFINED".yellow);
        //return;
      }

      let proxyToServerSocket = net.createConnection(
        {
          host: serverAddress,
          port: serverPort,
        },
        () => {}
      );

      if (isTLSConnection) {
        clientToProxySocket.write("HTTP/1.1 200 OK\r\n\r\n");
      } else {
        proxyToServerSocket.write(data);
      }

      clientToProxySocket.pipe(proxyToServerSocket);
      proxyToServerSocket.pipe(clientToProxySocket);

      proxyToServerSocket.on("error", (err) => {
        //console.log(("Proxy to server error".red, err));
      });

      clientToProxySocket.on("error", (err) => {
        //console.log(("Client to proxy error".red, err));
      });
    });
  });

  proxyServer.on("error", (err) => {
    //console.log(("Internal server error".red, err));
  });

  proxyServer.listen(
    {
      host: "0.0.0.0",
      port: 8080,
    },
    () => {
      console.log(
        "\n________________________________________________________________________"
          .blue.B
      );
      console.log(
        "                                                                        "
          .blue.B
      );
      console.log(
        "|                         FORWARD PROXY SERVER                         |"
          .blue.B
      );
      console.log(
        "________________________________________________________________________\n"
          .blue.B
      );
      console.log("Server listening on ".blue.B + " 0.0.0.0:8080\n".green.B);
    }
  );
})();

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
