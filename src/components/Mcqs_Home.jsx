import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const McqsSection = () => {
  return (
    <>
        <section className="mcq-section">
            <Container className='mcq-section__container'>
                <Row className='mcq-section__container__row'>
                    <Col className='mcq-section__container__row__col col col-md-8'>
                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>General MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general' style={{background: 'theme-color("site-third")'}}>Aptitude</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'>Reasoning</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'>English</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'>General Knowledge</h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Basic Computer MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'>Computer Fundamental</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'>Operating System</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'>Ms Word</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'>Ms Excel</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'>Ms PowerPoint</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'>Shortcuts</h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Programming MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>C#</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>Java</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>Database</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>HTML</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>CSS</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>JavaScript</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>Php</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'>React</h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Management MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'>Marketing</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'>Business Management</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'>HRM</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'>Communication Skills</h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Commerce MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'>Accounting</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'>Economics</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'>GST</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'>Tally</h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Current Affairs MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading current-affairs'>Pakistan Current Affairs</h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading current-affairs'>World Current Affairs</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default McqsSection