const express = require("express")
const routes = express.Router()
const teachersFunctions = require("./teachers-functions")

routes.get("/", (req, res) => {
    return res.redirect("/teachers")
})

routes.get("/teachers", teachersFunctions.allTeachers)

routes.get("/teachers/create", (req, res) => {
    return res.render("teachers/create")
})

routes.post("/teachers", teachersFunctions.allFieldsFilled)

routes.get("/teachers/:id", teachersFunctions.showProfile)

routes.get("/teachers/:id/edit", teachersFunctions.editProfile)

routes.put("/teachers", teachersFunctions.updateProfile)

routes.delete("/teachers", teachersFunctions.deleteProfile)

module.exports = routes
