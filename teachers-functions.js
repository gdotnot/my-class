const fs = require("fs")
const data = require("./data.json")
const Intl = require("Intl")
const { age, date, graduation } = require("./utils")

exports.allFieldsFilled = function allFieldsFilled(req, res) {

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

    let { avatarUrl, name, birth, gender, graduation, teachingMethod, services } = req.body


    id = Number(data.teachers.length + 1)
    created_at = Date.now()
    birth = Date.parse(req.body.birth)

    data.teachers.push({
        id,
        avatarUrl,
        name,
        birth,
        gender,
        graduation,
        teachingMethod,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) {
            return res.send({
                error: "Write file error",
                status: 500
            }
          )
        }
      }
    )

}

exports.showProfile = function showProfile(req, res) {

    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return teacher.id == id
      }
    )

    if(!foundTeacher){
        return res.send(
        {
            error: "Teacher not found!",
            status: 404
        }
      )
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
        graduation: graduation(foundTeacher.graduation)
    }

    return res.render("teachers/show", { teacher })

}

exports.editProfile = function editProfile(req, res) {

    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return teacher.id == id
    }
    )

    if (!foundTeacher) {
        return res.send(
        {
            error: "Teacher not found!",
            status: 404
        }
      )
    }

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render("teachers/edit", { teacher })

}

exports.updateProfile = function updateProfile(req, res) {

    const id = Number(req.body.id)
    let index = 0

    const foundTeacher = data.teachers.find((teacher, foundIndex) => {
        if(teacher.id == id){
            index = foundIndex
            return true
        }
    })


    if (!foundTeacher)
        return res.send(
            {
                error: "Teacher not found",
                status: 404
            }
        )

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err){
            return res.send(
                {
                    error: "Update files gone wrong",
                    status: 500
                }
            )
        }

        return res.redirect(`/teachers/${id}`)
    })

}

exports.deleteProfile = function deleteProfile(req, res) {

    const id = Number(req.body.id)
    let index = 0

    const foundTeacher = data.teachers.find((teacher, foundIndex) => {
        if(teacher.id == id){
            index = foundIndex
            return true
        }
    })

    data.teachers.pop(index)

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err){
            return res.send(
                {
                    error: "Deletation error",
                    status: 500
                }
            )
        }

        return res.redirect("/teachers")
    })

}
