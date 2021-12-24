import React, {useEffect, useState} from 'react'
import '../src/css/styles.css';
import NavBar from './components/NavBar'
import ShirtSection from './components/ShirtSection'
import SortFilter from './components/SortFilter'
import data from '../src/components/shirts.json'
import DetailsPage from './components/DetailsPage'


const App = () => {

const [products, setProducts] = useState([...data.products]);
const [filtered, setFilter] = useState('');
const [sortt, setSort] = useState("");
  
//sorting based on price
let dataSort = (e) => {
 
const priceSort = e.target.value;

const sortRes = products.sort((a,b) => {
  if(priceSort === 'ascsort')
  {
    return a.price - b.price;
  }
  else if(priceSort === 'descsort')
  {
    return b.price - a.price;
  }

})

  setSort({
    sortt: priceSort,
    products: sortRes 
  })
  
}



// console.log(sortC);

//filter based on color
const dataFilColor = (e) => {

  const colorSort = e.target.value;


 let val = products.filter((product) => {
  return product.primaryColour === colorSort})
    setProducts(val)

}

const dataFilDiscount = (e) => {

  const discountSort = e.target.value;


 let val = products.filter((product) => {
  return product.discountDisplayLabel === discountSort})
    setProducts(val)
    console.log(discountSort);
}

const dataFilBrand = (e) => {

  const brandSort = e.target.value;


 let val = products.filter((product) => {
  return product.brand === brandSort})
    setProducts(val)

}




let dataSearch = products.filter(item => {
    return Object.keys(item).some(key => 
      item[key].toString().toLowerCase().includes(filtered.toString().toLowerCase()))
})


  return (
    <div>
      <NavBar filtered = {filtered}
        setFilter = {setFilter}
        dataSearch = {dataSearch}
        products = {products}/>
      <SortFilter 
        setFilter = {setFilter}
        setSort = {setSort}
        sortt = {sortt}
        dataSort = {dataSort}
        products = {products}
        filtered = {filtered}
        dataFilColor = {dataFilColor}
        dataFilBrand = {dataFilBrand}
        dataFilDiscount = {dataFilDiscount}
        ></SortFilter>
      <ShirtSection products = {products}  dataSearch = {dataSearch}/>

      
      
    </div>
  )
}

export default App
