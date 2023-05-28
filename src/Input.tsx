
function Input({type,name,value,onChange,id}:{type:string,name:string,value:string,onChange?:any,id?:string}){
    return <input id={id||""} type={type} name={name} value={value} onChange={onChange} placeholder={name} />
}

export default Input;
