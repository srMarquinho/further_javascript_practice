'use strict';

var List = require('./list.js');

var list = new List();
list.addItem('phone grandma');
console.log(list)

// module.exports = app;
// if (!module.parent) {
//   http.createServer(app).listen(process.env.PORT, function(){
//     console.log("Server listening on port " + app.get('port'));
//   });
// }
