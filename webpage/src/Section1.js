import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Section1.css';
import React from 'react'
import Container from 'react-bootstrap/esm/Container';

function Section1() {
    return (
        <div>
            <section>
                
                <div className='image'>
                    <div>
                        <Container className='py-5'>
                            
                    <Card style={{ width: '30', marginTop:90, marginBottom:90, backgroundColor:'transparent' , border:0}}>
                        <Card.Body>
                            <Card.Title style={{color:'red'}} className="fonts">Welcome to restuarant</Card.Title>
                            
                            <Card.Text style={{color:'white'}} className="fonts-p">
                            Good food starts with good <br/>ingridients.Have a great<br/> time with us
                            </Card.Text>
                            <Button variant="danger" className='pl-4 fw-semibold mt-2'>VIEW MORE</Button>
                        </Card.Body>
                    </Card>
                    </Container> 
                    
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Section1
