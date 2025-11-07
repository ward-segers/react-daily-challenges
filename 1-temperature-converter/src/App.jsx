import { useState } from 'react'
import Celsius from './components/Celsius'
import Fahrenheit from './components/Fahrenheit'


function App() {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)

  const [error, setError] = useState('')

  const handleChange = (e) => {

    const {id, value} = e.target;

    if (value === '') {
      setCelsius('');
      setFahrenheit('');
      return;
    }

    const num = parseFloat(value);
    if(isNaN(num)){
      setError('Gelieve enkel cijfers in te geven!');
      return
    }

    setError('')

    if(id === 'celsius'){
      setCelsius(value)
      setFahrenheit((num * 9/5 + 32).toFixed(2));
    }else if (id === 'fahrenheit') {
      setFahrenheit(value);
      setCelsius(((num - 32) * 5/9).toFixed(2));
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <div className="w-96 h-96 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Temperature converter</h1>
        <Celsius id={"celsius"} value={celsius} onChange={handleChange}/>
        <Fahrenheit id={"fahrenheit"} value={fahrenheit} onChange={handleChange}/>
        <p className='text-red-500'>{error}</p>
      </div>
    </div>
  )
}

export default App
