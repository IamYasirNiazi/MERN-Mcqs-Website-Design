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

                    <Col className='col col-md-6 hero__container__row__col1'>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi temporibus, quo repellendus eos a perspiciatis eveniet necessitatibus perferendis, tempore in, recusandae nam? Exercitationem totam minima hic eius pariatur optio ex.</p>
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