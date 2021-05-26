import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../../assets/img/profile/yoPaginaWeb.jpg'
import Button from 'react-bootstrap/Button'

import './sobremi.style.css'

const sobremi= () => {
    return (
        
        <div id="sobremi">
            <div className="sobremi">
            <h1 className="pt-3 text-center font-details pb-3">SOBRE MI</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/*Profile*/}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2">
                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid/>
                        </Row>
                    </Col>

                    {/*Descripción*/}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                        Hola a todos! soy <strong>&nbsp;Yelder Alexander Da Silva Ferreira</strong>
                <br />Soy técnico de Desarrollo de Aplicaciones Multiplataforma impartido por CEPIBASE en Barcelona, En esta formación he aprendido herramientas indispensables para el desarrollo de aplicaciones web como móviles.
                <br />
                 Estoy graduado en Comercio Internacional, con experiencia de 2 años en el área administrativa y de 4 años en ventas, poseo un gran interés en las TIC, puedo hablar con fluidez tanto español como portugués y tengo inglés medio
                <br />
                <br />
                Me considero una persona que valora el respeto y la confianza, empático y comprometido, comunicador y observador de los detalles y sobre todo motivado en trabajar en equipo para obtener los mejores resultados posibles.
               
                <br />
                        </Row>
                        <Row>
                            {/*Buttons*/}
                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contacto">
                                    <Button className="m-2" variant="outline-primary">
                                        Hablemos
                                    </Button>
                                    </a>
                                </div>
                                <div>
                    <a href="https://drive.google.com/file/d/1eDk6mY84fIZmWzYQxcahU8-mcjrkasXg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Mi Curriculum
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/yelder" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/yelderdasilva/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default sobremi
