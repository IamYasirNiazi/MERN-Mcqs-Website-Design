import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <Container className='footer__container'>
                <Row className='footer__container__row'>
                    <Col className='footer__container__row__col col col-md-12'>
                        <div className='footer__container__row__col__main'>
                            <h5><Link href={'/'}>PakMcqsHub</Link></h5>
                            <ul>
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/about-us'}>About Us</Link></li>
                                <li><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
                                <li><Link href={'/terms-and-conditions'}>Terms and Conditions</Link></li>
                                <li><Link href={'/contact-us'}>Contact Us</Link></li>
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