const controller = require('../controllers/controllers')
module.exports = (app) =>{
    app.get('/allAuthors', (req, res) =>{
        console.log('router for find all');
        controller.findAll(req, res);
    });

    app.get('/getById/:id', (req, res)=>{
        console.log(`router get by`,  req.params.id);
        controller.getById(req, res);
    });

    app.post('/author', (req, res) =>{
        // console.log('router : --->', req.body.id);
        controller.create(req, res);
    });
    app.put('/updateAuthor/:id', (req, res)=>{
        console.log('routers, update record --> ', req.params.id);
        controller.updateRecord(req, res);
    })
    app.delete('/delete/:id', (req, res)=>{
        console.log('delete record ', req.params.id);
        controller.deleteRecord(req, res);
    })
}