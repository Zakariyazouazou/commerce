import React,{useState , useEffect}from 'react'
import './One_Product.css'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from '@material-tailwind/react';
import { CarModelContent , CatEgorie , Produit ,place , CouNtry , ModEl} from '../../data/Data';





const One_Product = ({onclickPanier , removit}) => {
   const {idProduct} = useParams()
   const [productData , SetproductData] = useState([])

  {/*Add Product Data  */}
    useEffect(() =>{
        SetproductData(Produit)
    })
    for (var i = 0; i < productData.length; i++){
        if(idProduct == productData[i].Id_produit){
               
  

            function toShow(){
                showe()
                var  Showing = document.getElementById('Showing') 
                Showing.innerHTML=`
                       <img className='Imgsjow' src=${productData[i].P_image} alt="BigImg"/>
                `
            }



            function toShow1(){
                showe()
                var  Showing = document.getElementById('Showing') 
                Showing.innerHTML=`
                       <img className='Imgsjow' src=${productData[i].image1} alt="BigImg"/>
                `
            }



            function toShow2(){
                showe()
                var  Showing = document.getElementById('Showing') 
                Showing.innerHTML=`
                       <img className='Imgsjow' src=${productData[i].image2} alt="BigImg"/>
                `
            }


            function toShow3(){
                showe()
                var  Showing = document.getElementById('Showing') 
                Showing.innerHTML=`
                       <img className='Imgsjow' src=${productData[i].image3} alt="BigImg"/>
                `
            }


            function toShow4(){
                showe()
                var  Showing = document.getElementById('Showing') 
                Showing.innerHTML=`
                       <img className='Imgsjow' src=${productData[i].image4} alt="BigImg"/>
                `
            }
            
            
            
           





            return( <>
                
                    <div className='Peere mt-16 flex flex-wrap flex-row mb-8 '>
                            <div className='ContainerImage w-1/2 float-left' id='PrincipeImage'>
                                <div className=''>
                                    <Swiper 
                                        pagination={{
                                            type: "progressbar",
                                        }} navigation={true} modules={[Pagination, Navigation]} className=" h-96"
                                        >
                                                <SwiperSlide ><div id='ImagMaer' ><div className='Flex justify-center cursor-pointer' onClick={toShow}   ><img className='w-8/12 ml-32 h-96' src={productData[i].P_image} alt='product_img' /></div></div></SwiperSlide>
                                                <SwiperSlide ><div className='Flex justify-center cursor-pointer' onClick={toShow1} ><img className='w-8/12 ml-32 h-96 ' src={productData[i].image1} alt='product_img'/></div></SwiperSlide>
                                                <SwiperSlide ><div className='Flex justify-center cursor-pointer' onClick={toShow2} ><img className='w-8/12 ml-32 h-96 ' src={productData[i].image2} alt='product_img'/></div></SwiperSlide>
                                                { productData[i].image3 && <SwiperSlide onClick={toShow3} ><div className='Flex justify-center cursor-pointer' ><img className='w-8/12 ml-32 h-96 ' src={productData[i].image3} alt='product_img'/></div></SwiperSlide> }
                                                { productData[i].image4 &&<SwiperSlide onClick={toShow4} ><div className='Flex justify-center cursor-pointer' ><img className='w-8/12 ml-32 h-96 ' src={productData[i].image4} alt='product_img'/></div></SwiperSlide>  }       
                                    </Swiper>
                                </div>
                                <div className='ManyImages mt-2'>
                                        <Swiper 
                                        slidesPerView={3}
                                        spaceBetween={30} slidesPerGroup={3} loopFillGroupWithBlank={true}
                                        pagination={{
                                        clickable: true,
                                        }}  modules={[Pagination, Navigation]} className="h-44"
                                        >              {/* on add here Click to converte just Photo*/}
                                                <SwiperSlide >
                                                <div className='Flex justify-center cursor-pointer'  onClick={toShow}>
                                                            <img className='w-8/12  h-40 ' src={productData[i].P_image} alt='product_img'/>
                                                </div>
                                                </SwiperSlide>
                                                {/* on add here Click to converte just Photo*/}
                                                <SwiperSlide >
                                                        <div className='Flex justify-center cursor-pointer' onClick={toShow1}>
                                                            <img className='w-8/12  h-40 ' src={productData[i].image1} alt='product_img'/>
                                                        </div>
                                                </SwiperSlide>
                                                {/* on add here Click to converte just Photo*/}
                                                <SwiperSlide >
                                                        <div className='Flex justify-center cursor-pointer' onClick={toShow2}>
                                                            <img className='w-8/12  h-40 ' src={productData[i].image2} alt='product_img'/>
                                                        </div>
                                                </SwiperSlide>
                                                {/* on add here Click to converte just Photo*/}
                                                { productData[i].image3 &&
                                                        <SwiperSlide >
                                                                <div className='Flex justify-center cursor-pointer' onClick={toShow3}>
                                                                    <img className='w-8/12  h-40 ' src={productData[i].image3} alt='product_img'/>
                                                                </div>
                                                        </SwiperSlide> }
                                                {/* on add here Click to converte just Photo*/}
                                                { productData[i].image4 &&
                                                        <SwiperSlide >
                                                                <div className='Flex justify-center cursor-pointer' onClick={toShow4}>
                                                                    <img className='w-8/12  h-40 ' src={productData[i].image4} alt='product_img'/>
                                                                </div>
                                                        </SwiperSlide>  }     
                                    </Swiper>       
                                </div>
                                <div className='flex justify-between'>
                                    <Button className='bg-orange-500 w-36 text-center text-white ml-2 ' onClick={()=>onclickPanier(productData[i])}  >Add</Button>
                                    <Button className='bg-orange-500 w-36 text-center text-white mr-2' onClick={()=> removit(productData[i].Id_produit)}>Remove</Button>
                                </div>
                            </div> 
                            <div className='details w-2/5 overflow-hidden ml-6'>
                                <h1 className='text-black m-1 font-bold'>{productData[i].name}</h1>
                                <h2 className='m1'>{productData[i].Model}</h2>
                                <h1 className='red'>Prix : 250dhs </h1>
                                <h5 className='mt-3'>
                                    <h3>details</h3>
                                        {productData[i].info}
                                        
                                </h5>
                                <h3>Conpoatibe sure : </h3>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>

                                    <li></li>
                                    <li></li><li></li><li></li>
                                </ul>
                            </div>
                    </div>


                    <h1 className='CLoSed' onClick={DropTHis}>X</h1>
                    <div id='Showing' className='todisplayBishow '>
                        <img  src={productData[i].P_image} alt="BigImg"/>
                    </div>                 
                </>
                )
               
          
        }
    }
  
}

export default One_Product





function showe(){
                
                var Bishow = document.getElementById('Showing')
                var dropOneprod = document.querySelector('.CLoSed')
                dropOneprod.classList.add('dropOneprod')
                var Peere = document.querySelector('.Peere')
                Bishow.classList.add('BiShow')
                Peere.classList.add("containerOneProduct")
                
}


function DropTHis(){
                var Bishow = document.getElementById('Showing')
                var dropOneprod = document.querySelector('.CLoSed')
                dropOneprod.classList.remove('dropOneprod')
                var Peere = document.querySelector('.Peere')
                Bishow.classList.remove('BiShow')
                Peere.classList.remove("containerOneProduct")
}

