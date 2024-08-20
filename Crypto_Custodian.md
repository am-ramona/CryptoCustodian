# ✨Crypto Custodian!✨
### A. Title
> **Project Name**: Crypto Custodian
> 
> **Document Title**: Decision Log
> 
> **Date**: 19 August 2024
> 
> **Author**: Ramona Abi-Moussa

### B. Table of Contents
- [✨Crypto Custodian!✨](#crypto-custodian)
    - [A. Title](#a-title)
    - [B. Table of Contents](#b-table-of-contents)
    - [C. Introduction](#c-introduction)
    - [D. Decision Log](#d-decision-log)
    - [E. Development](#e-development)
    - [F. Link](#f-link)

### C. Introduction
- **Purpose**: Clarify the project decision log.
- **Scope**:  A brief explanation of the decisions taken upon building the project.

### D. Decision Log

*On the Frontend* 

-  	I installed Prettier, Eslint and StyleLint as they ensure consistent code style and catch potential issues early in the development process helping in code fixing and cleaning, Lint-staged & Husky to run Prettier as a pre-commit hook thus automating formatting.

-  	For testing, I used Jest framework for running my test suites and handling assertions for both unit tests and integration tests since It is suitable for testing frontend components as well as backend logic (API routes).

- I have implemented the first Dashboard screen with overview of
client portfolios, asset allocation, and performance metrics.


- All images are imported from Carbon as requested in the Brand Book.

- I imported 'IBM Plex Mono' and 'IBM Plex Sans' Google Fonts as they follow the font rule in the Brand Book.

- As I am using Next.js's built-in API routing feature, I was initially able to create API routes directly within my application, because it can handle the logic for fetching and processing the data. However, following the test document request, I created a node server later on and switched routing.

- The app is currently responsive & cross-browser compatible on : Firefox, Chrome, Edge and Brave


*On the Backend*

- As I called the Etherscan single GET API, I use straightforward javascript vanilla fetch for API fetching. However, for scaling the application with more complex API requests in the future, Axios comes at handy to make multiple or complex requests, or require features like request cancellation, timeouts, or interceptors.

- I installed nodemon for automatic restart upon code changes

- I installed SQLLite database for data saving and Sequelize as it provides a high-level abstraction over raw SQL queries, making database interactions more intuitive and manageable. It also simplifies complex queries and schema management with an easy-to-use API and ensures a consistent and structured approach to database operations across different environments.

- Since complex calculation can be computational expensive viewing the significant amount number of data to be iterated at scale, i decided to do the calculation functions on the server and not the client side which performs better when working the large data volume from Etherscan. This can help ensure that the calculations are completed as quickly as possible, providing a faster and more efficient and responsive user experience.
By performing these calculations on the server, I can:
1. Offload the computational work from the client, reducing the burden on the frontend and improving the overall responsiveness of the application.
2. Reduce the data payload transferred between the client and the server, as the server can return the pre-calculated results rather than the raw transaction data.
3. Maintain a clear separation of concerns, where the server handles the data processing and the frontend focuses on the presentation and user interaction

__Important__ Please note that I had rough time finding my MySQL database password as it had been long time since I used it. The standard one "mysql" did not work for the user "root". So I tried to do the data saving testing within the server files. Please excuse the db check files structure. 


*On the Tests*

- The testing configuration is set inside the __Tests__ folder and running the test files inside the Frontend and the backend folders since tests alongside the code makes it easier to understand the context and simple to navigate the files, ensuring that tests are kept up-to-date with the code changes.

### E. Development

- The Frontend runs on localhost:3000
- The Backend runs on localhost:5000

### F. Link
   [Github]

   [Github]: <https://github.com/am-ramona/CryptoCustodian>
  
