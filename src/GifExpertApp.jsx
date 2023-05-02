import { useState } from 'react'
import { AddCategory , GifGrid } from './components'

export const GifExpertApp = () => {

const [categories, setCategories] = useState([''])

  const onAddCategory = ( newCategory ) => { 
    if (categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ]);

  }
  
  return (
      <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
      />

      {
        //Utilizo el arreglo categories y con el metodo map recorro cada uno de los elementos del arreglo categories y regresar algo nuevo
        categories.map((category) => (
          <GifGrid
            key={category}
            category = {category}
          />)
        
      )}

      </>
  )
}
