import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {Container, Row, Col} from 'reactstrap';


const Header = () => {

    const listRef = useRef(null);
    const [listVisible, setListVisible] = useState(false);

    useEffect(() => {
    function handleClickOutside(event) {
      if (listRef.current && !listRef.current.contains(event.target)) {
        setListVisible(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [listRef]);
    
     
  function showList(){
        // const list = document.getElementById("other-list")
        // list.classList.toggle("show-other-list")
        setListVisible(!listVisible)
    }
    

    


  return (
    <>
        <div className='header'>
            <Container className='header__container'>
                <Row className='header__container__row'>
                    <Col className='header__container__row__col col col-md-12'>

                        <div className='header__container__row__col__main'>
                            <h5 className='header__container__row__col__main__logo'><Link href={'/'}>PakMcqsHub</Link></h5>
                            <ul className='header__container__row__col__main__navigation'>
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/general-knowledge'}>GK Mcqs</Link></li>
                                <li><Link href={'/everyday-science'}>Everyday Science</Link></li>
                                <li><Link href={'/pak-study'}>Pak Study</Link></li>
                                <li><Link href={'/islamic-study'}>Islamic Study</Link></li>
                                <li><Link href={'/current-affairs'}>Current Affairs</Link></li>
                                <li>
                                    <span id='other' onClick={showList} ref={listRef}>Other</span>
                                    {listVisible && <ul id='other-list' className='show-other-list'>
                                        <li><Link href={'/math'}>Math Mcqs</Link></li>
                                        <li><Link href={'/english'}>English Mcqs</Link></li>
                                        <li><Link href={'/physics'}>Physics Mcqs</Link></li>
                                        <li><Link href={'/chemistry'}>Chemistry Mcqs</Link></li>
                                        <li><Link href={'/computer'}>Computer Mcqs</Link></li>
                                        <li><Link href={'/programming'}>Programming Mcqs</Link></li>
                                        <li><Link href={'/biology'}>Biology Mcqs</Link></li>
                                    </ul>}
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