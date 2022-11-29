import React,{useState , useEffect}from 'react'
import { Link } from 'react-router-dom';
import {MDBBtn} from 'mdb-react-ui-kit';
import { CarModelContent , CatEgorie , Produit ,place , CouNtry , ModEl} from '../../data/Data';


const Serch = () => {
    const [AllProduct , SetAllProduct] = useState([]) ; 


    useEffect(() =>{ 
        SetAllProduct(Produit)
      })
      const [filteredData, setFilteredData] = useState([]);
        const [wordEntered, setWordEntered] = useState("");

        const handleFilter = (event) => {
                const searchWord = event.target.value;
                setWordEntered(searchWord);
                const newFilter = AllProduct.filter((value) => {
                    return value.name.toLowerCase().includes(searchWord.toLowerCase()) ||  value.info.toLowerCase().includes(searchWord.toLowerCase()) 
            });

            if (searchWord === "") {
                setFilteredData([]);
            } else {
                setFilteredData(newFilter);
            }
            };

       


  return (
       <>
         
       <form className='d-flex input-group w-auto mt-16'>
                <input type='search' className='form-control' placeholder='Type query' aria-label='Search'  value={wordEntered}
                onChange={handleFilter}/>

                <MDBBtn color='primary'>Search</MDBBtn>
                 {filteredData.length != 0 && (
                  <div className='Resultserch w-64 h-96 top-10 MyserchSp bg-orange-300 absolute '>
                    {filteredData.map((value, key) => {
                      return (
                       
                        <Link className="dataItem text-gray-900" to={`/One_Product/${value.Id_produit}`}  target="_blank">
                                   <div className='flex flex-wrap flex-row items-center'>
                                       <img src={value.P_image} alt="img" className='w-10 mr-1 ml-1 pb-1 h-10 rounded-full' /><p> {value.name}</p>

                                   </div>
                         </Link>
                      );
                    })}
                  </div>
                )}
              </form>





        <div className='justify-center justify-between mt-14 flex flex-wrap flex-row '>
        {
            AllProduct.map(product =>{
                
        return <div className='w-2/6'>
                <Link to={`/One_Product/${product.Id_produit}`}> <img src={product.P_image} alt="Productimage"/></Link>
                </div>
            })
        }

       </div>
       </>
  )
}

export default Serch
