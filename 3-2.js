process.argv.forEach(
    function(item,index){
        console.log(item + " " + index)
        
        if(item == "--exit"){

            setTimeout(function(){
                console.log("program end");
                process.exit();
            }, 7000);
        }
    }
);

// node 3-2.js
// node 3-2.js a
// node 3-2.js a b