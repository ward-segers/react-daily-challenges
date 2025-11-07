import { useState } from 'react';
import NameInput from './components/nameInput';
import NameList from './components/NameList';



function App() {

  const [inputValue, setInputValue] = useState('')
  const [names, setNames] = useState(Array.from(''))
  const [pickedName, setPickedName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEnter = (e) => {
    if(e.key === 'Enter' && inputValue.trim() !== ''){
      setNames((prev) => [...prev, inputValue])
      setInputValue('')
    }
  }

  const handlePick = () => {
    if (names.length === 0) return;
    const randomName = names[Math.floor(Math.random() * names.length)];
    setPickedName(randomName);
    setIsModalOpen(true);
  }

  const handleClose = () => setIsModalOpen(false);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

    <div className='flex justify-center items-center w-2/3 bg-white mx-auto shadow'>
      <div className='flex flex-col gap-4 justify-center'>
      <h1 className='text-3xl text-gray-800'>Raffle Draw</h1>
      <NameInput onKeyUp={handleEnter} onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
      <NameList names={names}/>

      <button id='pick' onClick={handlePick}
      className="mx-auto mt-2 mb-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Pick a name
      </button>
      </div>

      {isModalOpen && (
        <div
        id="nameDialog"
        className="fixed inset-0 flex items-center justify-center bg-black/40"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-2">🎉 Selected Name</h2>
            <p className="text-2xl font-bold text-blue-700 mb-4">
              {pickedName}
            </p>
            <button
              onClick={handleClose}
              className="px-4 py-1 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
              Close
            </button>
          </div>
        </div>
      )}
      </div>

    </div>
  )
}

export default App
