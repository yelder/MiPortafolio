import React from 'react'
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './misHerramientas.styles.css'
import {herramientas} from './misHerramientas-data';

const misHerramientas = () => {
    return (
     <div className="pt-3 pb-3" id="misherramientas">
       <h1 className="text-center font-details-b pb-4">Herramientas Técnicas</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
            {/*Frontend*/}
            <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
              <Card.Title className="text-center  card-title">Frontend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                    {
                        herramientas.frontend.map((herramientas, index)=>(
                            <span className="p-2" key={`${herramientas.skillName}${index}`}>
                      <a className="text-dark text-decoration-none" href={herramientas.link} target="_blank" rel="noopener noreferrer">
                        <Image src={herramientas.imgSrc} alt={herramientas.imgAltText} rounded className="image-style m-1"></Image> {herramientas.skillName}
                      </a>
                    </span>
                        ))
                    }
              </Card.Text>
              </Card.Body>
              </Card>
            </Col>

              {/* Backend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {herramientas.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Plataformas de Hosting</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {herramientas.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
           {/* Programming Languages */}
           <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Lenguajes de Programación</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {herramientas.programmingLanguages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {herramientas.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href={herramientas.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                      <Image src={herramientas.versionControl[0].imgSrc} alt={herramientas.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {herramientas.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
      </div>
            
    )
}

export default misHerramientas
