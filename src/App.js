import './App.css';
import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';


function App() {
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [add, setAdd] = useState(1);
    const [answer, setAnswer] = useState('');

    const generateNumber = () => {
        return Math.floor(Math.random() * 1000);
    }

    const generateAdd = () => {
        return Math.floor(Math.random() * 2);
    }

    const handleShowAnswer = () => {
        if (add) {
            setAnswer(field1 + field2);
        } else {
            setAnswer(field1 - field2);
        }
    }

    const generateProblems = () => {
        const num1 = generateNumber();
        const num2 = generateNumber();
        if (num1 > num2) {
            setField1(num1);
            setField2(num2);
        } else {
            setField1(num2);
            setField2(num1);
        }
        setAdd(generateAdd);
        setAnswer('');
    }

  return (
    <div className="App">
        <Button variant={'contained'} onClick={generateProblems} sx={{marginRight: '10px'}}>Generate Problem</Button>
        {field1 && <Button variant={'contained'} onClick={handleShowAnswer}>Show Answer</Button>}

        <p> {field1}</p>
        <p>{add === 1 ? '+' : '-'} {field2}</p>
        <p>---------------</p>
        {answer && <p>{answer}</p>}
    </div>
  );
}

export default App;
