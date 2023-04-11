import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import hero_img from '../assets/hero_img.png'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <Container className='hero__container'>
                <Row className='hero__container__row'>

                    <Col className='col col-md-7 col-lg-6 hero__container__row__col1'>
                        <h2>Top Pakistani MCQ's Website, Where You Can Find Mcqs Of All Subjects</h2>
                        <p>Our platform offers a vast database of practice questions covering a range of topics, from science and technology to current affairs and history. Whether you're a student preparing for academic exams or a professional seeking to enhance your knowledge for career advancement, MCQs Pakistan has got you covered.</p>
                    </Col>

                    <Col className='col col-md-5 hero__container__row__col2'>
                        <Image className='hero__container__row__col2__img img-fluid' src={hero_img} alt="hero" />
                    </Col>

                </Row>
            </Container>
        </section>
    </>
  )
}

export default Hero