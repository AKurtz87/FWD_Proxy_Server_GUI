# javascript_FWD_Proxy_Server_html_interface
This is a forward proxy server written in JavaScript. The proxy server handles all requests from the client, prints all requests on the CLI interface, and saves all requests as logs in text files. At the same time, the proxy server runs an HTTP server that serves an HTML page with all requests divided by color into connect, post, and denied requests.

# Features

- Forward proxy server
- Prints all requests on the CLI interface
- Saves all requests as logs in text files
- Runs an HTTP server that serves an HTML page with all requests divided by color
 -Supports connect, post, and denied requests

# Installation

To install the proxy server, you will need to have Node.js installed on your system.

Clone the repository to your local machine using the following command:

> git clone https://github.com/your-username/forward-proxy-server.git

Navigate to the cloned directory:

> cd forward-proxy-server

Install the required dependencies using the following command:

> npm install

# Usage

To start the proxy server, run the following command:

> npm start

The proxy server will start running and you will see the requests being printed on the CLI interface. The HTML page with all requests can be accessed by visiting http://localhost:3000 in your web browser.

# Logs

All requests are saved as logs in text files in the logs directory.

# Conclusion

This forward proxy server is a simple and powerful tool for handling and logging requests from clients. With its support for connect, post, and denied requests, it is well suited for a wide range of use cases.

