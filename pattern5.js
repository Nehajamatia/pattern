let string="";
let number=1;
for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
       string+=number;
       number++;
    }
    string+="\n";
}
console.log(string);