import React ,{useEffect , useState} from 'react'
import { Link } from 'react-router-dom';
import {
  MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBBadge,MDBIcon,MDBNavbarNav,MDBNavbarItem,MDBNavbarLink,MDBBtn,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,MDBCollapse,} from 'mdb-react-ui-kit';

import './Bavbarre.css'
import LogoSunshine from '../../Images/Symbol/—Pngtree—yellow vector sunshine clipart_4236310.png'

import { CarModelContent , CatEgorie , Produit ,place , CouNtry , ModEl} from '../../data/Data';


//   import { Total } from '../../Component/Index';


// setInterval(
//           function get(){ 
//             var Contiter = document.getElementById('Contiter')
//                Contiter.innerHTML=`<small>${Total}</small>`}, 500);




const Navbarre = ({dataom}) => {
  
  
          setInterval(() => {
               
              var L = dataom.length
                var v = document.getElementById('Contiter')
                v.innerHTML=`<small>${L}</small>`
          }, 500);



     
       



  const [fordata , serfordata] = useState([]); 
  const [Model , SetModel] = useState([]);
  const [AllProduct , SetAllProduct] = useState([]);
  const [showBasic, setShowBasic] = useState(false);

  //Data for categorie and stafe 
  useEffect(() => {
      serfordata(CatEgorie); 
  }, [])

  useEffect(() => {
      SetAllProduct(Produit)
  }, []) 
  







  // data for Model Cars
  useEffect(() => {
    SetModel(ModEl); 
}, [])
          

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
    <div className='fixed  top-0 w-full' style={{zIndex : "999"}}>
    
    <MDBNavbar expand='lg'  light className='bg-orange-500'>
    <MDBContainer fluid >
     <Link to="/"><img className='w-12' src={LogoSunshine} alt="Logo"/></Link>
      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setShowBasic(!showBasic)}
      >
        <MDBIcon icon='bars' className='text-white' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar show={showBasic}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 font-bold'>
         {/*for Caregorie and we add herre Map To creat categorie */}
         <MDBNavbarItem>
         <MDBDropdown>
           <MDBDropdownToggle tag='a' className='nav-link text-white font-bold' role='button'>
               categorie
           </MDBDropdownToggle>
           <MDBDropdownMenu>
             {
              fordata.map(element=>{
               return  <MDBDropdownItem link><Link to={`/Categorie_Pag/${element.ID_model}`}>{element.Model}</Link> </MDBDropdownItem>
              })
             }
           
           </MDBDropdownMenu>
         </MDBDropdown>
       </MDBNavbarItem>


            {/* this is for liquide and we gonna create here map for All type of liquide*/}
          <MDBNavbarItem>
            <MDBNavbarLink href='#' > <Link to="/" className='text-white font-bold'>Liquide</Link></MDBNavbarLink>
          </MDBNavbarItem>


          {/* All that for create Drop Down Liste we gonna use that for loquide and catgorie */}
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link text-white font-bold' role='button'>
                Voiture
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                {
                  Model.slice(0,15).map(element =>{
                   return   <MDBDropdownItem link> <Link to={`/Car_Symbol_Page/${element.Id_car}`}>{element.Model}</Link></MDBDropdownItem>
                  })
                }
                
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>


                 {/*we goind to replace that with emojie */}
          <MDBNavbarItem>
                 <MDBNavbarLink href='#' > <Link to="/All_Product" className='text-white font-bold'>All Product</Link></MDBNavbarLink>
          </MDBNavbarItem>
     
        </MDBNavbarNav>
              
             
              <MDBBadge pill className='relative left-4 z-10 bottom-4' color='danger'><h7 id='Contiter'>5</h7></MDBBadge>
              <span>
                 <Link to="/Panier"><MDBIcon fas icon='shopping-cart' className='relative text-3xl text-white right-7'></MDBIcon></Link>
              </span>
    


              <form className='d-flex input-group w-auto'>
                <input type='search' className='form-control' placeholder='Type query' aria-label='Search'  value={wordEntered}
                onChange={handleFilter}/>

                <MDBBtn color='primary'>Search</MDBBtn>
                 {filteredData.length != 0 && (
                  <div className='Resultserch w-64 h-96 top-10 MyserchSp bg-orange-300 absolute '>
                    {filteredData.slice(0, 10).map((value, key) => {
                      return (
                        <Link className="dataItem text-gray-900" to={`/One_Product/${value.Id_produit}`}  target="_blank">
                           <p>{value.name}</p>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </form>
       
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
   
    </div>
  )
}

export default Navbarre

var Contiter = document.getElementById('Contiter')
export {Contiter}






      //  var num = 0  

      //  function put(){
      //       var Contiter = document.getElementById('Contiter')
      //       num = Total
      //       Contiter.innerHTML=`<small>${num}</small>`
      //     }

  
       


