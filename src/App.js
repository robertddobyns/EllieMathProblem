import './App.css';
import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';


function App() {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');

    const generateNumber = () => {
        return Math.floor(Math.random() * 1000);
    }

    const generateProblems = () => {
        setField1(generateNumber);
        setField2(generateNumber);
    }

  return (
    <div className="App">
        <Button variant={'contained'} onClick={generateProblems}>Generate Problem</Button>

        {field1 && <p>{field1}</p>}
        {field2 && <p>{field2}</p>}
        {field1 &&  <p>---------------</p>}
    </div>
  );
}

export default App;
