import Link from 'next/link'
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
                                <h6 className='mcq-section__container__row__col__main__sub-heading general' style={{background: 'theme-color("site-third")'}}><Link href={'/general-knowledge/abbreviations'}>Abbreviations</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'><Link href={'/general-knowledge/basic-general-knowledge'}>Basic General Knowledge</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'><Link href={'/general-knowledge/famous-places'}>Famous Places</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'><Link href={'/general-knowledge/inventions'}>Inventions</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'><Link href={'/general-knowledge/sports'}>Sports</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading general'><Link href={'/general-knowledge/technology'}>Technology</Link></h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Basic Computer MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'><Link href={'/computer/computer-fundamentals'}>Computer Fundamental</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'><Link href={'/computer/operating-system'}>Operating System</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'><Link href={'/computer/ms-word'}>Ms Word</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'><Link href={'/computer/ms-excel'}>Ms Excel</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'><Link href={'/computer/ms-powerpoint'}>Ms PowerPoint</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading computer'><Link href={'/computer/shortcuts'}>Shortcuts</Link></h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Programming MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/c-sharp'}>C#</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/java'}>Java</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/database'}>Database</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/html'}>HTML</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/css'}>CSS</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/javascript'}>JavaScript</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/php'}>Php</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading program'><Link href={'/programming/react'}>React</Link></h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Management MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'><Link href={'/management/marketing'}>Marketing</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'><Link href={'/management/business-management'}>Business Management</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'><Link href={'/management/hrm'}>HRM</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading management'><Link href={'/management/communication-skills'}>Communication Skills</Link></h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Commerce MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'><Link href={'/commerce/accounting'}>Accounting</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'><Link href={'/commerce/economics'}>Economics</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'><Link href={'/commerce/gst'}>GST</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading commerce'><Link href={'/commerce/tally'}>Tally</Link></h6>
                            </div>
                        </div>

                        <div className="mcq-section__container__row__col__main">
                            <h5 className='mcq-section__container__row__col__main__heading'>Current Affairs MCQ Question For Practise</h5>
                            <div className='mcq-section__container__row__col__main__line'></div>
                            
                            <div>
                                <h6 className='mcq-section__container__row__col__main__sub-heading current-affairs'><Link href={'/current-affairs/pakistan-current-affairs'}>Pakistan Current Affairs</Link></h6>
                                <h6 className='mcq-section__container__row__col__main__sub-heading current-affairs'><Link href={'/current-affairs/world-current-affairs'}>World Current Affairs</Link></h6>
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