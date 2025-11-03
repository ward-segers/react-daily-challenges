function Tab({text, onClick, active}){
    return (<>
    <button onClick={onClick} className={`px-4 py-2 font-bold border rounded ${
        active ? 'bg-gray-300 text-black' : 'bg-white text-gray-700'
      }`}>{text}</button>
    </>);
}

export default Tab;