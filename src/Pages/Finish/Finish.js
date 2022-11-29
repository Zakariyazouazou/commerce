import React from 'react'
import {Card} from'../../Component/Index'
import './Finish.css'
import { Button } from '@material-tailwind/react'
import { Input } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

var formeCategorie = false ; 
const Finish = ({panierData , removeThis}) => {




     



    const  Valeure =(Id_produit,prix,Prix) =>{
         var Id_produit = document.getElementById(Id_produit)
         var prix = document.getElementById(prix)
         prix.innerHTML= `<h1> ${(Id_produit.value)*parseFloat(Prix)} </h1>`

         var Total = 0 ; 
            for ( var i=0 ; i<panierData.length ; i++) {
                var Total = parseFloat(document.getElementById(panierData[i].prix).innerText)+Total
                var Sold = document.getElementById('votreSold'); 
                Sold.innerHTML=`<h1>votre Sold est ${Total} Dhm</h1>`
        }
      } 
 
       




      var z = 0 ;  

      for (var i = 0; i < panierData.length; i++) {
            z = parseFloat(panierData[i].prix)  + z
         
      }

      function showForm(){
             var form = document.querySelector('.formulaire')
             form.classList.remove('formulaire')
             form.classList.add('toshoww')
    }

     

    var error = ""
    function envoyerForm(){
         var name1 = document.getElementById('name1')
         var name2 = document.getElementById('name2')
         var name3 = document.getElementById('name3')
         var name4 = document.getElementById('name4')
        
        if(name1.value.length !=0 && name2.value.length != 0 && name3.value.length != 0 && name4.value.length != 0){
                var finelresult = document.querySelector('.finelresult')
                var Buttonfinish = document.querySelector('.Buttonfinish'); 
                finelresult.classList.remove('finelresult')
                finelresult.classList.add('toshoww')
                var form = document.querySelector('.toshoww')
                form.classList.add('formulaire')
                Buttonfinish.classList.add('Buttonfinish')
                form.classList.remove('toshoww')
       }

  }



      
  return (
    <div className='mt-32'> 
     <h1 id='votreSold'> Prix Total {z}</h1> 
     <Button   onClick={showForm} className=' m-3 w-28 p-3 Buttonfinish bg-orange-400' >finish</Button>

     {
        panierData.map(element =>{
        return <div className='Mydivfinish mt-3 mb-3 w-10/12'>
                    <h1 className='inline-block'>Prix : </h1> <h1 id={element.prix} className='inline-block'> {element.prix} </h1> <h1 className='inline-block ml-1'> Dhm </h1>
                        <div className='w-full text-center '>
                        <div className='flex justify-items-center w-10/12 items-center '>
                            <img className='w-48 ml-2' src={element.P_image} alt="productImage" />
                            <h6 className='font-bold text-black' >{element.name}</h6>
                            <input type="number" id={element.Id_produit} name="Quantite" className='form-control block w-32 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2' min={1} onClick={()=>{Valeure(element.Id_produit,element.prix,element.prix )}}/><label for="Quantite">Quantite</label>
                        </div>
                    </div>
            </div>  
            
       })
      } 
       
     {
        <div className='formulaire w-2/3'>
            <form >
                    <div className="flex w-full items-end gap-4 p-5 flex-row flex-wrap">
                        <Input variant="static" id='name1'  label="name" placeholder="Static" required/>
                           <h6 className='text-red-600'>{error}</h6>
                        <Input variant="static" id='name2'  label="LastName" placeholder="Static" required/>
                        <Input variant="static" id='name3'  label="PhoneNuber" placeholder="Static" required/>
                        <Input variant="static" id='name4'  label="Local" placeholder="Static" required/>
                        <Input variant="static" id='name5'  label="Email" placeholder="Static" required/>
                    </div>
            </form>
            <Button  type='submit'   onClick={envoyerForm} className=' m-3 w-32 p-3 Buttonfinish bg-orange-400' >envoyer form</Button>
        </div>  
     }

     {
        <div className='finelresult w-2/3 p-7 text-center'>
             <h1 className='text-gray-800'>Thanks to shoose our page... </h1>
             <Link to='/'><Button  type='submit'    className=' m-3 w-28 p-3 Buttonfinish bg-orange-400 ' > return Home ...</Button></Link>
        </div>    
     }

    </div>
  )
}

export default Finish
                                                 