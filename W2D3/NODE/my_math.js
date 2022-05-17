 let c = (function(){
    let pi = 3.14;
    function add(x,y){
        return x + y;
    };
    function subtract(x,y){
        return x -y;
    };
    function multiply(x,y){
        return x * y;
    };
    function divide(x,y){
        return x / y;

    };
    return {
       pi,
        add,
         subtract,
         multiply,
         divide
    }

})();

module.exports = c;





