import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const RightCol = () => {
  return (
    <>
     <div className="right-col">
       
        <div className='right-col__main'>
            <h6 className='right-col__main__title'>Basic Computer Mcq's</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'/computer/computer-fundamentals'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Computer Fundamentals</Link></span>
                <span><Link href={'/computer/operating-system'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Operating System</Link></span>
                <span><Link href={'/computer/ms-word'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Ms Word</Link></span>
                <span><Link href={'/computer/ms-excel'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Ms Excel</Link></span>
                <span><Link href={'/computer/ms-powerpoint'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Powerpoint</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>Programming Mcq's</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'/programming/html'}><i className="ri-arrow-drop-right-line"></i>&nbsp;HTML</Link></span>
                <span><Link href={'/programming/css'}><i className="ri-arrow-drop-right-line"></i>&nbsp;CSS</Link></span>
                <span><Link href={'/programming/javascript'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Javascript</Link></span>
                <span><Link href={'/programming/react'}><i className="ri-arrow-drop-right-line"></i>&nbsp;React Js</Link></span>
                <span><Link href={'/programming/database'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Database</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>English Mcq's</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'/english/grammer'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Grammer</Link></span>
                <span><Link href={'/english/preposition'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Preposition</Link></span>
                <span><Link href={'/english/direct-and-indirect'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Direct & Indirect</Link></span>
                <span><Link href={'/english/synonyms'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Synonyms</Link></span>
                <span><Link href={'/english/antonyms'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Antonyms</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>Management Mcq's</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'/management/marketing'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Marketing</Link></span>
                <span><Link href={'/management/business-management'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Business Management</Link></span>
                <span><Link href={'/management/hrm'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Human Resource</Link></span>
                <span><Link href={'/management/communication-skills'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Communication Skills</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>Other Subjects</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'/english'}><i className="ri-arrow-drop-right-line"></i>&nbsp;English</Link></span>
                <span><Link href={'/math'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Math</Link></span>
                <span><Link href={'/physics'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Physics</Link></span>
                <span><Link href={'/chemistry'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Chemistry</Link></span>
                <span><Link href={'/biology'}><i className="ri-arrow-drop-right-line"></i>&nbsp;Biology</Link></span>
            </div>
        </div>


     </div>
    </>
  )
}

export default RightCol