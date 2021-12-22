import './App.css';
import React, {useState, useEffect} from 'react';
import {Button, TextField, Typography} from '@mui/material';


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

    useEffect(() => {
        generateProblems();
    }, []);

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

    const bodyStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '90vh'
    }
    const mathStyle = {
        width: '100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        textAlign: 'right'
    }

  return (
    <div className="App">
        <Typography variant={'h3'} sx={{marginBottom: '30px' }}>Awesome Math Generator</Typography>
        <div style={bodyStyle}>
            <div style={{marginBottom: '30px'}}>
                <Button variant={'contained'} onClick={generateProblems} sx={{marginRight: '10px'}}>Generate Problem</Button>
                {field1 && <Button variant={'contained'} onClick={handleShowAnswer}>Show Answer</Button>}
            </div>
            <div style={mathStyle}>
                <Typography variant={'h5'}> {field1}</Typography>
                <Typography variant={'h5'}>{add === 1 ? '+' : '-'} {field2}</Typography>
                <Typography variant={'h5'}>------------</Typography>
                {answer && <Typography variant={'h5'}>{answer}</Typography>}
            </div>
        </div>
    </div>
  );
}

export default App;
