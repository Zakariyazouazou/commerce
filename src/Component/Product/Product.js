import React from 'react'
import {Card} from '../Index'
const Product = ({data , Panier , onclickPanier}) => {

  return (
    <>
      <h1 className='font-bold text-black ml-5 '>All Product</h1>
      <div className=' flex justify-center overflow-hidden flex-row flex-wrap'>
          {
              data.map(element =>{

                  return  <Card 
                          name = {element.name}
                          image = {element.P_image}
                          details = {element.Model}
                          Prix = {element.prix}
                          Show="show"
                          add="add"
                          link={element.Id_produit} 
                          Panier={Panier}
                          data = {element}
                          ID = {element.Id_produit}
                          onclickPanier={onclickPanier }
                      />
              })
          } 
      </div>
    </>
  )
}

export default Product
