import React from 'react'
import { Select, Option, select } from "@material-tailwind/react";
import './FilterZone.css'





var Val = document.getElementById('customRange1')
  const  Valeure =() =>{
    var Val = document.getElementById('customRange1')
    var result = document.getElementById('placeVal')
    result.innerHTML= `<h5>Prix :  ${Val.value} Dhm</h5>`
  }  


   


  {/* Animation to show  filter Zone*/}
  function ShowFilter(){
    document.querySelector('.MyFilterZone').classList.add('showMyFilterZone')
    document.querySelector('.MyFilterZone').classList.remove('DropFilteAnimation')
}
  
  {/* Animation to Close  filter Zone*/}

function DropFilter(){
  document.querySelector('.MyFilterZone').classList.add('DropFilteAnimation')

}






const FilterZone = ({showCategorie,Categoriedata,clickitabe2,clickitabel1,ShowPrix,Places,ShowPlace,Country,showCountry,CarData ,ShowCarData,CarDataContent,ShowCarDataContent ,  clickitabel }) => {


  
  const  GivemeCountry=()=>{
    var Place = document.getElementById('Place'); 
    var ShowingCountry = document.getElementById('ShowingCountry')
    ShowingCountry.innerHTML=`
                <option value="" ></option>
                `
    for (var i=0; i<Country.length; i++){
              if(Place.value==Country[i].Origine){
                ShowingCountry.innerHTML+=`
                    <option value="${Country[i].ID}" >${Country[i].coutry_name}</option>
                `
              }
    }
   }



   const  GivemeCars=()=>{
    var Cars = document.getElementById('Cars'); 
    var ShowingCars = document.getElementById('ShowingCars')
    clickitabel1(Cars.value)
    ShowingCars.innerHTML=`
                <option value="" ></option>
                `
    for (var i=0; i<CarDataContent.length; i++){
              if(Cars.value==CarDataContent[i].Parent){
                ShowingCars.innerHTML+=`
                    <option value="${CarDataContent[i].ID_content}" >${CarDataContent[i].Name}</option>
                `
              }
    }
   }

  function filterChange(){
    var CategorieId = document.getElementById('CategorieId').value
    clickitabel(CategorieId)  
  }
  function filterChangeMOdelCars(){
    var ModelIDCars = document.getElementById('ShowingCars').value
    clickitabe2(ModelIDCars)  
  }




  return (
    <>
    <div  className='bg-orange-100 mr-4 w-1/4 text-center float-left MyFilterZone'>
         <h1>Filter</h1>
{/*============================================================================================================================================================================= */}
        {/*Filter Bye Categorie*/}
        {showCategorie && 
          <>
          <h5 className='float-left ml-2'>All Categorie : </h5> 
          <select  id='CategorieId' onChange={filterChange} className='form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-orange-200 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' >
          <option value=""></option>
          return {
              Categoriedata.map(element =>{
               return   <option value={element.ID_model}>{element.Model}</option>
            })
          }  
         </select>
         </>}

         <div className='h-2'/>
{/*======================================================================================================================================================================================================================== */}
                {/*Show Places*/}

       {/* {ShowPlace && <>
        <h5 className='float-left ml-2'>Places : </h5> 
        <select id='Place' onChange={GivemeCountry} label="Select Categorie" className='form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-orange-200 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" '  aria-label="Default select example">
             <option value=""></option>
        {
             Places.map(element =>{
              return   <option value={element.ID_place}>{element.Name_place}</option>
            })
          }
         </select>
         </>}
        <div className='h-2'/>*/}
{/*======================================================================================================================================================================================================================== */}
              {/*Show Country*/} 
     {/*  {showCountry &&
        <> 
        <h5 className='float-left ml-2'>Country : </h5> 
        <select id='ShowingCountry' className='form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-orange-200 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" '  aria-label="Default select example">
              <option value=""></option>
         </select>
         </>  
         }*/}
{/*========================================================================================================================================================================================================================*/}
         {/*Show Cars Model*/}
         {
          ShowCarData && <>
          
          <h5 className='float-left ml-2'>Cars Model : </h5> 
          <select id='Cars' onChange={GivemeCars} label="Select Categorie" className='form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-orange-200 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" '  aria-label="Default select example">
              <option value=""></option>
          {
          CarData.map(element =>{
           return   <option value={element.Id_car}>{element.Model}</option>
             })
          }
          </select>
          </>
         }

{/*========================================================================================================================================================================================================================*/}
         {/*Show Cars Model Content */}

         {ShowCarDataContent &&
          <> 
          <h5 className='float-left ml-2'> All Car Content : </h5> 
          <select id='ShowingCars' onChange={filterChangeMOdelCars} className='form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-orange-200 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" '  aria-label="Default select example">
                <option value=""></option>
           </select>
           </>  
           }












{/*======================================================================================================================================================================================================================== */}
         {/* Filter Data with Prix*/}
         {ShowPrix && <div className="relative pt-1">
              <h5 id='placeVal'>Prix</h5>
            <input
                type="range"
                className="form-range appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                onClick={Valeure}
                id="customRange1"
                min="0"
                max="10000"
              />
          </div>}
{/*========================================================================================================================================================================================================================*/}      {/* Filter Data with Prix*/}

        



       <div className='DropFilteZone font-bold  float-left mt-22 mr-4'>
           <h1 className='bg-orange-100  text-black ' onClick={DropFilter}>X</h1>     
       </div>
    </div>


    <div className='SymbolFilteZone float-left mt-22 mr-4 '>
            <h1 className='bg-orange-900 text-white pl-5 pr-1' onClick={ShowFilter}>O</h1>     
    </div>
    
  </>
  )
}

export default FilterZone


    

