import React, { useState} from 'react';
import './App.css'

function App() {
  const [num1, setNum1] = useState(null)
  const [num1Ceck, setNum1Ceck] = useState(false)
  const [num2, setNum2] = useState(null)
  const [num2Ceck, setNum2Ceck] = useState(false)
  const [num3, setNum3] = useState(null)
  const [num3Ceck, setNum3Ceck] = useState(false)
  const [result, setResult] = useState(null)

  const Change1 = e => {
    if (e.target.checked){
      setNum1Ceck(true)
    }else{
      setNum1Ceck(false)
    }
    HandelChacked()
  }

  const Change2 = e => {
    if (e.target.checked){
      setNum2Ceck(true)
    }else{
      setNum2Ceck(false)
    }
    HandelChacked()
  }

  const Change3 = e => {
    if (e.target.checked){
      setNum3Ceck(true)
    }else{
      setNum3Ceck(false)
    }
    HandelChacked()
  }

  const CalPlus = () => {
    let r = 0
    if(num1Ceck && num2Ceck && num3Ceck){
      r = Number(num1) + Number(num2) + Number(num3)
    }else if(num1Ceck && num2Ceck && num3Ceck === false){
      r = Number(num1) + Number(num2)
    }else if(num1Ceck && num2Ceck === false && num3Ceck){
      r = Number(num1) + Number(num3)
    }else if(num1Ceck === false && num2Ceck && num3Ceck){
      r = Number(num2) + Number(num3)
    }
    
    setResult(r)
  }

  const CalMinus = () => {
    let r = 0
    if(num1Ceck && num2Ceck && num3Ceck){
      r = Number(num1) - Number(num2) - Number(num3)
    }else if(num1Ceck && num2Ceck && num3Ceck === false){
      r = Number(num1) - Number(num2)
    }else if(num1Ceck && num2Ceck === false && num3Ceck){
      r = Number(num1) - Number(num3)
    }else if(num1Ceck === false && num2Ceck && num3Ceck){
      r = Number(num2) - Number(num3)
    }
    setResult(r)
  }

  const CalRiver = () => {
    let r = 0
    if(num1Ceck && num2Ceck && num3Ceck){
      r = Number(num1) * Number(num2) * Number(num3)
    }else if(num1Ceck && num2Ceck && num3Ceck === false){
      r = Number(num1) * Number(num2)
    }else if(num1Ceck && num2Ceck === false && num3Ceck){
      r = Number(num1) * Number(num3)
    }else if(num1Ceck === false && num2Ceck && num3Ceck){
      r = Number(num2) * Number(num3)
    }
    setResult(r)
  }

  const CalDivide = () => {
    let r = 0
    if(num1Ceck && num2Ceck && num3Ceck){
      r = Number(num1) / Number(num2) / Number(num3)
    }else if(num1Ceck && num2Ceck && num3Ceck === false){
      r = Number(num1) / Number(num2)
    }else if(num1Ceck && num2Ceck === false && num3Ceck){
      r = Number(num1) / Number(num3)
    }else if(num1Ceck === false && num2Ceck && num3Ceck){
      r = Number(num2) / Number(num3)
    }
    setResult(r)
  }

  const HandelChacked = () =>{
    if(num1Ceck === false && num2Ceck === false && num3Ceck === false){
      return <span className='error'>Please check the box minimal 2 </span>
    }else if(num1Ceck && num2Ceck === false && num3Ceck === false){
      return <span className='error'>Please check the box minimal 2 </span>
    }else if(num1Ceck === false && num2Ceck && num3Ceck === false){
      return <span className='error'>Please check the box minimal 2 </span>
    }else if(num1Ceck === false && num2Ceck === false && num3Ceck){
      return <span className='error'>Please check the box minimal 2 </span>
    }else{
      return null
    }
  }

  return(
    <div className='app'>
      <div className='list1'></div>
      <div className='list'>
        <h1>Calculator App</h1>
        <div className='btn'>
          <input className='input' type='number' name='num1' placeholder='enter a number' onChange={e => setNum1(e.target.value)}/><input type='checkbox' onChange={e => Change1(e)} /><br/>
        </div>
        <div className='btn'>
          <input className='input' type='number' name='num2' placeholder='enter a number' onChange={e => setNum2(e.target.value)}/><input type='checkbox' onChange={e => Change2(e)} /><br/>
        </div>
        <div className='btn'>
          <input className='input' type='number' name='num3' placeholder='enter a number' onChange={e => setNum3(e.target.value)}/><input type='checkbox' onChange={e => Change3(e)} /><br/>
        </div>
        <HandelChacked/><br/>
        <div className='btn'>
        <button onClick={CalPlus} className='btn-cal'>+</button>
        <button onClick={CalMinus} className='btn-cal'>-</button>
        <button onClick={CalRiver} className='btn-cal'>x</button>
        <button onClick={CalDivide} className='btn-cal'>/</button>
        </div>
        <div className='hr'></div>
        <div>
          <p>Result : {result}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
