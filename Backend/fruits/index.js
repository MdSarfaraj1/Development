// taking all exported things of this directory
// this is the entry file for this fruit directory
//the file which will want to require this directory his requist will find ]
//this index.js file and go with this file's exported product
let apple=require("./apple");
let banana=require("./banana");
let orange=require("./orange");
module.exports=[apple,banana,orange];//  exporting all things as a single array
