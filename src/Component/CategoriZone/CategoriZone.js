import React , {useState , useEffect , useRef} from 'react'
import './Style.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";






const CategoriZone = ({Categorie , data }) => {
     const [categorie , SetCategorie] = useState([]); 

    
     

  return (
    <>
    <h1 className='text-black  font-bold ml-2 '> {Categorie} </h1>
    <div className='containerCategorieZoneImage'>
    <div className='MinicontainerCategorieZoneImage flex'>
        <Swiper 
        slidesPerView={6}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="swiperBase h-96 "
        
          >
              {
                data.map(element =>{
                return<SwiperSlide className='mr-3 flex justify-center'>
                              <div className='overflow-hidden w-full h-72  text-center rounded-2xl shadow-2xl m-1'>
                                <Link to={`/Categorie_Pag/${element.ID_model}`}><img src={element.image_url} alt={element.Model} className="h-5/6 w-full CategorieZoneImage"/></Link>
                                <Link to={`/Categorie_Pag/${element.ID_model}`}><h5 className='mt-3 font-bold text-black'>{element.Model}</h5></Link>
                                </div>
                      </SwiperSlide>
                } )
              }
      </Swiper>
      </div>
 




        <Swiper  slidesPerView={2} spaceBetween={10} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true}
        pagination={{ clickable: true, }}
        navigation={true} modules={[ Navigation]}
        className="swiperCategorie h-72"
        >
          {
            data.slice(0 , 12).map(element =>{
            return<SwiperSlide className='mr-3  flex justify-center'>
                          <div className='overflow-hidden w-full h-64  text-center rounded-2xl shadow-2xl m-1'>
                            <Link to={`/Categorie_Pag/${element.ID_model}`}><img src={element.image_url} alt={element.Model} className="h-5/6 w-full CategorieZoneImage"/></Link>
                            <Link to={`/Categorie_Pag/${element.ID_model}`}><h5 className='mt-3 font-bold text-black'>{element.Model}</h5></Link>
                            </div>
                  </SwiperSlide>
            } )
          }
     

   </Swiper>
    

    
    </div>
    
    
    </>
  

    
  )
}

export default CategoriZone
