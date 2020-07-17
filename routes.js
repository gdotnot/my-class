const express = require("express")
const routes = express.Router()
const teachersFunctions = require("./teachers-functions")

routes.get("/", (req, res) => {
    return res.redirect("/teachers")
})

routes.get("/teachers", (req, res) => {
    return res.render("teachers/teachers-page")
})

routes.get("/teachers/create", (req, res) => {
    return res.render("teachers/teacher-create")
})

routes.post("/teachers", teachersFunctions.allFieldsFilled  )

routes.get("/students", (req, res) => {
    res.render("students/students-page")
})

module.exports = routes
