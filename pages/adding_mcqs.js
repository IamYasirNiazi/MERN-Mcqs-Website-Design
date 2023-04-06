import React, { useState } from 'react'

const adding_mcqs = () => {

  const [temp, setTemp] = useState({category:'', question:'', option1:'', option2:'', option3:'', option4:'', label1:'', label2:'', label3:'', label4:'', answer:''})

  const [content, setContent] = useState({
    category: '',
    question: '',
    options: [
      {option: '', label: ''},
      {option: '', label: ''},
      {option: '', label: ''},
      {option: '', label: ''}
    ],
    answer: ''
  })

 
  const onChange = (event)=>{

    setTemp({...temp, [event.target.name]: event.target.value})
    console.log(content)
    
  }

  
  const uploadDB = async (event)=>{
  
    event.preventDefault();

    await setContent({
      category: temp.category,
      question: temp.question,
      options: [
        {option: temp.option1, label: temp.label1},
        {option: temp.option2, label: temp.label2},
        {option: temp.option3, label: temp.label3},
        {option: temp.option4, label: temp.label4}
      ],
    answer: temp.answer
    })


    const server = "http://localhost:3000";


    const response = await fetch(`${server}/api/adding-mcqs`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    });

    const data = await response.json()
    console.log(data)
  }



  return (
    <>
    
    <div className='mt-5'>
      <form onSubmit={uploadDB}>
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h5>Category</h5>
            <input type='text' name='category' value={temp.category} onChange={onChange} required/>            
            <br />
            <h5>Question</h5>
            <input type='text' name='question' value={temp.question} onChange={onChange} required/>
            <br />
            <h5>Options</h5>
            <div className='d-flex flex-column align-items-end'>
              <span>Option1 &nbsp; 
                <input type='text' name='option1' value={temp.option1} onChange={onChange} required/>
                <input type='text' name='label1' value={temp.label1} onChange={onChange} required/>
              </span>
              
              <span>Option2 &nbsp; 
                <input type='text' name='option2' value={temp.option2} onChange={onChange} required/>
                <input type='text' name='label2' value={temp.label2} onChange={onChange} required/>
              </span>

              <span>Option3 &nbsp; 
                <input type='text' name='option3' value={temp.option3} onChange={onChange} required/>
                <input type='text' name='label3' value={temp.label3} onChange={onChange} required/>
              </span>

              <span>Option4 &nbsp; 
                <input type='text' name='option4' value={temp.option4} onChange={onChange} required/>
                <input type='text' name='label4' value={temp.label4} onChange={onChange} required/>
              </span>
            </div>
            <br />
            <h5>Answer</h5>
            <input type='text' name='answer' value={temp.answer} onChange={onChange} required/>

            <input type='submit' className='mt-5' />
        </div>
      </form>
    </div>
    </>
  )
}

export default adding_mcqs
