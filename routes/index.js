var TheLoaiController = require('../app/controllers/TheLoaiController')
var NXBController = require('../app/controllers/NXBController')
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('login')
    })

    app.use('/TheLoai', TheLoaiController);
    app.use('/NXB', NXBController);
} 
