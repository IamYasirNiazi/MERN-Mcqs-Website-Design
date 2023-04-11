import { useRouter } from 'next/router'
import {Mcqs} from '@/src/components/Mcqs'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import BreadCrumb from '@/src/components/BreadCrumb'
import React, { useEffect, useState } from 'react'


const BasicGeneralKnowledge = ({mcqs}) => {

  const router = useRouter()
  const page = router.query.page

  
  // const mcq = [
  //   {
  //       id: '1',
  //       question: 'What is the capital of France?',
  //       options: [
  //           { label: 'New York', value: 'new-york' },
  //           { label: 'Paris', value: 'paris' },
  //           { label: 'London', value: 'london' },
  //           { label: 'Madrid', value: 'madrid' },
  //       ],
  //     correctAnswer: 'paris',
  //   },
  //   {
  //       id: '2',
  //     question: 'What is the largest country in the world?',
  //     options: [
  //       { label: 'Canada', value: 'canada' },
  //       { label: 'Russia', value: 'russia' },
  //       { label: 'China', value: 'china' },
  //       { label: 'United States', value: 'united-states' },
  //     ],
  //     correctAnswer: 'russia',
  //   },
  //   {
  //     id: '3',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '4',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '5',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '6',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '7',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '8',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '9',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '10',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
  //     {
  //       id: '11',
  //       question: 'What is the largest country in the world?',
  //       options: [
  //         { label: 'Canada', value: 'canada' },
  //         { label: 'Russia', value: 'russia' },
  //         { label: 'China', value: 'china' },
  //         { label: 'United States', value: 'united-states' },
  //       ],
  //       correctAnswer: 'russia',
  //     },
      
  //   // Add more MCQs as needed
  // ]



  // Pagination Code Starts Here
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;


  useEffect(() => {
    if (page) {
      if(1<= page && page <=Math.ceil(mcqs.length/pageSize)){
        setCurrentPage(page)
        router.push(`/english/preposition?page=${parseInt(page)}`);
        console.log(page)
      }
    }
  }, [page]);


  function nextPage(event){
      setCurrentPage(currentPage + 1)
      event.preventDefault()
      router.push(`/english/preposition?page=${parseInt(currentPage) + 1}`)
  }

  function prevPage(event){
      setCurrentPage(currentPage - 1)
      event.preventDefault()
      router.push(`/english/preposition?page=${parseInt(currentPage) - 1}`)
  }


  const slicedMcqs = mcqs.slice((currentPage-1) * pageSize, currentPage * pageSize)



  return (
    <>
        <Header />
        <BreadCrumb />
        <Mcqs slicedMcqs={slicedMcqs} currentPage={currentPage} mcqs={mcqs} prevPage={prevPage} nextPage={nextPage} pageSize={pageSize} />
        <Footer />
    </>
  )
}

export default BasicGeneralKnowledge




export async function getServerSideProps(){


  const server = "http://localhost:3000";

  
  const res = await fetch(`${server}/api/technology`, {
      
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const mcqs = await res.json();
    console.log(mcqs)
    return({
      props: {
        mcqs
      }
    })
}