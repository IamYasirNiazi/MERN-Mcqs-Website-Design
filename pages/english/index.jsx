import BreadCrumb from '@/src/components/BreadCrumb'
import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Mcqs_Home2 from '@/src/components/Mcqs_Home2'

const index = () => {

  const categories=[
    {main: "English Practise Mcq Question and Answer",
    points:[
      {title:"Grammer", href: "grammer"}, 
      {title:"Articles", href: "articles"}, 
      {title:"Preposition", href:"preposition"}, 
      {title:"Direct and Indirect", href:"direct-and-indirect"}, 
      {title:"Acitve and Passive Voice", href:"active-and-passive-voice"}, 
      {title:"Synonyms", href:"synonyms"}, 
      {title:"Antonyms", href:"antonyms"},
      {title:"Spelling Check", href:"spelling-check"},
      {title:"Idioms and Phrases", href:"idioms-and-phrases"}
    ]}  
  ]


  // const categories = [
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



  return (
    <>
        <Header />
        {/* <Hero /> */}
        <BreadCrumb />
        {categories.map((ctg, index)=>{
          return(
            <Mcqs_Home2 category={ctg} key={index}/>
          )})}
        <Footer />
    </>
  )
}

export default index