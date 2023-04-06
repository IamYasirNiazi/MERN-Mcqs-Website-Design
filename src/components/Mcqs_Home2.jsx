import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import RightCol from './RightCol'

const McqsAll = ({category}) => {

    return (
    <>
        <section className="mcqs-all">
            <Container className='mcqs-all__container'>
                <Row className='mcqs-all__container__row'>
                    <Col className='mcqs-all__container__row__col1 col col-md-9'>
                        <div className="mcqs-all__container__row__col1__main">
                            <h5 className='mcqs-all__container__row__col1__main__title'>{category.main}</h5>
                            <div className='mcqs-all__container__row__col1__main__line'></div>
                            <div className='mcqs-all__container__row__col1__main__list'>
                            {category.points.map((tit, index)=>{
                                return(
                                <span key={index}><i class="ri-arrow-right-s-line"></i> &ensp; <Link href={`/general-knowledge/${tit.href}`}>{tit.title}</Link></span>
                            )})}
                                {/* <li><i>i</i> &ensp; Grammer </li>
                                <li><i>i</i> &ensp; Grammer </li>
                                <li><i>i</i> &ensp; Grammer </li>
                                <li><i>i</i> &ensp; Grammer </li> */}
                            </div>

                        </div>
                    </Col>
                    <Col className='mcqs-all__container__row__col2 col col-md-3'>
                        <div className='mcqs-all__container__row__col2__main'>
                        <RightCol/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}


export async function getStaticProps(){
    return({
        props:{
            category
        }}
    )
}


export default McqsAll