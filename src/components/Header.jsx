import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import {Container, Row, Col} from 'reactstrap';



const Header = () => {


  // Othe List Show Hide Logic
  const listRef = useRef(null);

  useEffect(() => {

    if(window.innerWidth>=767){

      function handleClickOutside(event) {
        if (listRef.current && !listRef.current.contains(event.target)) {
          const list = document.getElementById("other-list")
          list.classList.remove("show-other-list")
        }
      }
  
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };

    }

  }, [listRef]);
  
    
  function showList(event){
    const list = document.getElementById("other-list")
    list.classList.toggle("show-other-list")
    event.stopPropagation();
  }




  // Toogle Button Logic
  const toggleRef = useRef(null)
  
  useEffect(() => {
    function clickOutside(event) {
      const nav = document.getElementById("navigation")
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        nav.classList.remove("toggle-show")
      }
    }
    
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, [toggleRef, listRef]);

     
      
  function showNavFunc(){
    const nav = document.getElementById("navigation")
    nav.classList.toggle("toggle-show")
  }

    
    
    

  return (
    <>
        <div className='header'>
            <Container className='header__container'>
                <Row className='header__container__row'>
                    <Col className='header__container__row__col col col-md-12'>

                        <div className='header__container__row__col__main'>
                            <h5 className='header__container__row__col__main__logo'><Link href={'/'}>PakMcqsHub</Link></h5>
                            {<ul className='header__container__row__col__main__navigation' id='navigation'>
                              <li><Link href={'/'}>Home</Link></li>
                              <li><Link href={'/general-knowledge'}>GK Mcqs</Link></li>
                              <li><Link href={'/everyday-science'}>Everyday Science</Link></li>
                              <li><Link href={'/pak-study'}>Pak Study</Link></li>
                              <li><Link href={'/islamic-study'}>Islamic Study</Link></li>
                              <li><Link href={'/current-affairs'}>Current Affairs</Link></li>
                              <li className='other'>
                                <span id='other' onClick={showList} ref={listRef}>Other</span>
                                {<ul id='other-list'>
                                    <li><Link href={'/math'}>Math Mcqs</Link></li>
                                    <li><Link href={'/english'}>English Mcqs</Link></li>
                                    <li><Link href={'/physics'}>Physics Mcqs</Link></li>
                                    <li><Link href={'/chemistry'}>Chemistry Mcqs</Link></li>
                                    <li><Link href={'/computer'}>Computer Mcqs</Link></li>
                                    <li><Link href={'/programming'}>Programming Mcqs</Link></li>
                                    <li><Link href={'/biology'}>Biology Mcqs</Link></li>
                                </ul>}
                              </li>
                            </ul>}
                            {/* <button className='header__container__row__col__main__btn btn'>Submit MCQ?</button> */}
                            <i className="ri-menu-fill" onClick={showNavFunc} ref={toggleRef}></i>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>

    </>
  )
}

export default Header