import React from 'react'
import { MDBFooter , MDBContainer ,MDBIcon , MDBInput , MDBCol , MDBRow , MDBBtn } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div >
    <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
            <section className='mb-4'>
                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                   <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                   <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                     <MDBIcon fab icon='github' />
                </MDBBtn>
            </section>

            <section className=''>
                <form action=''>
                <MDBRow className='d-flex justify-content-center'>
                    <MDBCol size="auto">
                    <p className='pt-2'>
                        <strong>Sign up for our newsletter</strong>
                    </p>
                    </MDBCol>

                    <MDBCol md='5' start>
                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                    </MDBCol>

                    <MDBCol size="auto">
                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                        Subscribe
                    </MDBBtn>
                    </MDBCol>
                </MDBRow>
                </form>
            </section>

            <section className='mb-4'>
                <p> Welcome to my prototype page this page itès just prototype you can found here some product of many car 
                its dynamique and so fast I holp to love my page  </p>
            </section>

            <section>
                <MDBRow  className='flex justify-center'>
                    <MDBCol lg='3' md='6' className=''>
                        <h5 className='text-uppercase'>Links</h5>

                        <ul className='list-unstyled mb-0'>
                            <li> <a href='http://localhost/cars/AddProduct/indexe.php' className='text-white'>Add Product</a> </li>
                            <li><a href='http://localhost/cars/Logen%20avendeure/loginAvendeure.php' className='text-white'>Login for clien</a></li>
                            <li> <a href='http://localhost/cars/Logen%20client/loginClient.php' className='text-white'> Login for avendeure </a> </li>
                            <li> <a href='http://localhost/cars/avendeure/HomAvendeure.php' className='text-white'> welcome to our page </a> </li>
                        </ul>
                    </MDBCol>


                    

                  
                </MDBRow>
            </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
                      Zakariya Zouazou 
        </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
