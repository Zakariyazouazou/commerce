import React, { useState ,useEffect ,useRef  } from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper";
import './styles.css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarModelContent , CatEgorie , Produit ,place , CouNtry , ModEl} from '../../data/Data';
import './Sections.css'







const Sections = () => {
        
  const [fordata , serfordata] = useState([]); 

  
  useEffect(() => {
    serfordata(ModEl); 
  }, [])
    
  return (
     <div className='ContainerModelcar '>
        
         <div className='ParentOfContainerModelCarMini'> 
              {
              fordata.map((element)=>{
                  return (
                      <div className='ContainerModelCarMini flex items-center '>
                          <Link to={`/Car_Symbol_Page/${element.Id_car}`}><img src={element.Symbol_pic} alt="characters_image" className=' rounded-full w-10 h-10 ml-2 mg-2 mt-2 characters_image'/></Link>
                          <Link to={`/Car_Symbol_Page/${element.Id_car}`}> <h6 className='CarName mt-3 ml-2'>{element.Model}</h6></Link>
                      </div>
                      
                  )
              })
            }
         </div>
        
          <Swiper  
              slidesPerView={9} spaceBetween={10} slidesPerGroup={1} loop={true}
              loopFillGroupWithBlank={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwipere"
            >
          {
            fordata.map((element)=>{
              return (
                <SwiperSlide className='mr-3'>
                  <div className='ContainerModelCarMini flex items-center'>
                      <Link to={`/Car_Symbol_Page/${element.Id_car}`}><img src={element.Symbol_pic} alt="characters_image" className='rounded-full ml-2 mg-2 mt-2 characters_image'/> </Link> 
                       <h5 className='CarName'>{element.Model}</h5> 
                  </div>
                </SwiperSlide>
                   
              )
           })
          }
        </Swiper>
      

      


      </div>
    
      
    
  )
}

export default Sections



