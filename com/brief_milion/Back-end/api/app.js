let express = require('express');
let bodyParser = require('body-parser');
let app = express();

pp.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const Connexion = require('./config/connexion')


const userrouter = require("./routes/user_route");
const participantrouter = require("./routes/participantRoute");
const questionrouter = require("./routes/questionRoute");
const grouperouter = require("./routes/groupeRoute");
// const giftsrouter = require("./routes/groupeRoute");



app.use('/User', userrouter)
app.use('/Participant', participantrouter)
app.use('/Question', questionrouter)
app.use('/Groupe', grouperouter)
.use('/round', roundRoutes);
// app.use('/gifts', giftsrouter);



app.listen(3000, function () {
      console.info("Running RestHub on port 3000");
    });
