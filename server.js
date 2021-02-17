const http = require("http");
const PORT = process.env.PORT || 3010;
const app = require('./app');
const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log("Your app is running on port 3010");
})