# Lab 3 TypeScript

## Introduction

The basic Node.js application on TypeScript.

## Installing

```bash
git clone https://github.com/AlexandreLamb/Lab_3_NodeJS.git
cd Lab_3_NodeJS
npm install
```

## Build

```bash
npm run build
```

## Development

```bash
npm run dev
```
 ## ROUTES
 POST
 ```bash
http://localhost:8082/metrics/:id
body : 
[
  { "timestamp":"1384686660000", "value":"10" },

  { "timestamp":"1384686660001", "value":"10" },

  { "timestamp":"1384686660002", "value":"10" }
]
```


 GET ( All )
 ```bash
http://localhost:8082/metrics/
```
 GET ( One ) 
 ```bash
http://localhost:8082/metrics/:id
```
DELETE
```bash
http://localhost:8082/metrics/:id
```

## Contributors
>Lambert Alexandre Louis Sartoris
