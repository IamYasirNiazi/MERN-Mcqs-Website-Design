import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <Container className='footer__container'>
                <Row className='footer__container__row'>
                    <Col className='footer__container__row__col col col-md-11'>
                        <div className='footer__container__row__col__main'>
                            <h5>Logo</h5>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}

export default Footer