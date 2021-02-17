const knex = require('knex');
const dotenv = require('dotenv').config({path:'./.env'},(err,result)=>{
    if(err) console.error(err);
    else console.log(result);
});
const query=knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database:'App'
    },
    pool:{min:0,max:100}
});
module.exports=query;