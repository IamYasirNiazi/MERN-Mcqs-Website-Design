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
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Computer Fundamentals</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Operating System</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Ms Word</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Ms Excel</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Powerpoint</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>Programming Mcq's</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;HTML</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;CSS</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Javascript</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Ms React</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Database</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>English Mcq's</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Computer Fundamentals</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Operating System</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Ms Word</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Ms Excel</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Powerpoint</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Shortcuts</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>Basic Computer Mcq's</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Computer Fundamentals</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Operating System</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Ms Word</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Ms Excel</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Powerpoint</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Shortcuts</Link></span>
            </div>
        </div>

        <div className='right-col__main'>
            <h6 className='right-col__main__title'>Other Subjects</h6>
            <div className='right-col__main__line'></div>
            <div className='right-col__main__links'>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;English</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Math</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Physics</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Chemistry</Link></span>
                <span><Link href={'#'}><i class="ri-arrow-drop-right-line"></i>&nbsp;Biology</Link></span>
            </div>
        </div>


     </div>
    </>
  )
}

export default RightCol