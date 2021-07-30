import './CalculatorBox.css'
import '../css/App.css'

import { useState } from 'react'

const CalculatorBox = () => {
    const [myNumber, setMyNumber] = useState(0)
    const [firstNumber, setFirstNumber] = useState(0)
    const [operation, setOperation] = useState(null)

    const operate = () => {
        setMyNumber(
            (prevState) => {
                switch (operation){
                    case '+':
                        return firstNumber + prevState;
                    case '-':
                        return firstNumber - prevState;
                    case 'X':
                        return firstNumber * prevState;
                    case '%':
                        return firstNumber / prevState;
                    default:
                        return 0;
                }
            }
        )
    }

    const changeNumber = (e) => {
        let newNumber = null;

        switch (e.target.value){
            case '+':
                setFirstNumber(myNumber);
                setOperation(e.target.value);
                setMyNumber(0);
                break;
            case '-':
                setFirstNumber(myNumber);
                setOperation(e.target.value);
                setMyNumber(0);
                break;
            case 'X':
                setFirstNumber(myNumber);
                setOperation(e.target.value);
                setMyNumber(0);
                break;
            case '%':
                setFirstNumber(myNumber);
                setOperation(e.target.value);
                setMyNumber(0);
                break;
            case '=':
                operate();
                setOperation(null);
                break;
            case 'C':
                setOperation(null);
                setMyNumber(0)
                break;
            default:
                newNumber = parseInt(e.target.value)
                break;
        }

        if (newNumber != null && myNumber < 100000000){
            setMyNumber((prevState) => prevState * 10 + newNumber);
        }
    }

    return (
        <div className='calculator-grid'>
            <div className='calculator-text'>
                <center>
                    <input type='text' value={myNumber}></input>
                </center>
            </div>
            <div className='calculator-7'>
                <button className='calc-button' onClick={changeNumber} value='7'>7</button>
            </div>
            <div className='calculator-8'>
                <button className='calc-button' onClick={changeNumber} value='8'>8</button>
            </div>
            <div className='calculator-9'>
                <button className='calc-button' onClick={changeNumber} value='9'>9</button>
            </div>
            <div className='calculator-divide'>
                <button className='calc-button' onClick={changeNumber} value='%'>%</button>
            </div>
            <div className='calculator-4'>
                <button className='calc-button' onClick={changeNumber} value='4'>4</button>
            </div>
            <div className='calculator-5'>
                <button className='calc-button' onClick={changeNumber} value='5'>5</button>
            </div>
            <div className='calculator-6'>
                <button className='calc-button' onClick={changeNumber} value='6'>6</button>
            </div>
            <div className='calculator-multiply'>
                <button className='calc-button' onClick={changeNumber} value='X'>X</button>
            </div>
            <div className='calculator-1'>
                <button className='calc-button' onClick={changeNumber} value='1'>1</button>
            </div>
            <div className='calculator-2'>
                <button className='calc-button' onClick={changeNumber} value='2'>2</button>
            </div>
            <div className='calculator-3'>
                <button className='calc-button' onClick={changeNumber} value='3'>3</button>
            </div>
            <div className='calculator-minus'>
                <button className='calc-button' onClick={changeNumber} value='-'>-</button>
            </div>
            <div className='calculator-0'>
                <button className='calc-button' onClick={changeNumber} value='0'>0</button>
            </div>
            <div className='calculator-dot'>
                <button className='calc-button' onClick={changeNumber} value='C'>C</button>
            </div>
            <div className='calculator-plus'>
                <button className='calc-button' onClick={changeNumber} value='+'>+</button>
            </div>
            <div className='calculator-equals'>
                <button className='calc-button' onClick={changeNumber} value='='>=</button>
            </div>
        </div>
    );
}

export default CalculatorBox;