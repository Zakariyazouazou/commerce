import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import './Card.css'  //onclickPanier={hendlclick }

const Card = ({image , name , details,remove , Show , add , link , Prix , Panier ,onclickPanier, ID ,data ,RemoveclickPanier}) => {
  
  return (
    <div>
      <div className=" m-2 ">
            <div className="rounded-lg shadow-lg bg-white  w-56 MyCardSpecial">
                <Link to={`/One_Product/${link}`}>
                    <img className="rounded-t-lg w-full h-52" src={image} alt=""/>
                </Link>
                <div className="p-4">
                        <Link to={`/One_Product/${link}`}> <h4 className="text-gray-900 text-xl font-medium mb-2">{name.slice(0,12)}</h4> </Link>
                        <p className="text-gray-700 text-base mb-4 font-normal CardDetails">
                        {details.slice(0,20)}
                        </p>
                        <h6 classNameName='text-red-900'>{Prix} dhm</h6>
                        <button  className='bg-orange-800 w-full mb-1 h-8 rounded transition-colors hover:bg-orange-900  ButtonCard'> <Link to={`/One_Product/${link}`} className='text-gray-800'>Show</Link></button>
                        <button  className='bg-orange-800 w-full mb-1 h-8 rounded transition-colors hover:bg-orange-900  ButtonCard' onClick={()=>onclickPanier(data) }>Add To panier</button>
                        {remove && <button  onClick={ ()=> RemoveclickPanier(data.Id_produit) } className='bg-orange-800 w-full mb-1 h-8 rounded transition-colors hover:bg-orange-900  ButtonCard' >delet</button>
                      }
                </div>
            </div>
      </div>
      
    </div>
  )
}

export default Card

var Total = 0 ; 



export {Total}
