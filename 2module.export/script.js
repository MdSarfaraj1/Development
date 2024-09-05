// const math=require("./math");  // importing math.js file's exported product
    // importing from same directory
// console.log(math);
import {sum,mul} from "./math.js";  // to use import instead of require 
// we have to create a packge.json file in the same directory and 
// have to write  "type":"module"  there
console.log(sum(5,7));


const frut=require("./fruits/index.js");// importing from another directory
console.log(frut);