let string="";
for(let i=5;i>=1;i--){
    for(let j=1;j<=i;j++){
        string+=String.fromCharCode(j+64);
    }
    string+="\n";
}
console.log(string);