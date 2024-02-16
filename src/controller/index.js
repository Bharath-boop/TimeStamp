import fs from 'fs'

const date = (req, res) => {
    try {

        let today = +new Date()
        let time = new Date().toISOString()
        fs.writeFileSync(`src/controller/DATETIME/${today}.txt`, `${time}`, 'utf8')
        let data = fs.readFileSync(`src/controller/DATETIME/${today}.txt`, 'utf8')
        res.status(200).send({
            data
        })

    } catch (error) {
        res.status(500).send({
            message: "internal server error"
        })
    }
}

export default {
    date
}