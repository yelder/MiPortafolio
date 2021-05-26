import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";
import Logo from '../../assets/icons/logoYelder.png';


import './miFormacion.styles.css';


const miFormacion = () => {
    return (
        <div id='formacion'>
            <h1 className="pt-3 text-center font-details-b pb-3">FORMACIÓN</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                <Tilt options={{ max: 25 }}>
                <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Logo} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Mi Formación Académica</Card.Title>
                </div>
                </Card.Body>
                <div>
                  <Card.Text className="text-center style">
                  <strong> Técnico en Programación Java con Android</strong>, Academia Cepi-base. 450 horas (2020).
                  <br />
                  <strong>Diplomado de Negocios Marítimos</strong>,Universidad Dr. Rafael Belloso Chacín (2017-2018).
                  <br />
                  <strong>Licenciado en Comercio Internacional</strong>, Universidad Alejandro de Humboldt (2009–2013).
                  <br />
                    <br/>
                    <strong> Otras Formaciones </strong>
                    <br/>
                    </Card.Text>
                    <Card.Text className="m-3 p-3" >
                    <strong>Plataforma Platzi: </strong> Profesional de Git y GitHub, Práctico de HTML y CSS, Responsive Design, Fundamentos de Ingeniería de Software, Bootstrap,
                    Diseño Web y Desarrollo Web Online, Frontend Developer, Java SE orientado a objetos, Profesional de Javascript.
                    <br/>
                    <strong>Plataforma Codigo Facilito: </strong>Profesional de Java, Html y Css.
                  </Card.Text>
                </div>
              </Card>
              </Tilt>
              </Container>
            </Jumbotron>
        </div>
    )
}

export default miFormacion
