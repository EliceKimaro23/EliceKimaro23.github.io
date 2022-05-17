// 

function  person (name){
    this.name = name;

}

function employee (id){
    this.id = id;
}
let p = new person ("Jack");
console.log(p.name);