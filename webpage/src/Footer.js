import Container from 'react-bootstrap/esm/Container';
import './Footer.css'

function Footer() {
    return (
        <div className=" bg py-5 col-md-12 col-xl-12 col-lg-12">
        <Container>
        
            
            <div className="container">
            <footer className="row justify-content-between">
                <div className="col-xl-4">
                    <div  className=" bg1">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, nam!</p>
                        
                    </div>
                </div>
                <div className="col-xl-4">
                    <div  className=" bg3">
                        <h2>Contact Info</h2>
                        <p>28 Seventh Avenue, Neew York, 10014</p>
                        
                        <p>+1 987 654 3210</p>
                        <p>mail@support.com</p>
                        <p>1234 Altschul, New York,NY 10027-0000</p>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div  className=" bg2">
                        <h2>Opening Hours</h2>
                        <h6>Monday - Thursday</h6>
                        <p>10:00 AM - 11:00 PMs</p>
                        
                        <h6>Friday - Sunday</h6>
                        <p>12:00 AM - 03:00 AM</p>
                    </div>
                </div>
            </footer>
            </div>
        </Container>
        </div>
    )
}

export default Footer;