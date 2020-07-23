const fs = require("fs")
const data = require("./data.json")
const Intl = require("Intl")
const { age } = require("./utils")

exports.allFieldsFilled = function allFieldsFilled(req, res) {

    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "")
        return res.send("Por favor preencha todos os dados")
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
            return res.send("Write file error")
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
        return res.send({
            error: "Teacher not found!",
            status: 404
        }
      )
    }

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
    }

    return res.render("teachers/show", { teacher })

}
