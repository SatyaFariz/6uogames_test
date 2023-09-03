
Login Test Case Implementation Instructions

Meet Tom, a dedicated and enthusiastic junior backend developer who has recently joined the SecureLogin team at a rapidly growing cybersecurity company. Tom is excited to contribute to the development of SecureLogin, a sophisticated authentication system renowned for its robust security measures and seamless user experience. Tom is new to unit testing and needs your guidance to successfully implement the login test case. Here's how you can help him:

Task: Implementing a Login Test Case in /6uoGamesAPI/test

Your task is to implement a test case for the login functionality of SecureLogin. We have provided you with the API endpoint and the expected responses for different scenarios. Your job is to write a test case that verifies the correctness of the login process and its error handling mechanisms.

API Endpoint: /login

## POST /login

### PARAMETERS

### REQUEST BODY

${email} (required)

${password} (required)

### RESPONSE (200)

- 200 OK
    
    message: "Success",
    
    session: "${session_token}"

### OTHER RESPONSES

- 401 Unauthenticated
    
    message: "Email or password is incorrect."

To start the database, just simply enter the question1 directory and type `docker-compose up -d` or `docker compose up -d`

