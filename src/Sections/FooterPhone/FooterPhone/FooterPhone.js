import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import coolant from '../../../Images/Symbol/coolant.png'
import house from '../../../Images/Symbol/house.png'
import search from '../../../Images/Symbol/search.png'
import shopping_cart from '../../../Images/Symbol/shopping-cart.png'
import user from '../../../Images/Symbol/user.png'


{/* use classes in function*/}

const Chosethis = ()=>{
        var coolante = document.querySelector('.SelectCoolant')
        var coolante = document.querySelector('.SelectCoolant')
        var housee = document.querySelector('.Selecthouse')
        var searche = document.querySelector('.Selectsearch')
        var Selectshopping_carte = document.querySelector('.Selectshopping_cart')
        var Selectusere = document.querySelector('.Selectuser')
                 housee.classList.remove('choosethis')
                 searche.classList.remove('choosethis')
                 Selectshopping_carte.classList.remove('choosethis')
                 Selectusere.classList.remove('choosethis')
                 coolante.classList.add('choosethis')
}





const FooterPhone = () => {
  return (
    
      <div className='SmartphoneFooter'>
           <Link to="#"> <img src={coolant} className='SelectCoolant' onClick={Chosethis}/>  </Link>
           <Link to="/">  <img src={house} className='Selecthouse' onClick={chooseHouse}/></Link>
           <Link to="/Serch">  <img src={search} className='Selectsearch' onClick={choosesearch}/></Link>
           <Link to='/Panier'>  <img src={shopping_cart} className='Selectshopping_cart' onClick={chooseshopping}/></Link>
           <Link to="#">  <img src={user} className='Selectuser' onClick={chooseuser}/></Link>
      </div>


  )
}

export default FooterPhone




const chooseHouse = ()=>{
  var coolante = document.querySelector('.SelectCoolant')
  var coolante = document.querySelector('.SelectCoolant')
  var housee = document.querySelector('.Selecthouse')
  var searche = document.querySelector('.Selectsearch')
  var Selectshopping_carte = document.querySelector('.Selectshopping_cart')
  var Selectusere = document.querySelector('.Selectuser')
    coolante.classList.remove('choosethis')
    searche.classList.remove('choosethis')
    Selectshopping_carte.classList.remove('choosethis')
    Selectusere.classList.remove('choosethis')
    housee.classList.add('choosethis')
}
const choosesearch = ()=>{
  var coolante = document.querySelector('.SelectCoolant')
  var coolante = document.querySelector('.SelectCoolant')
  var housee = document.querySelector('.Selecthouse')
  var searche = document.querySelector('.Selectsearch')
  var Selectshopping_carte = document.querySelector('.Selectshopping_cart')
  var Selectusere = document.querySelector('.Selectuser')
      coolante.classList.remove('choosethis')
      housee.classList.remove('choosethis')
      Selectshopping_carte.classList.remove('choosethis')
      Selectusere.classList.remove('choosethis')
      searche.classList.add('choosethis')
}
const chooseshopping = ()=>{
  var coolante = document.querySelector('.SelectCoolant')
  var coolante = document.querySelector('.SelectCoolant')
  var housee = document.querySelector('.Selecthouse')
  var searche = document.querySelector('.Selectsearch')
  var Selectshopping_carte = document.querySelector('.Selectshopping_cart')
  var Selectusere = document.querySelector('.Selectuser')
      coolante.classList.remove('choosethis')
      housee.classList.remove('choosethis')
      searche.classList.remove('choosethis')
      Selectusere.classList.remove('choosethis')
      Selectshopping_carte.classList.add('choosethis')
    }
const chooseuser = ()=>{
  var coolante = document.querySelector('.SelectCoolant')
  var coolante = document.querySelector('.SelectCoolant')
  var housee = document.querySelector('.Selecthouse')
  var searche = document.querySelector('.Selectsearch')
  var Selectshopping_carte = document.querySelector('.Selectshopping_cart')
  var Selectusere = document.querySelector('.Selectuser')
      coolante.classList.remove('choosethis')
      housee.classList.remove('choosethis')
      Selectshopping_carte.classList.remove('choosethis')
      searche.classList.remove('choosethis')
      Selectusere.classList.add('choosethis')
}

