const express = require('express')



const app = express();

const rootCall = ( req, res) => res.send('Thank you very much');


app.get('/', (req, res) =>{
    res.send("thank you for calling me");
})


app.listen(3000, () => console.log('listening to port 3000'));