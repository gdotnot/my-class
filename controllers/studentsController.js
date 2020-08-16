const fs = require("fs")
const data = require("../data.json")
const { date, grade } = require("../utils")

exports.index = function (req, res) {

    return res.render("students/index", { students: data.students })

}

exports.create = function (req, res) {
    return res.render('students/create')
}

exports.store = function (req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "")
        return res.send(
        {
            error: "Por favor preencha todos os dados",
            status: 204
        }
      )
    }

    birth = Date.parse(req.body.birth)

    let id = 1
    const lastStudent = data.students[data.students.length - 1]

    if(lastStudent) {
        id = lastStudent.id + 1
    }

    data.students.push({
        id,
        ...req.body,
        birth,
        grade: grade(req.body.grade)

    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) {
            return res.send({
                error: "Write file error",
                status: 500
            }
          )
        }

        return res.redirect('/students')

      }
    )

}

exports.showProfile = function (req, res) {

    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return student.id == id
      }
    )

    if(!foundStudent){
        return res.send(
        {
            error: "Student not found!",
            status: 404
        }
      )
    }

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthday
    }

    return res.render("students/show", { student })

}

exports.editProfile = function (req, res) {

    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return student.id == id
    }
    )

    if (!foundStudent) {
        return res.send(
        {
            error: "Student not found!",
            status: 404
        }
      )
    }

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }

    return res.render("students/edit", { student })

}

exports.update = function (req, res) {

    const id = Number(req.body.id)
    let index = 0

    const foundStudent = data.students.find((student, foundIndex) => {
        if(student.id == id){
            index = foundIndex
            return true
        }
    })


    if (!foundStudent)
        return res.send(
            {
                error: "Student not found",
                status: 404
            }
        )

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth)
    }

    data.students[index] = student

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err){
            return res.send(
                {
                    error: "Update files gone wrong",
                    status: 500
                }
            )
        }

        return res.redirect(`/students/${id}`)
    })

}

exports.destroy = function (req, res) {

    const id = Number(req.body.id)
    let index = 0

    const foundStudent = data.students.find((student, foundIndex) => {
        if(student.id == id){
            index = foundIndex
            return true
        }
    })

    data.students.pop(index)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err){
            return res.send(
                {
                    error: "Deletation error",
                    status: 500
                }
            )
        }

        return res.redirect("/students")
    })

}
