import { useState } from "react"
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Prison Break']);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={onAddCategory} />
        <ol>
          { categories.map(category => {
            return <li key={category}>{category}</li>
          }) }
        </ol>
    </>
  )
}

export default GifExpertApp