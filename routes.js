const express = require("express")
const routes = express.Router()
const teachersFunctions = require("./teachers-functions")

routes.get("/", (req, res) => {
    return res.redirect("/teachers")
})

routes.get("/teachers", (req, res) => {
    return res.render("teachers/teachers")
})

routes.get("/teachers/create", (req, res) => {
    return res.render("teachers/create")
})

routes.post("/teachers", teachersFunctions.allFieldsFilled)

routes.get("/teachers/:id", teachersFunctions.showProfile)

module.exports = routes
