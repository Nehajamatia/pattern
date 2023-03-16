let rows=5;
let string="";
for(let i=1;i<=rows;i++)
{
    for(let j=1;j<=rows;j++)
    {
        if((i+j)<=rows){
            string+=" "
        }
        else{
            string+="*"
        }
    }
    string+="\n"
}
console.log(string)