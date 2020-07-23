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

    }
}
