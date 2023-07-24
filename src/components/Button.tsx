import React, { useState } from 'react';
interface ButtonProps {
    text: string | number | boolean,
    onClick?: () => void
}


const Button: React.FC<ButtonProps> = (props) => {
    const { text,onClick } = props;
    const [value, setValue] = useState<string | undefined>();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setValue(e.target.value)
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(e);
        

    }
    

      
     
            return (
                <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleNameChange} placeholder='Enter your Name' />
            <h1>{value}</h1>
            <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Button;