// import React from 'react'
// import { Col, Container, Row } from 'reactstrap'

// const BreadCrumb = () => {
//   return (
//     <>
//         <section className='bread-crumb'>
//           <Container className='bread-crumb__container'>
//             <Row className='bread-crumb__container__row'>
//               <Col className='bread-crumb__container__row__col'>
//                 <div className='bread-crumb__container__row__col__main'>
//                   <h4>Page Heading</h4> 
//                   <nav aria-label="breadcrumb">
//                     <ol class="breadcrumb">
//                       <li class="breadcrumb-item"><a href="#">Home</a></li>
//                       <li class="breadcrumb-item"><a href="#">Library</a></li>
//                       <li class="breadcrumb-item active" aria-current="page">Data</li>
//                     </ol>
//                   </nav>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//     </>
//   )
// }

// export default BreadCrumb






import Link from 'next/link';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'reactstrap'


const Breadcrumb = () => {
  const router = useRouter();
  const path = router.asPath.split('/').filter((x) => x);

  return (
    <>
      <section className='bread-crumb'>
        <Container className='bread-crumb__container'>
          <Row className='bread-crumb__container__row'>
            <Col className='bread-crumb__container__row__col'>
              <div className='bread-crumb__container__row__col__main'>
                <h4>Page Heading</h4> 
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        Home
                      </Link>
                    </li>
                    {path.map((value, index) => {
                      const href = `/${path.slice(0, index + 1).join('/')}`;
                      const isLast = index === path.length - 1;

                      return (
                        <li className={`breadcrumb-item${isLast ? ' active' : ''}`} key={href}>
                          {isLast ? (
                            <>{(value).charAt(0).toUpperCase() + (value).slice(1, value.length).toLowerCase()}</>
                          ) : (
                            <Link href={href}>
                              {(value).charAt(0).toUpperCase() + (value).slice(1, value.length).toLowerCase()}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Breadcrumb;