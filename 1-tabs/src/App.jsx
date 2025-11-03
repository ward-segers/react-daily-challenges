import { useState } from 'react';
import AddressContainer from './components/AddressContainer';
import PersonContainer from './components/PersonContainer';
import TabContent from './components/TabContent';
import TabList from './components/TabList';
import Tab from './components/Tab';


function App() {

  const [activeTab, setActiveTab] = useState('person');
  const handleClick = (tab) => {setActiveTab(tab)};

  return (
    <div className='w-2/3 mx-auto mt-20'>
    <TabList>
      <Tab text={'Person'}  active={activeTab === 'person'} onClick={() => handleClick('person')}/>
      <Tab text={'Address'}  active={activeTab === 'address'} onClick={() => handleClick('address')}/>
    </TabList>
    <TabContent>
      {activeTab === 'person' && 
      <PersonContainer />
      }
      {activeTab === 'address' &&
      <AddressContainer />    
      }
    </TabContent>
    </div>
  )
}

export default App
