# Sample Create Referral Application

## Introduction

This Application was made using vite react for Frontend while fastify for the backend

The data to run the application are stored in an Mysql database

## Prerequisite

    NodeJs v22.12.0 or later version
    MySQL

## Installation

1.  first get a copy of the repository
2.  create **.env** file for both client and server (sample below)
    > 2.1. client:
    >
    >     VITE_API_ENDPOINT = http://localhost:5000
    >
    > 2.2. server:
    >
    >     DB_CONNECTION = "mysql://root:test@localhost:3306/test_database"
    >     PORT = 5000
3.  run **npm install** both client and server terminal
4.  when the connection of the database established on the server run **npm run migrate**
5.  run **npm run dev** on both server and client terminal
