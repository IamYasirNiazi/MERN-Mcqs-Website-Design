import Link from 'next/link';
import React, { useState } from 'react';
import {Container, Row, Col} from 'reactstrap';


const Header = () => {

    const [select, setSelect] = useState()

    function selectChange(event){
        setSelect(event.target.value);
        console.log(select)
    }
    


  return (
    <>
        <div className='header'>
            <Container className='header__container'>
                <Row className='header__container__row'>
                    <Col className='header__container__row__col col col-md-12'>

                        <div className='header__container__row__col__main'>
                            <h5 className='header__container__row__col__main__logo'><Link href={'/'}>Logo</Link></h5>
                            <ul className='header__container__row__col__main__navigation'>
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/general-knowledge'}>GK Mcqs</Link></li>
                                <li><Link href={'/everyday-science'}>Everyday Science</Link></li>
                                <li><Link href={'/pak-study'}>Pak Study</Link></li>
                                <li><Link href={'/islamic-study'}>Islamic Study</Link></li>
                                <li><Link href={'/current-affairs'}>Current Affairs</Link></li>
                                <li>
                                    <select onChange={selectChange}>
                                        {/* <option><Link href={'/current-affairs'}>Current Affairs</Link></option> */}
                                        <option name='subject' value='a'>Math Mcqs</option>
                                        <option name='subject' value='english'>English Mcqs</option>
                                        <option name='subject' value='physics'>Physics Mcqs</option>
                                        <option name='subject' value='chemistry'>Chemistry Mcqs</option>
                                        <option name='subject' value='computer'>Computer Mcqs</option>
                                        <option name='subject' value='programming'>Programming Mcqs</option>
                                        <option name='subject' value='biology'>Biology Mcqs</option>
                                    </select>
                                </li>
                            </ul>
                            {/* <button className='header__container__row__col__main__btn btn'>Submit MCQ?</button> */}
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>

    </>
  )
}

export default Header