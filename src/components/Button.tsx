import React,{useState} from 'react';
interface ButtonProps{
    text:string | number | boolean,
    onClick?:()=>void
}



//for giving object 

interface Book{
    name:string,
    price:number
}

const Button:React.FC<ButtonProps>=(props)=>{
    const {text}=props;
    const [value,setValue]=useState<Book>({
        name:'one',
        price:10
    });
    return(
        <div>
        <h3>{value.name}(RS.{value.price})</h3>
        <button onClick={()=>setValue({name:'TWO',price:20})}>
{text}
        </button>
        </div>
    )
}

export default Button;