const { Router } = require('express')
const routes = Router()
const teachersController = require('./controllers/teachersController')
const studentsController = require('./controllers/studentsController')

routes.get('/', (req, res) => {
    return res.redirect('/teachers')
})

// ======== TEACHERS ========
routes.get('/teachers', teachersController.index)

routes.get('/teachers/create', teachersController.create)

routes.post('/teachers', teachersController.store)

routes.get('/teachers/:id', teachersController.showProfile)

routes.get('/teachers/:id/edit', teachersController.editProfile)

routes.put('/teachers', teachersController.update)

routes.delete('/teachers', teachersController.destroy)


// ======== STUDENTS ========
routes.get('/students', studentsController.index)

routes.get('/students/create', studentsController.create)

routes.post('/students', studentsController.store)

routes.get('/students/:id', studentsController.showProfile)

routes.get('/students/:id/edit', studentsController.editProfile)

routes.put('/students', studentsController.update)

routes.delete('/students', studentsController.destroy)
module.exports = routes
