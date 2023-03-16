let string='';
for (let i=1;i<=5;i++){
    for(let space=1;space<=(5-i);space++){
        string+=" ";

    }
    for(let j=1;j<=i;j++){
        string+="* "
    }
    string+="\n";
}
console.log(string);