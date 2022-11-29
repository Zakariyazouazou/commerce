import { button, Button } from '@material-tailwind/react';
import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Card} from '../../Component/Index'
import './Panier.css'

    

  // PrixTotal.innerHTML=`<h2> PrixTotal = ${z}</h2>` 


  // var PrixTotal = document.getElementById("PrixTotal") ; 
   





 const Panier = ({datashopping,onclickPanier ,removeThis,panierData}) => {
  


  
      var z = 0 ;  

     for (var i = 0; i < panierData.length; i++) {
           z = parseFloat(panierData[i].prix)  + z
        
     }
     
      return (
        <>

        <div className='mt-16 ' >
            <h2 className='PrixTotal'> PrixTotal {z} Dhm</h2>
            {panierData.length > 0 &&  <Link to='/Finish'><Button className='m-2 bg-yellow-600'>Finish la commande</Button></Link> }

        </div>
        <div className='mt-16 flex flex-row flex-wrap pnierstayle justify-center'>
        {
          panierData.map(element =>{
          return <>
             <Card
              name = {element.name}
              image = {element.P_image}
              details = {element.Model}
              Prix = {element.prix}
              Show="show"
              add="add"
              data = {element}
              link={element.Id_produit} 
              ID = {element.Id_produit} 
              RemoveclickPanier={removeThis}
              showing="true"
              remove="true"
              />
              </>  
         })
        }
        </div>


       
 
      </>
       
      )
  
}

export default Panier


// <Button onClick={()=>removeThis(element.Id_produit)} >Delette</Button>

           //    datashopping
               
               
        //    panierData.map((produit)=>{
        //      const filterPanier =  AllProduct.filter((element)=>{  
        //             return    element.Id_produit  == produit   
        //      })  
        //       // filterPanier.map(elements =>{
        //       //  return (<h1 className='mt-26'>Hello</h1>)
        //       // }) 
        //  })
          //  console.log(filterPanier)



          // console.log(datashopping[0])
          // console.log(AllProduct[0].Id_produit) 






          // useEffect(() =>{ 
  //   fetch('http://localhost/Cars/Fetch%20Data/Secret/Produit.php')
  //   .then (res => res.json())
  //   .then (productdata => SetAllProduct(productdata))
  // })