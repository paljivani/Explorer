import './Section3.css';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';

function Section3() {
  return (
    <div>
        <section>
        <div className='pt-3 pb-5'>
                <h1 style={{textAlign:'center', color:'red'}} className="sec-2-font">CafeDine Dishes</h1>
                
            </div>
            <div className='image-bg'>
                <div className='over-color'>
                    <Container>
                    <h1 className='h1 mb-0'>Food Menu</h1>
                    </Container>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Section3