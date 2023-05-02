import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    
    //Hook - useState
    const [inputValue, setInputValue] = useState('')

    //Inputchange para modificar el valor del input
    //Desestructurar el event para solo usar el target
    const onInputChange = ({target}) => { 
        setInputValue(target.value);
    }

    //Onsubmit para obtener el valor de input
    const onSubmit = (event) => { 
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;

        onNewCategory(newInputValue);
        setInputValue('')
    }


    return (
        //Lo manejamos mediante un formulario
        <form onSubmit= {onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                //Capturamos el valor y lo asociamos
                value={inputValue}
                onChange={onInputChange}
            />
      </form>
    
  )
}
