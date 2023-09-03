Question 3: Troubleshooting React App Data Fetching

Background:

You've been provided with a React application designed to retrieve data from the backend of the "SecureLogin" web application project, which you've encountered in question 1. The frontend React app is integrated with the backend using API requests to fetch data.

The React app's primary function is to display data retrieved from the backend. The app architecture involves components, states, and asynchronous data fetching using JavaScript's built-in fetch() function.

Task:

Upon reviewing the React app's code, you've noticed that there's an issue affecting the data fetching process. Candidates are expected to identify the problem, explain the root cause, and propose a solution to resolve it.  

Deliverables:

- A concise description of the identified issue and the root cause.
- A clear and logical explanation of why the issue is occurring.
- A step-by-step resolution plan, including any code changes or adjustments required.

If applicable, candidates can include code snippets to illustrate their proposed solution.  

Note:

Candidates are not required to implement the solution in code. Focus on identifying the problem, diagnosing the root cause, and suggesting a solution.

/*

    Your Answer

*/

ISSUE: 
1. CORS
2. The request matches two route handlers in the backend. One that sends HTML file and the other that serves the API. It's a good practice to always separate the API handlers. For example adding /api/ prefix to all your API endpoints. In this case, I just changed the / route to /welcome route in the backend. 

IN CHROME CONSOLE TAB:
Access to fetch at 'http://localhost:3000/' from origin 'http://localhost:3002' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

NOTE:
The backend is served at http://localhost:3000 and the frontend is served at http://localhost:3002

WHY:
Making a request from http://localhost:3002 to http://localhost:3000 is considered cross-origin as they have different hostnames.

Internet browsers follow the same-origin policy and restrict cross-origin HTTP requests initiated from scripts. This means that a website is only allowed to make requests to the same origin unless the response from other origins includes the right CORS headers (the CORS headers will be listed in the next section of this article).

The same-origin policy is a security measure to prevent Cross-Site Request Forgery (CSRF). Without this policy, a malicious website would be able to read your sensitive information on another website by making an HTTP request to the website.

The same-origin policy only restricts on-page scripts from accessing data or posting data to a different origin. Other resources such as images and CSS are not restricted and can be accessed from other origins.

To access data from other origins or post data to them, CORS is needed.

SOLUTION:
1. Change the / route to /welcome route in the backend
1. Add "proxy": "http://localhost:3000" to package.json
2. Change "http://localhost:3000" (absolute path) in App.js to "/welcome" (relative path)

NOTE:
I have fixed the code by commenting out the original code and providing the working solution.
