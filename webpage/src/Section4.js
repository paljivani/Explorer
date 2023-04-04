import './Section4.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import React from 'react'

function Section4() {
  return (
    <div>
        <section className='py-5 my-4'>
            <Container>
            <div>
                <h1 style={{textAlign:'center', color:'red'}} className="sec-2-font">About CafeDine</h1>
                <p style={{textAlign:'center' ,color:'black'}}  className="sec-2-font-p pt-3 fw-bold">We provide quality food.We care <br></br>about your health </p>
            </div>
            <CardGroup>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-1.jpg" />
        <Card.Body >
          <Card.Title className='font-famali my-3'>Quality Food -<span>23$</span></Card.Title>
          <Card.Text>Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives 
          </Card.Text>
          <Button variant="danger" className='pl-4 fw-semibold mt-2'>ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-2.jpg" />
        <Card.Body  >
          <Card.Title className='font-famali my-3'>Friendly placee -<span>23$</span></Card.Title>
          <Card.Text>
          Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives 
          </Card.Text>
          <Button variant="danger" className='pl-4 fw-semibold mt-2'>ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-3.jpg" />
        <Card.Body  >
          <Card.Title className='font-famali my-3'>Affordable price -<span>23$</span></Card.Title>
          <Card.Text>
          Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives 
          </Card.Text>
          <Button variant="danger" className='pl-4 fw-semibold mt-2'>ADD TO CART</Button>
        </Card.Body>
      </Card>
      
    </CardGroup>
    <CardGroup>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-3.jpg" />
        <Card.Body >
          <Card.Title className='font-famali my-3'>Quality Food -<span>23$</span></Card.Title>
          <Card.Text>Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives 
          </Card.Text>
          <Button variant="danger" className='pl-4 fw-semibold mt-2'>ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-2.jpg" />
        <Card.Body >
          <Card.Title className='font-famali my-3'>Friendly placee -<span>23$</span></Card.Title>
          <Card.Text>
          Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives 
          </Card.Text>
          <Button variant="danger" className='pl-4 fw-semibold mt-2'>ADD TO CART</Button>
        </Card.Body>
      </Card>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-1.jpg" />
        <Card.Body >
          <Card.Title className='font-famali my-3'>Affordable price -<span>23$</span></Card.Title>
          <Card.Text>
          Mushrooms, Ruccola, Pomodoro, Mozzarella, Olives 
          </Card.Text>
          <Button variant="danger" className='pl-4 fw-semibold mt-2'>ADD TO CART</Button>
        </Card.Body>
      </Card>
      
    </CardGroup>
            </Container>
        </section>
    </div>
  )
}

export default Section4
