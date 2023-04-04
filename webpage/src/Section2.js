import './Section2.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';

function Section2() {
  return (
    <div>
        <section className='py-5 my-4'>
            <Container>
            <div>
                <h1 style={{textAlign:'center', color:'red'}} className="sec-2-font">About CafeDine</h1>
                <p style={{textAlign:'center' ,color:'black'}}  className="sec-2-font-p pt-3 fw-bold">We Are A Modern Restaurant In The <br/>Center Of The City</p>
            </div>
            <CardGroup>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-1.jpg" />
        <Card.Body className='p-2'>
          <Card.Title className='font-famali my-3'>Quality Food</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-2.jpg" />
        <Card.Body  className='p-2'>
          <Card.Title className='font-famali my-3'>Friendly placee</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-3 border-0'>
        <Card.Img variant="top" src="https://demo.themefisher.com/cafedine/images/about/img-3.jpg" />
        <Card.Body  className='p-2'>
          <Card.Title className='font-famali my-3'>Affordable price</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
            </Container>
        </section>
    </div>
   
  )
}

export default Section2