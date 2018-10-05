/**
 * Start require libs
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV)
/**
 * End require libs
 */

/** Start config */


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)

const { User } = require('./models/user');
const { Book } = require('./models/book')

app.use(bodyParser.json());
app.use(cookieParser())

/** GET  */

app.get('/api/getbook', (req, res) => {
    let id = req.query.id;
    Book.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/books', (req, res) => {
    // localhost:3001/books?skip=3&limit=10&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;
    // ORDER = asc || desc
    Book.find().skip(skip).sort({ _id: order }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc)
    })
})

/** POST */

app.post('/api/book', (req, res) => {
    const book = new Book(req.body);
    book.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            bookId: doc._id
        })
    })
})

/** UPDATE */

app.post('/api/bookupdate',(req,res)=>{

    /** Se puede hacer una variable data con los campos a actualizar para validar que esté todo
     * const data = {
     *      name: ''.
     *      value:''
     * }
     */
    Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
})

/** DELETE */

app.delete('/api/deletebook',(req,res)=>{
    let id = req.query.id;
    Book.findByIdAndRemove(id,(err,doc)=>{
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server running on port", port)
})

/** End config */