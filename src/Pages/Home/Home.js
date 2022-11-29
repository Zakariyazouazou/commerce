import { Button } from '@material-tailwind/react';
import React , {useState , useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import {Sections , CategoriZone , Product } from '../../Component/Index';
import './Home.css'
import { CarModelContent , CatEgorie , Produit } from '../../data/Data';



const Home = ({panier , onclickPanier}) => {
  const [categoriedata , SetCategorie] = useState([]); 
  const [Producte , setProduct] = useState([]);
          useEffect(() =>{ 
             SetCategorie(CatEgorie)
          })
          useEffect(() =>{ 
            setProduct(Produit)
          })
    // console.log(categoriedata)


    
    


  return (
    <> 
        <Sections /> 
        <div className='levide'/> 
        <CategoriZone Categorie="All Categorie" data={categoriedata}/>
        <CategoriZone Categorie="Boutique" data={categoriedata} margintop={"mt-"}/>
        <Product data={Producte} Panier={panier} onclickPanier={onclickPanier}/>
      
        
    </>
  )
}

export default Home


const addProduct = []


