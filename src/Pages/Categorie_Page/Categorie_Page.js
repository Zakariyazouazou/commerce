import React,{useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FilterZone } from '../../Component/Index'
import {Card} from '../../Component/Index'
import {BiSad} from 'react-icons/bi'
import { CarModelContent , CatEgorie , Produit ,place , CouNtry , ModEl} from '../../data/Data';

import './Categorie_Page.css'



const Categorie_Page = ({panier , onclickPanier }) => {
    var nam = "" ;
    const {Categore} = useParams() 
    const [Product , SetProduct] = useState([])
    const [CarData , SetCarData] = useState([])
    const [CarDataContent , SetCarDataContent] = useState([])
    const [Place , SetPlace] = useState([]) ;
    const [Country , SetCountry ] = useState([]) ;
    const [Categorie , SetCategorie] = useState([])
    var filterModelCArs = false ; 
    var filterCArs  = false ; 
    const [filterVoiture , SetfilterVoiture] = useState(0)
    const [filterVoitureModel , setfilterVoitureModel ] = useState(0)




        useEffect(() =>{ 
            SetProduct(Produit)
        })

        {/*for data Car */}
        useEffect(() =>{ 
           SetCarData(ModEl)
        })
        {/*For Content Data car */}
        useEffect(() =>{ 
            SetCarDataContent(CarModelContent)
        })
        {/*For Place*/}
        useEffect(() =>{ 
           SetPlace(place)
        })
        {/*For Country*/}
        useEffect(() =>{ 
            SetCountry(CouNtry)
        })

        useEffect(() =>{ 
           SetCategorie(CatEgorie)
          })
      

        for (var i = 0 ; i< Categorie.length ; i++){
            if(Categore == Categorie[i].ID_model){
                nam = Categorie[i].Model
            }
        }
    

      const filtrage = Product.filter((items)=>{
        return (
              items.categorie == Categore 
            )
       })


        console.log(filtrage)
      
        function ShowFilterConditionvoiture(element){
            SetfilterVoiture(element)    
        } 
        function ShowFilterConditionvoitureModel(element){
         setfilterVoitureModel(element)    
        } 
        if(filterVoitureModel > 0){
            filterModelCArs  = true
        }
       
          if(filterVoiture > 0){
           filterCArs  = true
         }
       
         var filterModelCars = filtrage.filter((element)=>{
            return element.Voiture_model == filterVoitureModel
         })






       if(filtrage ==""){
        return  <div className='mt-44 text-center flex justify-center '>
                    <h1 className='text-2xl text-orange-900 font-bold'>Sorry they are nothing here yet....</h1><BiSad className='text-4xl text-orange-900 font-bold'/> 
                </div>
     }else {
         return (
            <div className='mt-24'>
            <FilterZone
                ShowPrix = "true"
                Places = {Place}
                ShowPlace = "true"
                Country = {Country}
                showCountry = "true"
                CarData = {CarData}
                ShowCarData = "true"
                CarDataContent = {CarDataContent}
                ShowCarDataContent = "true"
                clickitabel1 = {ShowFilterConditionvoiture}  
                clickitabe2 = {ShowFilterConditionvoitureModel}   
          /> 
            <h1 className='text-2xl text-orange-900 font-bold mt-24'>Welcome To All Piece Of {nam}  : </h1> 
            <div className='flex flex-wrap flex-row mb-28'>
                 {!filterModelCArs && 
                    filtrage.map(element =>{
                      return<Card
                            name = {element.name}
                            image = {element.P_image}
                            details = {element.Model}
                            Prix = {element.prix}
                            Show="show"
                            add="add"
                            link={element.Id_produit} 
                            ID = {element.Id_produit} 
                            Panier={panier}
                            onclickPanier={onclickPanier}
                            data = {element}
                        /> 
                    })
                 }
            </div>  
            <div className='flex flex-wrap flex-row mb-28'>
            {filterModelCArs && 
                filterModelCars.map(element =>{
                 return<Card
                       name = {element.name}
                       image = {element.P_image}
                       details = {element.Model}
                       Prix = {element.prix}
                       Show="show"
                       add="add"
                       link={element.Id_produit} 
                       ID = {element.Id_produit} 
                       Panier={panier}
                       onclickPanier={onclickPanier}
                       data = {element}
                   /> 
               })
             }
          </div>  
          {filterModelCArs &&
            filterModelCars == "" && <div className='mt-44 text-center flex justify-center '>
                                        <h1 className='text-2xl text-orange-900 font-bold'>Sorry they are nothing here yet....</h1><BiSad className='text-4xl text-orange-900 font-bold'/> 
                                    </div>
           }
            
            
            </div>
         )
     }

  
}

export default Categorie_Page
