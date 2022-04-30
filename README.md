## RepoProvas

Share and discover your teacher's past tests.

Features

- [x] Auth

- [x] Tests view per discipline

- [x] Tests view per teacher

- [x] Search disciplines/teachers

- [x] Test viwers count

- [x] Insert tests

#### BONUS

- [ ] OAuth

- [ ] Send email

- [ ] Save pdf files

## Endpoints

<details>
            <summary>
                <strong>POST</strong> /sign-up
            </summary>

        send body request like this:

```json
{
  "email": "joe@domain.com",
  "password": "1234",
  "confirmPassword": "1234"
}
```

- it returns status <strong>201</strong> for succes

- it return status <strong>409</strong> if email is already in use

 </details>

 <details>
            <summary>
                <strong>POST</strong> /login
            </summary>

        send body request like this:

```json
{
  "email": "joe@domain.com",
  "password": "1234"
}
```

- it returns status <strong>200</strong> for succes

and

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUwNjQ5NzgxfQ.Uh1NxvzX-4XHvZOGdsEkCWk-KJTuNFNU8U-5dP59XFw"
}
```

- it return status <strong>401</strong> for incorrect password or email

 </details>

### All following needs token authorization

<details>
    <summary>
        <strong >Authorization</strong>
    </summary>
- send a Bearer token on headers like this:

```json
{
  "headers": {
    "authorization": "Bearer 1cf7cccf-48ad-4edd-8b9d-121b1199aaf4"
  }
}
```

- it returns <strong>400</strong> for empty auth or without Bearer

- it returns <strong>401</strong> for unauthorized

</details>

<details>
            <summary>
                <strong>Routes</strong> /teachers
            </summary>

<details>
            <summary>
                <strong>GET</strong> /teachers
            </summary>

- you can filter by querying name with at least 3 char (?name=)

- it returns status <strong>200</strong> for succes

and

```json
[
  {
    "id": 1,
    "name": "Abraham Zboncak"
  },
  {
    "id": 2,
    "name": "Mrs. Ollie Gibson"
  }
]
```

 </details>

 <details>
            <summary>
                <strong>GET</strong> /teachers/TEACHERID/tests
            </summary>

- change TEACHERID to teacher id you're looking for

- it returns status <strong>200</strong> for succes

and

```json
[
  {
    "id": 1,
    "name": "P1",
    "tests": [
      {
        "id": 2,
        "name": "Customer Integration Producer",
        "pdfUrl": "http://loremflickr.com/640/480",
        "teachersDisciplines": {
          "disciplines": {
            "id": 6,
            "name": "Product Integration Representative",
            "termId": 1
          }
        }
      }
    ]
  }
]
```

 </details>

 </details>

  <details>
              <summary>
                  <strong>Routes</strong> /terms
              </summary>

  <details>
              <summary>
                  <strong>GET</strong> /terms
              </summary>

- it returns status <strong>200</strong> for succes

and

```json
[
  {
    "id": 1,
    "number": 1
  },
  {
    "id": 2,
    "number": 2
  }
]
```

  </details>

  <details>
              <summary>
                  <strong>GET</strong> /terms/TERMID/disciplines
              </summary>

- change TERMID to term id you're looking for

- it returns status <strong>200</strong> for succes

and

```json
[
  {
    "id": 1,
    "name": "Legacy Mobility Analyst",
    "termId": 1
  },
  {
    "id": 2,
    "name": "Regional Metrics Designer",
    "termId": 1
  }
]
```

  </details>

 </details>

<details>
              <summary>
                  <strong>Routes</strong> /disciplines
              </summary>

<details>
            <summary>
                <strong>GET</strong> /disciplines
            </summary>

- you can filter by querying name with at least 3 char (?name=)

- it returns status <strong>200</strong> for succes

and

```json
[
  {
    "id": 1,
    "name": "Legacy Mobility Analyst",
    "termId": 1
  },
  {
    "id": 17,
    "name": "Legacy Assurance Consultant",
    "termId": 6
  }
]
```

 </details>

<details>
            <summary>
                <strong>GET</strong> /disciplines/DISCIPLINEID/tests
            </summary>

- change DISCIPLINEID to discipline id you're looking for

- it returns status <strong>200</strong> for succes

and

```json
[
  {
    "id": 2,
    "name": "P2",
    "tests": [
      {
        "id": 12,
        "name": "2009.1",
        "pdfUrl": "http://loremflickr.com/640/480",
        "teachersDisciplines": {
          "teachers": {
            "id": 5,
            "name": "Evan Hyatt"
          }
        }
      }
    ]
  }
]
```

 </details>

 </details>

 <details>
            <summary>
                <strong>POST</strong> /tests
            </summary>

- send a body

```json
{
  "name": "2009.1", //string
  "pdfUrl": "http://loremflickr.com/640/480", //url
  "categoryId": 2, // number
  "teacherId": 6, //number
  "disciplineId":3, //number
}
```

- it return status <strong>404</strong> if any of these ids doesn't match

- it returns status <strong>200</strong> for succes

and

```json
{
  "id": 12,
  "name": "2009.1",
  "pdfUrl": "http://loremflickr.com/640/480",
  "categoryId": 2,
  "teacherDisciplineId": 6,
  "views": 2
}
```

 </details>

 <details>
            <summary>
                <strong>PATCH</strong> /tests/TESTID/views
            </summary>

- change TESTID to test id you're looking for

- it returns status <strong>200</strong> for succes

and

```json
{
  "id": 12,
  "name": "2009.1",
  "pdfUrl": "http://loremflickr.com/640/480",
  "categoryId": 2,
  "teacherDisciplineId": 6,
  "views": 2
}
```

 </details>

## Technologies

<div style="display: flex; gap: 10px; height: 40px;">
  <a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
      <img src="https://user-images.githubusercontent.com/85591297/157519943-9da08e53-e59d-450a-8b0d-81af17974fd0.svg" alt="TypeScript" height="40"/>
  </a>
  <a title="Node JS" href="https://nodejs.org" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" height="40"/> 
  </a>
  <a title="Express JS" href="https://expressjs.com/" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="expressjs" height="40"/> 
  </a>
  <a title="Postgre" href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> 
      <img style="background: green;" src="https://user-images.githubusercontent.com/85591297/157520309-59a18d2e-ee4d-433c-8990-12fdbba37a0d.svg" alt="Postgre" height="40"/> 
  </a>
  <a title="Prisma" href="https://www.prisma.io/" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://miro.medium.com/max/1400/1*X6wCDTpjcn_WcvDW9jS4WQ.png" alt="Prisma" height="40"/> 
  </a>
</div>

## Requirements

### [npm](https://www.npmjs.com/)

<details>
    <summary>install npm</summary>

```bash
wget -qO- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh> | bash

## Or this command
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Close and open terminal
nvm install --lts
nvm use --lts
# Verify node version
node --version # Must show v14.16.1
# Verify npm version
npm -v
```

</details>

### [postgreSQL](https://www.postgresql.org/)

<details>
    <summary>install postgres</summary>

```bash
sudo apt install postgresql postgresql-contrib
```

</details>

## How to run

1. Clone this repository
2. Install dependencies

```bash
npm i
```

3. set your .env file

4. Create database with prisma

- open terminal and run

```bash
npx prisma init
npx prisma migrate dev
```

5. Run the project with

```bash
npm run start (deploy)
```

6. Run the project in development mode (nodemon)

```bash
npm run start:dev
```
