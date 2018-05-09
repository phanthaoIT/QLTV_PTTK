var TheLoaiController = require('../app/controllers/TheLoaiController')
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('login')
    })

    app.use('/TheLoai', TheLoaiController);
} 
