module.exports = {
    age: function age(timeStamp) {

        const today = new Date()
        const birthday = new Date(timeStamp)

        let age = today.getFullYear() - birthday.getFullYear()
        const month = today.getMonth() - birthday.getMonth()

        if(month < 0 || month == 0 && today.getDate() < birthday.getDate()){
            age = age - 1
        }

        return age

    },
    date: function date(timeStamp) {

        const date = new Date(timeStamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
                day,
                month,
                year,
                iso: `${year}-${month}-${day}`,
                birthday: `${day}/${month}`
            }

    },
    graduation: function graduation(option) {

        switch (option) {

            case "ensinoMedio":
                return "Ensino Médio Completo"

            case "ensinoSuperior":
                return "Ensino Superior Completo"

            case "mestrado":
                return "Mestrado"

            case "doutorado":
                return "Doutorado"

            default:
                break;

        }
    },
    grade: function grade(option) {

        switch (option) {

            case "EF5":
                return "5º Ano do Ensino Fundamental"

            case "EF6":
                return "6º Ano do Ensino Fundamental"

            case "EF7":
                return "7º Ano do Ensino Fundamental"

            case "EF8":
                return "8º Ano do Ensino Fundamental"

            case "EF9":
                return "9º Ano do Ensino Fundamental"

            case "EM1":
                return "1º Ano do Ensino Médio"

            case "EM2":
                return "2º Ano do Ensino Médio"

            case "EM3":
                return "3º Ano do Ensino Médio"
        }
    }
}
