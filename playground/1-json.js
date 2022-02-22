const fs = require('fs')
const { userInfo } = require('os')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON =  dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Yorvin'
user.age = 54


const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)