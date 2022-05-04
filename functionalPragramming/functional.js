window.onload = function(){
    tester();
}

const a = [1,2,3,4];
function sum(a){
    console.log(a.reduce((total, input) => (total + input),0));
}
sum(a);

function multiply(a){
    console.log(a.reduce((total,input) => (total * input),1));
}
multiply(a);



const str = "jag testar";
function reverse(str){
    console.log([...str].reduce((acc, char)=> char + acc,''));
}
reverse(str);


function tester(){
    describe ("sum", function(){
     it("return the sum of elements in an array", function(){
 assert.isNaN(sum([1,2,3]),6) ;
     });

     it("return the product of elements in an array", function(){
        assert.isNaN(multiply([1,2,3,4]),24) ;
            });

            it("return the reverse of string ", function(){
                assert.isNaN(reverse(["Eleine"]),"enielE") ;
                    });
    });
    mocha.run();

}