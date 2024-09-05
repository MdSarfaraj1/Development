 /// exporting the obj object to other files        
        // const sum =(a,b)=> a+b;
        // const mul=(a,b)=> a*b;
        // let PI=3.35;
        // let obj={
        //     sum:sum,
        //     mul:mul,
        //     PI:PI
        // };
        // module.exports=obj; 

        // also can be written as
                // module.exports={
                //     sum:sum,
                //     mul:mul,
                //     PI:PI
                // };

        // // also can be written as 
                // module.exports.sum =(a,b)=> a+b;
                // module.exports.mul=(a,b)=> a*b;
                // module.exports.PI=3.35;

        // also can be written  using  just exports wthout module. 
        // but have to give the keyword as without keyword export will be 
        // treated as normal variable
                export const sum =(a,b)=> a+b;
                export const mul=(a,b)=> a*b;
                export const PI=3.35;