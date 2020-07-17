const fs = require("fs")
const data = require("./data.json")

exports.allFieldsFilled = function allFieldsFilled(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "")
        return res.send("Por favor preencha todos os dados")
    }

    let { avatarUrl, name, birth, gender, teachingMethod, services } = req.body


    id = Number(data.teachers.length + 1)
    created_at = Date.now()
    birth = Date.parse(req.body.birth)

    data.teachers.push({
        id,
        avatarUrl,
        name,
        birth,
        gender,
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
