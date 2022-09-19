<!-- PROJECT LOGO -->
<br />
<div align="center">
 

<!-- Link to src -->
  <h3 align="center">RepoProvas API</h3>
  <p>
    Back end Development Project
    <br />
</div>

<!-- Built With -->
<div align="center">
  <h3>Built With</h3>
   <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
</div>

<!-- Description -->
# Description

An API for save tests. Any user can search/create tests.

## API LINK
https://repoprovass.onrender.com (if not available, run locally)
<!-- Getting Started -->


## Run Locally

Clone the project

```bash
  git clone https://github.com/yorigcs/projeto20-repoprovas
```

Go to the project directory

```bash
  cd projeto20-repoprovas
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npm run prisma:migrate
```
Populate database

```bash
  npm run seed
```
Start server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
  npm run test:seed (only one time)
```
Ensure you create an env.test file like the env.example



# Routes

## Sign Up
```yml
POST api/sign-up
    - headers: {}
    - body:{
      "email": "valid_email@email.com",
      "password": "any_password",
      "confirmPassword": "any_password"	
    }
RESPONSE IN SUCCESS
    - status: 201
```
## Sign In
```yml
POST api/sign-in
    - headers: {}
    - body:{
      "email": "valid_email@email.com",
      "password": "valid_password"	
    }
RESPONSE IN SUCCESS
    - status: 200
    - body: {
        userInfo: {
          id: number,
          email: valid_email@email.com
        }
        token: 'Bearer valid_token'
    }   
```

## Create a test
```yml
POST api/test
    - headers: {
      "x-acess-token": 'Bearer valid_token'
    }
    - body:{
      "name": "any_name",
      "pdf_url": "https://valid_uri.com",
      "category_id":  integer_number,
      "teacher_discipline_id": integer_number
    }
RESPONSE IN SUCCESS
    - status: 201
```

## Search tests by terms
```yml
GET api/tests/term
    - headers: {
      "x-acess-token": 'Bearer valid_token'
    }
    - body:{
    }
RESPONSE IN SUCCESS
    - status: 200
    - body: [Array of tests grouped by terms]
```

## Search tests by teachers
```yml
GET api/tests/teacher
    - headers: {
      "x-acess-token": 'Bearer valid_token'
    }
    - body:{
    }
RESPONSE IN SUCCESS
    - status: 200
    - body: [Array of tests grouped by teachers]
```
