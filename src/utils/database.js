const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fastifycrud')
.then( ()=> console.log("mongodb conected..."))
.catch((err)=> console.log(err));