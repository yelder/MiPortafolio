import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import './contacto.styles.css'

const contacto = () => {
    return (
        <div id="contacto">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACTO</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:yelder302@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="yelder302@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/yelderdasilva/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://www.instagram.com/yelderalexander/" target="_blank" rel="noopener noreferrer">
                <Button id="instagram-btn" variant="outline-info" title="Instagram!!">
                <i class="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
        
            <div className="m-2">
              <a href="https://www.facebook.com/yelder/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="FB">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
        </Col>
        </Row>
        </Jumbotron>          
        </div>
    )
}

export default contacto
