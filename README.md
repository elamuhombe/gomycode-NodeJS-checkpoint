# Node.js Project
This Project contains 3 sub programs: 
- Hello World Program: Prints "HELLO WORLD" to the console as is saved in the file 'hello-world.js'.
- Node.js Server: This program creates a simple Node.js server that responds with `<h1>Hello Node!!!!</h1>` when accessed at http://localhost:3000. The program is stored in 'main.js' file.
- File System: This program demonstrates file system operations by creating a file named "welcome.txt" with the content "Hello Node" and then reading and logging the content to the console. The program is saved in 'file-operation.js'.
- Password Generator Program: This program uses the `generate-password` package to generate a random password and logs it to the console. The program is saved in 'password-generator' file.
- Email Sender Program: This program uses the `nodemailer` package to send a test email to yourself using Gmail. The program is stored in 'email-sender file.

## Project Structure
![pj](https://github.com/elamuhombe/gomycode-NodeJS-checkpoint/assets/10416177/1b08a286-512a-481e-8287-c6dfd56a0baa)


## Screenshots
### Hello-world.js output
![hello](https://github.com/elamuhombe/gomycode-NodeJS-checkpoint/assets/10416177/8b6687e4-3875-41a0-8182-e364341380de)

### main.js output
![hellonode](https://github.com/elamuhombe/gomycode-NodeJS-checkpoint/assets/10416177/95f3ab06-df8d-45cf-9d1f-3d6aadd10374)


### password-generator output
![pwd](https://github.com/elamuhombe/gomycode-NodeJS-checkpoint/assets/10416177/8c6a1c2f-5eef-4fb4-b113-3ee7f9a3262a)

### email-sender output in gmail
![email](https://github.com/elamuhombe/gomycode-NodeJS-checkpoint/assets/10416177/e21cad9f-e158-43d2-a19b-e45a9dc84f23)

## Core Modules
- http: provides the functionality for creating http servers and making http requests.
- fs: provides the functionality for interacting with the file system.
  
## Dependencies
- password-generator:module that can be used to generate random passwords
- nodemailer: module for sending emails with Node.js.
  
## Technologies
### Node.js v21.4.0
A JavaScript runtime that allows you to run JavaScript code on the server side.

## How to Run

1. Install Node.js (https://nodejs.org/)
2. Download and install Dependencies:
   ```bash
   
   npm install password-generator nodemailer
3. Open the project folder files with
4. Navigate the src folder in terminal
   /Desktop/GOMYCODE/NodeJS-Checkpoint$
   NB: 'Desktop' is the location of the project files. You can replace it with the your location of your project.
   cd src
6. Run the programs file
   Example to run the hello-world program
   node hello-world.js

## Author
Elaine Muhombe

## Acknowledgements
- w3schools: https://www.w3schools.com/
- Node.js website: https://nodejs.org/docs/latest/api/modules.html#core-modules

   
 
