import React from 'react';
import { TextField } from './TextField';

//props
//hooks
//render props

const App: React.FC = () =>{
  return <div>
    <TextField text='hello' person={{fistName: "fistname",lastName:"lastname"}} />
  </div>
}

export default App;
