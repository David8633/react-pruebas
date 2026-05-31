import { useState } from 'react'
import './App.css'
import { ProductForm } from './components/ProductFrom'
import { ProductList } from './components/ProductList'
import { Filters } from './components/Filters'

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products"))||[]);

  function addProduct(newProduct){
    setProducts(prev =>{
      const updated = [...prev,newProduct];
      localStorage.setItem("products",JSON.stringify(updated));
      return updated;
    });
  }

  function filters(newFilter) {
    setProducts(prev => {
      return prev.filter(product => product.name == newFilter.name || product.category == newFilter.category)
    })
  }

  function toggleButton(id){
    setProducts(prev => {
      const updated = prev.map(product => {
        return product.id == id ? {...product,isOferted:!product.isOferted} : product
      })

      localStorage.setItem("products",JSON.stringify(updated));
      return updated;
    })
  }

  return (
    <>
      <ProductForm onAddProduct={addProduct}/>
      <Filters onFilters={filters}/>
      <ProductList products={products} onToggleButton={toggleButton}/>
    </>
  )
}

export default App
