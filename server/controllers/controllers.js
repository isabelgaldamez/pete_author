const mongoose = require('mongoose');
const Author = mongoose.model('Author');
// const Comment = mongoose.model('Comment');

module.exports = {
    create: (req, res)=>{

        const newAuthor = new Author(req.body);
        // newAuthor.name = req.body;
        newAuthor.save()
        .then(data => {
            console.log('Data was created successfully');
            res.json({message : 'success', data : data});
        })
        .catch(error => {
            console.log('Error while creating an author');
            res.json({message : 'error', error : error})
        })
    },

    findAll: (req, res) => {
        Author.find({})
        .then(data => {
            console.log('Authors data has been found');
            res.json({message : 'success', data : data});
        })
        .catch(error => {
            console.log('Error while retrieving authors list');
            res.json({message : 'error', error : error})
        })
    },

    getById : (req, res)=>{
        console.log(req.body.id);
        Author.findById({'_id' :  req.params.id})
        .then(data => {
            console.log('Author record found');
            res.json({message : 'success', data : data});
        })
        .catch(error => {
            console.log('Error while retrieving authors list');
            res.json({message : 'error', error : error})
        })
    },

    updateRecord: (req, res)=>{
        console.log(req.body)
        Author.findOneAndUpdate({'_id': req.params.id}, {$set : {name : req.body.name}}, {new : true})
        .then( data =>{
            console.log('Author has been updated');
            res.json({message : 'success', data : data});
        })
        .catch( error => {
            console.log("Error occurred while updating the record", error);
            res.json({message : 'error', data : error});
        })
    },

    deleteRecord: (req, res)=>{
        Author.remove({'_id' : req.params.id})
        .then( data => {
            console.log('Author has been deleted');
            res.json({message : 'success', data : data});
        })
        .catch(error => {
            console.log("Error occurred while deleting a record", error);
            res.json({message : 'error', data : error});
        })
    }
}