let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get("/tecnologia", (req, res) => {
    res.render("session/tecnology")
}) 

app.listen("3001", () => console.log("entrei"));