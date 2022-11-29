import React , {useState , useEffect} from 'react'
import { Card , FilterZone } from '../../Component/Index'
import { BiSad } from 'react-icons/bi';
import './All_Product.css'
import { CarModelContent , CatEgorie , Produit ,place , CouNtry , ModEl} from '../../data/Data';



const All_Product = ({panier , onclickPanier}) => {
    var filterage = false ; 
    var filterModelCArs = false ; 
    var filterCArs  = false ; 
    var filterCategorie = false ; 
    const [AllProduct , SetAllProduct] = useState([]) ; 
    const [Place , SetPlace] = useState([]) ;
    const [Country , SetCountry ] = useState([]) ;
    const [Categorie , SetCategorie] = useState([])
    const [CarData , SetCarData] = useState([])
    const [CarDataContent , SetCarDataContent] = useState([])

    const [filtercategorie , Setfiltercategorie] = useState(0)
    const [filterVoiture , SetfilterVoiture] = useState(0)
    const [filterVoitureModel , setfilterVoitureModel ] = useState(0)


    


    {/*For Product*/}
    useEffect(() =>{ 
      SetAllProduct(Produit)
    })


        {/*For Place*/}
      useEffect(() =>{ 
        SetPlace(place)
      })
       
      {/*For categorie*/}
    useEffect(() =>{ 
      SetCategorie(CatEgorie)
    })

    {/*For Country*/}
    useEffect(() =>{ 
       SetCountry(CouNtry)
    })
    {/*for data Car */}
    useEffect(() =>{ 
        SetCarData(ModEl)
    })
    {/*For Content Data car */}
    useEffect(() =>{ 
       SetCarDataContent(CarModelContent)
    })

    
    

   function ShowFilterConditionCategorie (element){
        filterage = true ; 
        Setfiltercategorie(element)    
   }


   function ShowFilterConditionvoiture(element){
       SetfilterVoiture(element)    
   } 
   

   function ShowFilterConditionvoitureModel(element){
    setfilterVoitureModel(element)    
   } 
   if( filtercategorie > 0 ){
    filterCategorie = true ; 
   }


   if(filterVoitureModel > 0){
     filterModelCArs  = true
   }

   if(filterVoiture > 0){
    filterCArs  = true
  }

  


  var filtercategorieResult = AllProduct.filter((element)=>{    ;{/* give data only for categorie result */}
        return element.categorie == filtercategorie
   })
   
   
  var filtervoitureresult = []

   if(filterCategorie){
        filtervoitureresult = filtercategorieResult.filter((car)=>{
          return car.voiture == filterVoiture                 
     })
   }else if (!filterCategorie){
          filtervoitureresult = AllProduct.filter((car)=>{
            return car.voiture == filterVoiture                 
      })
   }



  
   var filterModelCars = filtervoitureresult.filter((element)=>{
      return element.Voiture_model == filterVoitureModel
   })



   
   
  
  
   

     
    

  

  
  
  



  
   


   //console.log(filtercategorie)

   


  return (
    <div className='mt-24'>
         <h1>Hello Sunshine All product you Can found Heare everthing :</h1>
          {/* We going Add Filter Zone Zone here */}
           <FilterZone
                ShowPrix = "true"
                Places = {Place}
                ShowPlace = "true"
                Country = {Country}
                showCountry = "true"
                Categoriedata={Categorie}
                showCategorie = "true" 
                CarData = {CarData}
                ShowCarData = "true"
                CarDataContent = {CarDataContent}
                ShowCarDataContent = "true"
                clickitabel = {ShowFilterConditionCategorie}
                clickitabel1 = {ShowFilterConditionvoiture}  
                clickitabe2 = {ShowFilterConditionvoitureModel}    
                     />
          {/*We going to put filter result */}          
          {/*We going to put filter result */}
          <div className='flex flex-row flex-wrap MyAllProduct'>
             
            <>
                {filterModelCArs &&  filterModelCars.map(element =>{
                          
                    return  <Card
                              name = {element.name}
                              image = {element.P_image}
                              details = {element.Model}
                              Prix = {element.prix}
                              Show="show"
                              add="add"
                              data = {element}
                              link={element.Id_produit} 
                              ID = {element.Id_produit} 
                              onclickPanier={onclickPanier}
                      />
                  })     
                  }
            </>
         </div>
         {filterModelCArs &&
          filterModelCars == "" && <div className='mt-44 text-center flex justify-center '>
                                      <h1 className='text-2xl text-orange-900 font-bold'>Sorry they are nothing here yet....</h1><BiSad className='text-4xl text-orange-900 font-bold'/> 
                                  </div>
         }

          <div className='flex flex-row flex-wrap MyAllProduct'>
                 <>
                 {!filterage && !filterModelCArs && 
                  AllProduct.map(element =>{
                    
                    return  <Card
                              name = {element.name}
                              image = {element.P_image}
                              details = {element.Model}
                              Prix = {element.prix}
                              Show="show"
                              add="add"
                              data = {element}
                              link={element.Id_produit} 
                              ID = {element.Id_produit} 
                              onclickPanier={onclickPanier}
                      />
                  })
                 }
                 </>
          </div>
         
    </div>
  )
}

export default All_Product
