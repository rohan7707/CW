const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/BookTable', (request, response) => {
    const statement = `select book_id, subject_name, book_name, price, author  from  BookTable`;
    const connection = db.connect();
    connection.query(statement, (error, books) => {
        connection.end();
        response.send(utils.createResponse(error, books));
    });
});

router.post('/BookTable', (request, response) => {
    const subject_name = request.body.subject_name;
    const book_name = request.body.book_name;
    const price = request.body.price;
    const author = request.body.author;

    const statement = `insert into BookTable 
        (subject_name, book_name, price, author) values
        ('subject_name', 'book_name', price, 'author')`;
    const connection = db.connect();
    connection.query(statement, (error, books) => {
        connection.end();
        response.send(utils.createResponse(error, books));
    });
});

router.put('/BookTable/:book_id', (request, response) => {
    const book_id = request.params.book_id;
    const subject_name = request.body.subject_name;
    const book_name = request.body.book_name;
    const price = request.body.price;
    const author = request.body.author;
    
    const statement = `
        update BookTable set 
            subject_name = 'subject_name',
            book_name = 'book_name',
            price = price,
            author = author
        where book_id = book_id`;
    const connection = db.connect();
    connection.query(statement, (error, books) => {
        connection.end();
        response.send(utils.createResponse(error, books));
    });
});

router.delete('/BookTable/:book_id', (request, response) => {
    const book_id = request.params.book_id;
    const statement = `delete  from  BookTable where book_id = book_id`;
    const connection = db.connect();
    connection.query(statement, (error, books) => {
        connection.end();
        response.send(utils.createResponse(error, books));
    });
});

module.exports = router;