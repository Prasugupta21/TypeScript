import React, { useState } from 'react';
import { useCounter } from './context/Counter';
interface ButtonProps {
    text: string | number | boolean,
    onClick?: () => void
}


const Button: React.FC<ButtonProps> = (props) => {
const context=useCounter();

   
    

      
     
            return (
                <div>
 <h1 onClick={(e)=>context?.setCount(context?.value+1)}>      {context?.value}</h1>
        </div>
    )
}

export default Button;