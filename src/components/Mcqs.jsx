import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Checkboxes } from './Mcq_Options'
import RightCol from './RightCol'



export const Mcqs = ({slicedMcqs, mcqs, pageSize, currentPage, prevPage, nextPage, check, setUncheck}) => {


  return (
    <>
        <section className="mcqs">
            <Container className='mcqs__container'>
                <Row className='mcqs__container__row'>
                    <Col className='mcqs__container__row__col1 col col-md-9'>
                        {slicedMcqs.map((mcq, index)=>{
                            return(
                                <div className='mcqs__container__row__col1__main' key={index}>
                                    
                                    <div className='mcqs__container__row__col1__main__desc'>
                                        <h6 className='mcqs__container__row__col1__main__desc__title'>{index+1}: &nbsp;
                                            <span>{mcq.question}</span>
                                        </h6>
                                        <div className='mcqs__container__row__col1__main__desc__checkboxes'>
                                            <Checkboxes options={mcq.options} question={mcq.question} answer={mcq.answer} />
                                        </div>
                                    </div>
                                </div>
                            )})}
                        <div className='mcqs__container__row__col1__btn'>
                            <button disabled={currentPage<=1} onClick={prevPage}>Previous</button>
                            
                            <button disabled={currentPage >= Math.ceil(mcqs.length / pageSize)} onClick={nextPage}>Next</button>
                        </div>
                    </Col>

                    <Col className='mcqs__container__row__col2 col col-md-3'>
                        <div className="mcqs__container__row__col2__main">
                            <RightCol />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}