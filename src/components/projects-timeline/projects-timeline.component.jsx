import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

// projects
import L_Google from '../../assets/img/projects/google.png'
import L_FotoBook from '../../assets/img/projects/fotobook.png'
import L_Yelshop from '../../assets/img/projects/yelshop.png'

// skills
import Image from 'react-bootstrap/Image'
import L_HTML5 from '../../assets/img/skills/html-5.svg'
import L_CSS3 from '../../assets/img/skills/css3.svg'
import L_BOOTSTRAP4 from '../../assets/img/skills/bootstrap-4.svg'
import L_Express from '../../assets/img/skills/express.svg'
import L_MongoDB from '../../assets/img/skills/mongodb.svg'
import L_Node from '../../assets/img/skills/nodejs.svg'
import L_React from '../../assets/img/skills/react.svg'
import L_ReactBoostrap from '../../assets/img/skills/react-bootstrap.svg'
import L_ReactRouter from '../../assets/img/skills/react-router.svg'

import './projects-timeline.styles.css'

const ProjectTimeline = () => {
  return (
    <div id='proyectos'>
      <h1 className='pt-3 text-center font-details-b pb-3'>PROYECTOS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date='07/04/2020'
            className='text-center'
            text='Arquitectura de la página Inicio de google'
            src={L_Google}
            alt='google'
          >
            <div className='d-flex justify-content-between flex-column mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey='0'
                      className='p-2 text-center accordian-main'
                    >
                      DETALLES DEL PROYECTO
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Descripción:</strong> La página de inicio de
                        Google realizada con html y css.
                        <hr />
                        <strong>Características:</strong>
                        <ul className='list-styles pt-1'>
                          <li>
                            Arquitectura simple de la pág principal de google
                          </li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_HTML5}
                                alt='HTML 5'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_CSS3}
                                alt='CSS 3'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              CSS3
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='botones d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton
                  href='https://yelder.github.io/GooglePaginaPrincipal/'
                  target='_blank'
                >
                  VISTA DEL PROYECTO
                </UrlButton>
                <UrlButton
                  href='https://github.com/yelder/GooglePaginaPrincipal'
                  target='_blank'
                >
                  CÓDIGO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Projecto Frontend: FotoBook*/}
          <ImageEvent
            date='30/04/2020'
            className='text-center'
            text='FotoBook'
            src={L_FotoBook}
            alt='FotoBook'
          >
            <div className='d-flex justify-content-between flex-column mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey='0'
                      className='p-2 text-center accordian-main'
                    >
                      DETALLES DEL PROYECTO
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Descripción:</strong> Proyecto frontend de red
                        social referente a fotografías llamada FotoBook .
                        <hr />
                        <strong>Características:</strong>
                        <ul className='list-styles pt-1'>
                          <li>Página elaborada con Bootstrap</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_HTML5}
                                alt='HTML 5'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_CSS3}
                                alt='CSS 3'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              CSS3
                            </span>
                          </li>

                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_BOOTSTRAP4}
                                alt='BOOTSTRAP 4'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              BOOTSTRAP 4
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton
                  href='https://yelder.github.io/FotoBook/'
                  target='_blank'
                >
                  VISTA DEL PROYECTO
                </UrlButton>
                <UrlButton
                  href='https://github.com/yelder/FotoBook'
                  target='_blank'
                >
                  CODIGO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Projecto FullStack: Yelshop*/}
          <ImageEvent
            date='07/01/2020'
            className='text-center'
            text='YelShop'
            src={L_Yelshop}
            alt='YelShop'
          >
            <div className='d-flex justify-content-between flex-column mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey='0'
                      className='p-2 text-center accordian-main'
                    >
                      DETALLES DEL PROYECTO
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Descripción:</strong> Proyecto FullStack de
                        e-commerce full funcional.
                        <hr />
                        <strong>Características:</strong>
                        <ul className='list-styles pt-1'>
                          <li>Página elaborada con el Stack MERN</li>
                          <li>MongoDB, Exprees, React, Node</li>
                        </ul>
                        <hr />
                        <strong>Tecnologías usadas:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_MongoDB}
                                alt='MongoDB'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              MongoDB
                            </span>
                          </li>

                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_Express}
                                alt='Express'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_React}
                                alt='React'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              React
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_Node}
                                alt='Node'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              Node
                            </span>
                          </li>

                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_ReactBoostrap}
                                alt='React-Bootstrap'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              React Bootstrap
                            </span>
                          </li>

                          <li>
                            <span className='p-2'>
                              <Image
                                src={L_ReactRouter}
                                alt='React-Router'
                                rounded
                                className='image-style m-1'
                              ></Image>{' '}
                              React Router
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton
                  href='https://yelshopapp.herokuapp.com/'
                  target='_blank'
                >
                  VISTA DEL PROYECTO
                </UrlButton>
                <UrlButton
                  href='https://github.com/yelder/e-commerce'
                  target='_blank'
                >
                  CODIGO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  )
}

export default ProjectTimeline
