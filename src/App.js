import React, {useEffect, useState} from "react";

import List from './components/List';
import NavBar from './components/NavBar';


function App() {
  const [data, setData] = useState([])
  const getDataUser = () =>{
    fetch('http://5.42.94.18:3000/api/v1/wallet/1')
      .then((response)=> response.json())
          .then((data)=>{
          setData(data.data)
          })
          .catch((error)=> console.log(error))
  }
  useEffect(() => {
    getDataUser()
  }, [])
  return (
    <div className='app mt-4 ml-10'>
      <NavBar getDataUser={getDataUser} name={data.name} balance={data.balance} />
      <List getDataUser={getDataUser}/>
    </div>
  );
}

export default App;