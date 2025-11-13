import { useState } from 'react'
import LoanForm from './components/LoanForm'
import Output from './components/Output'

function App() {
  const [cost, setCost] = useState(0)
  const [numberOfPayments, setNumberOfPayments] = useState(0)
  const [emi, setEmi] = useState(null)

  const calculateEmi = () => {
    if(cost && numberOfPayments){
      setEmi((parseFloat(cost) / parseInt(numberOfPayments)).toFixed(2))
    }
  }

  return (
    <div className='flex flex-col justify-center 
    items-center p-4 gap-3 bg-white shadow w-2/3 mx-auto'>
      <h1 className='text-3xl text-gray-600'>Loan Calculator</h1>
      <div className='w-2/3'>
      <LoanForm cost={cost} setCost={setCost} 
      numberOfPayments={numberOfPayments} setNumberOfPayments={setNumberOfPayments}
      calculateEmi={calculateEmi}/>
      <Output emi={emi}/>
      </div>
    </div>
  )
}

export default App
