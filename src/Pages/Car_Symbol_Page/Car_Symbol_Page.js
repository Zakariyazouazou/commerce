import React , {useState , useEffect} from 'react'
import './Car_Symbol_Page.css'
import { useParams } from 'react-router-dom'
import { FilterZone  } from '../../Component/Index' 
import { Card }  from '../../Component/Index'
import {BiSad} from 'react-icons/bi'
import { CarModelContent , CatEgorie , Produit ,place , CouNtry , ModEl} from '../../data/Data';








 const Car_Symbol_Page = ({panier , onclickPanier}) => {
    {/* to get the name of titel we use that */}
    var nam = "" ; 
    const {Symbol} = useParams() 
    const [Symbole , SetSymbol] = useState([])
    const [FilterData , SetFilterData] = useState([])
    const [Categorie , SetCategorie] = useState([])
    const [Place , SetPlace] = useState([]) ;
    const [Country , SetCountry ] = useState([]) ;
    var filterCategorie = false ; 
    const [filtercategorie , Setfiltercategorie] = useState(0)



    {/*For Place*/}
    useEffect(() =>{ 
       SetPlace(place)
    })
    {/*For Country*/}
    useEffect(() =>{ 
       SetCountry(CouNtry)
    })
     
    useEffect(() =>{ 
       SetSymbol(Produit)
      })
      useEffect(() =>{ 
         SetFilterData(ModEl)
      })
      //

      useEffect(() =>{ 
        SetCategorie(CatEgorie)
      })

      

      

    
     {/*To get Name Car "the titel" */}
      for (var i = 0 ; i< FilterData.length ; i++){
             if(Symbol == FilterData[i].Id_car){
                 nam = FilterData[i].Model
             }
      }
     
  
       {/*to filter data and give me wht I need  */}
       const filtrage = Symbole.filter((items)=>{
        return (
              items.voiture == Symbol 
            )
       })

    



       if( filtercategorie > 0 ){
        filterCategorie = true ; 
       }
       function ShowFilterConditionCategorie (element){
          Setfiltercategorie(element)    
       }
       var filtercategorieResult = filtrage.filter((element)=>{    ;{/* give data only for categorie result */}
            return element.categorie == filtercategorie
       })


       
    if(filtrage ==""){
       return  <div className='mt-44 text-center flex justify-center '>
                   <h1 className='text-2xl text-orange-900 font-bold'>Sorry they are nothing here yet....</h1><BiSad className='text-4xl text-orange-900 font-bold'/> 
               </div>
    }else {
        return (
            <>
                 <FilterZone 
                            showCategorie = "true" 
                            Categoriedata={Categorie}
                            ShowPrix = "true"
                            Places = {Place}
                            ShowPlace = "true"
                            Country = {Country}
                            showCountry = "true"
                            clickitabel = {ShowFilterConditionCategorie}
                 />

                {/*page Name */}
                <h1 className='text-2xl text-orange-900 font-bold mt-24'>Welcome To All Piece Of {nam}  : </h1> 
    


                {/* Container Card filter*/}
                <div className='flex justify-center flex-row flex-wrap'>
                      {filterCategorie &&
                        filtercategorieResult.map(element =>{
                         return <Card 
                                name = {element.name}
                                image = {element.P_image}
                                details = {element.Model}
                                Prix = {element.prix}
                                Show="show"
                                add="add"
                                link={element.Id_produit} 
                                ID = {element.Id_produit}
                                data = {element}
                                Panier={panier}
                                onclickPanier={onclickPanier}
                        />
                        })
                      }        
                </div>

                {/* Container Card*/}
                <div className='flex justify-center flex-row flex-wrap'>
                      {!filterCategorie &&
                        filtrage.map(element =>{
                         return <Card 
                                name = {element.name}
                                image = {element.P_image}
                                details = {element.Model}
                                Prix = {element.prix}
                                Show="show"
                                add="add"
                                link={element.Id_produit} 
                                ID = {element.Id_produit}
                                data = {element}
                                Panier={panier}
                                onclickPanier={onclickPanier}
                        />
                        })
                      }        
                </div>
                {filtercategorieResult &&
                  filtercategorieResult == "" && <div className='mt-44 text-center flex justify-center '>
                                              <h1 className='text-2xl text-orange-900 font-bold'>Sorry they are nothing here yet....</h1><BiSad className='text-4xl text-orange-900 font-bold'/> 
                                          </div>
                 }

            </>
        )
    }


  

    
    






    

  
}

export default Car_Symbol_Page
