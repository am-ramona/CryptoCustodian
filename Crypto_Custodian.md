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
- **Scope**:  A concise summary of the decisions made during the project's development.

### D. Decision Log

*On the Frontend* 

-  	I installed Prettier, ESLint, and Stylelint to ensure consistent code style and catch potential issues early in the development process, helping with code fixing and cleaning. Additionally, I set up lint-staged and Husky to run Prettier as a pre-commit hook, automating code formatting.

-  	For testing, I used Jest framework for running my test suites and handling assertions for both unit tests and integration tests since It is suitable for testing frontend components as well as backend logic (API routes).

- I have implemented the first Dashboard screen, which provides an overview of
client portfolios, asset allocation, and performance metrics.


- All images are sourced from Carbon as specified in the Brand Book.

- I imported the 'IBM Plex Mono' and 'IBM Plex Sans' Google Fonts to align with the font guidelines in the Brand Book.

- Initially, I used Next.js’s built-in API routing feature to create API routes directly within the application, as it efficiently handles data fetching and processing. However, following the test document request, I later set up a Node server and switched the routing.

- The app is currently responsive & cross-browser compatible with : Firefox, Chrome, Edge and Brave


*On the Backend*

- For calling the Etherscan single GET API, I used vanilla JavaScript with the fetch function for straightforward API requests. However, to accommodate future scaling with more complex API requests, I opt for Axios. Axios is well-suited for handling multiple or intricate requests, as well as features such as request cancellation, timeouts, or interceptors.

- I installed nodemon to automatically restart the server upon code changes.

- I set up an SQLite database for data storage and integrated Sequelize for a high-level abstraction over raw SQL queries. Sequelize simplifies complex queries and schema management with its intuitive API, providing a consistent and structured approach to database operations across different environments.

- Given that complex calculations can be computationally expensive, especially when dealing with large volumes of data from Etherscan, I chose to perform these calculations on the server side rather than the client side. This approach improves performance by:

1. Offloading the computational work from the client, enhancing the overall responsiveness of the application.
This approach ensures that calculations are completed more quickly, leading to a faster, more efficient, and responsive user experience.
2. Reducing the data payload transferred between the client and the server, as the server returns pre-calculated results rather than raw transaction data.
3. Maintaining a clear separation of concerns, with the server handling data processing and the frontend focusing on presentation and user interaction.

__Important__ Please note that I had rough time finding my MySQL database password as it had been a long time since I last used it. The standard password "mysql" did not work for the user "root". So I tried to do the data saving testing within the server files. Please excuse the db check files structure. 


*On the Tests*

- The testing configuration is located within the __Tests__ folder, and test files are run from inside the Frontend and Backend folders. Keeping tests alongside the code helps maintain context and simplifies navigation, ensuring that tests stay up-to-date with code changes.

### E. Development

- The Frontend runs on localhost:3000
- The Backend runs on localhost:5000

*[For additional assurance, please refer to the main branches of the submodules where outdated files have been omitted]*

### F. Link
   [Github]

   [Github]: <https://github.com/am-ramona/CryptoCustodian>
  
