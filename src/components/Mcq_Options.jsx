import { useState } from "react";


export const Checkboxes = ({options, answer})=>{



    const [selected, setSelected] = useState(null);
  
    const handleOptionSelect = (option) => {
      setSelected(option);
    };
  

    const [answerShow, setAnswerShow] = useState(false)
    function btnShow(){
      setAnswerShow(!answerShow)
    }


    return (
    <>
        {options.map((option, index) => (
            <div key={index} className='d-flex align-items-center gap-1'>
                <label className='d-flex align-items-center gap-2'>
                    <input
                        type="checkbox"
                        className="checkboxes"
                        id={`option-${index}`}
                        name={`option-${index}`}
                        checked={selected === option.value}
                        onChange={() => handleOptionSelect(option.value)}
                        value={option.value}
                        disabled={selected !==null}
                    />
                    <span>{option.label}</span>
                </label>
                {selected && option.value == answer && <b><i style={{color: "green"}} class="ri-check-fill"></i></b>}
                {selected && option.value !== answer && (
                    <span style={{color: "red"}}><i class="ri-close-fill"></i></span>
                )}
            </div>
        ))}
        <button className="mt-2" onClick={()=>btnShow()}>{!answerShow? "Show Answer" : "Hide Answer"}</button>
        {answerShow && <div className="content">{answer}</div>}
    </>
  )
}


export async function getStaticProps() {
    return {
      props: {
        options, answer
      }
    }
}