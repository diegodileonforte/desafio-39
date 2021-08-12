const mongoose = require('mongoose');

class EcommerceDbConnect {

    constructor() {
        this.connection = this.createConnection()
    }

    createConnection() {
        const uri = 'mongodb+srv://ddl:ddlcoder@cluster0.hdz0u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
        mongoose.connect(uri, options)
            .then(() => { console.log('Conectado a Mongo') },
                err => { err }
            )
    }
}

module.exports = EcommerceDbConnect
