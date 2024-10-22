import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];


function App(){
// root component


const [step,setStep]=useState(1)
// for close btn
const [isOpen,setIsOpen]=useState(true) //initailly aour state is open
// const arr=useState(1)
// console.log(arr)

// // find the current step
//const step=2

function handlePrevious(){
  // alert("previous") 
  if (step >1)setStep(step-1)
 
}
function handleNext(){
  // alert("Next")
  if(step < 3)setStep(step+1)
}

console.log(isOpen)

return <>
{/* closing btn  we if isOpen is true change to false and wise versa*/}
<button className="close" onClick={()=>setIsOpen(!isOpen)}>
  &times;
</button>

  {
    isOpen && (
            <div className="steps">
            <div className="numbers">
              <div className={`${step >= 1 ?"active":""}`}>1</div>
              <div className={`${step >= 2 ? "active":""}`}>2</div>
              <div className={`${step >=3 ? "active":""}`}>3</div>
            </div>

            <p className="message">step {step}:{messages[step-1]}</p>

            <div className="buttons">
            
            <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={handlePrevious}
            >Previous</button>
            <button style={{backgroundColor:'#7950f2',color:'#fff'}} onClick={handleNext}>Next</button>
            
            </div>

          </div>
    )
  }
</>
}

export default App;

