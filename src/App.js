import React , {useState , useEffect} from 'react';
import './App.css';
import {json, Route , Routes} from 'react-router-dom'
import {Navbarre , Footer , FooterPhone  } from './Sections/SectionsIndex'
import { Home , Serch, Car_Symbol_Page , All_Product , Categorie_Page , One_Product , Panier , Finish} from './Pages';

import 'swiper/css';








var dataPanier = []
var Total = 0 ; 

   

function Add(data){
  dataPanier.push(data)
  dataPanier = dataPanier 
  console.log(dataPanier)
  Total = dataPanier.length
  return Total
}





// function removit(){
//     dataPanier.pop() 
// }



 


function App() {
    


   var [panierData , SetPanierData] = useState([]) ; 
   var [totallength , SetTotalLength] = useState(0)

      
       

      useEffect(() => {
          SetPanierData(dataPanier)
      }, [dataPanier])


      function  removeThis(data) {
          SetPanierData(panierData.filter((items)=>{
          return  (
                  items.Id_produit != data
               )
           }))
        }

      function hendlclick (productId) {
        panierData.push(productId)  
          dataPanier = dataPanier 
          
      }

        //   setInterval(() => {
        //     var L = dataPanier.length
        //     console.log(L)   
        // }, 500);
    
         

          
   

  return (
   <div>
    
     <Navbarre  dataom={dataPanier}  />
        <Routes >
            <Route path='/'  element={<Home  onclickPanier={hendlclick} />} />
            <Route  path='/Car_Symbol_Page/:Symbol'  element={<Car_Symbol_Page  onclickPanier={hendlclick} />} />
            <Route  path='/All_Product'   element={<All_Product  onclickPanier={hendlclick} />} />
            <Route  path='/Categorie_Pag/:Categore'   element={<Categorie_Page   onclickPanier={hendlclick}/>} />
            <Route  path='/One_Product/:idProduct'   element={<One_Product  removit={removeThis}  onclickPanier={hendlclick}/>} />
            <Route  path='/Panier'   element={<Panier  onclickPanier={hendlclick}  removeThis={removeThis} panierData={panierData}/>} />
            <Route  path='/Serch'   element={<Serch/>} />
            <Route path='/Finish'  element={<Finish panierData={panierData}/>}/> 
            {/*  <Route  path='/Liquide'   element={<Liquide/>} />
              */}
        </Routes>






          
          <Footer/>  
          <FooterPhone/>
   </div>

    

   
  );
}

export default App;
//     <Serch/> 



