# FWD_Proxy_Server_GUI
This is a forward proxy server written in JavaScript. The proxy server handles all requests from the client, prints all requests on the CLI interface, and saves all requests as logs in text files. At the same time, the proxy server runs an HTTP server that serves an HTML page with all requests divided by color into connect, post, and denied requests.
Please note that the proxy server in use may block all requests based on a blacklist.txt file that contains a list of domains to be blocked.The blacklist.txt file can be updated to ensure that all the "black" domains are included.
Users should be aware that any attempts to access blacklisted domains could be blocked.

## Understanding Analytics Domains and How a Proxy Server Can Help Protect Your Data Privacy

Analytics domains, such as Google and AWS, are used to collect data when a user visits a webpage. These domains typically use cookies and tracking scripts to gather information about the user's browsing behavior, such as the pages they visit, the time spent on each page, and the links clicked. This data is then used to analyze user behavior and improve website performance, as well as to serve targeted advertising. While this data collection is often essential for website owners and marketers to understand their audience, it can also pose a privacy risk to users. However, a proxy server can be configured to block requests made to analytics domains, thereby providing users with greater control over their data privacy. If you have any concerns about your online privacy or data security, please speak to your system administrator.

## Features

1. Forward proxy server;
2. Prints all requests on the CLI interface;

<img width="468" alt="image" src="https://user-images.githubusercontent.com/91114967/217781811-802a278f-117d-424c-9801-895ea37d84a0.png">

3. Saves all requests as logs in text files;
4. Runs an HTTP server that serves an HTML page with all requests divided by color;

<img width="586" alt="image" src="https://user-images.githubusercontent.com/91114967/217781991-15e54a0a-246c-493a-902a-f0b52885eb0f.png">

The HTML page served by the proxy server contains a display of all requests, divided by color into connect, post, and denied requests. The requests are displayed as elements with specific classes, allowing you to show or hide specific categories as needed.

  To show or hide specific categories, the HTML page includes three buttons:

  - Connect: Show or hide all connect requests
  - Post: Show or hide all post requests
  - Denied: Show or hide all denied requests

  By clicking on each of these buttons, you can show or hide the corresponding requests on the page, allowing you to focus on the specific category you are         interested in.

5. Supports connect, post, and denied requests;

## Installation

To install the proxy server, you will need to have Node.js installed on your system.

Clone the repository to your local machine using the following command:

> git clone https://github.com/your-username/forward-proxy-server.git

Navigate to the cloned directory:

> cd forward-proxy-server

Install the required dependencies using the following command:

> npm install

## Usage

To start the proxy server, run the following command:

> npm start

The proxy server will start running and you will see the requests being printed on the CLI interface. The HTML page with all requests can be accessed by visiting http://localhost:3000 in your web browser.

## Logs

All requests are saved as logs in text files in the logs directory.

## Conclusion

This forward proxy server is a simple and powerful tool for handling and logging requests from clients. With its support for connect, post, and denied requests, it is well suited for a wide range of use cases.

