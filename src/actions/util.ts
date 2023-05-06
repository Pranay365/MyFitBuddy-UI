export  function convertToObj(field:string,value:any){
    console.log(value);
    return value.reduce((total:any,el:any)=>{
        console.log(total);
        total[el[field]]=total[el[field]]||[];
        total[el[field]].push(el);
        return total;
    },{})
}