var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var topicsHandler = require('./routes/topicsHandler');
var profileHandler = require('./routes/profileHandler');
var index = require('./routes/index');
var quizPlayerHandler = require('./routes/quizPlayerHandler');

var mongoose = require('mongoose');
mongoose.connect('mongodb://172.23.238.253/quizRT');
var db = mongoose.connection;
var Quiz = require("./models/quiz");

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

//register routers to route paths

app.use('/', index);
app.use('/profileHandler', profileHandler);
app.use('/topicsHandler', topicsHandler);
app.use('/quizPlayerHandler',quizPlayerHandler);

   var mongoose = require('mongoose');
   //mongoose.connect('mongodb://172.23.238.253/quizRT');
   var db = mongoose.connection;
       Profile.findOne({userId: "AY1"})
         .populate("topicsPlayed.topicId")
                var data2=JSON.stringify(profileData, null, 4);
                console.log(data2);
                res.json(profileData);

server.listen(3000, function() {
  console.log('App started for EJS testing!!');
});
