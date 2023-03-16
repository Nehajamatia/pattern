let string=""
let rows=5
for(let i=1;i<=rows;i++){
    for(space=1;space<=(rows-i);space++){
        string+=" "
    }
    for(j=1;j<=2*i-1;j++){
        string+="*"
    }
    string+="\n"
}
for(let i=rows-1;i>=1;i--){
    for(space=1;space<=(rows-i);space++){
        string+=" "
    }
    for(j=1;j<=2*i-1;j++){
        string+="*"
    }
    string+="\n"
}
console.log(string)

