import React, {useState} from 'react';

function App() {
  const [value, setValue] = useState('');
  const operator = ['/','*','+','-','.']
  const handleNumberInput = e=>{
    if(
      (operator.includes(e.target.value) && value === '') ||
      (operator.includes(e.target.value) && operator.includes(value.slice(0.-1)))
    ){
      return;
    }
    setValue(value + e.target.value)
  }
  const handleAC = e => {setValue('')}
  const handleDE = e => {setValue(value.slice(0,-1))}
  const handleCalculate = (e) => {
    setValue(eval(value).toString());
  }

  return (
    <div className="container w-full h-screen flex items-center justify-center bg-slate-950">
      <div className='calulator p-[20px] rounded-md bg-slate-500 '>
        <form>
          <div>
          <input className='m-1 p-1' type='text' value={value}></input>
          </div>
          <div>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='AC' onClick={handleAC}>AC</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='DE' onClick={handleDE}>DE</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='.' onClick={handleNumberInput}>.</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='/' onClick={handleNumberInput}>/</button>
          </div>
          <div>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='7' onClick={handleNumberInput}>7</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='8' onClick={handleNumberInput}>8</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='9' onClick={handleNumberInput}>9</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='*' onClick={handleNumberInput}>*</button>
          </div>
          <div>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='4' onClick={handleNumberInput}>4</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='5' onClick={handleNumberInput}>5</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='6' onClick={handleNumberInput}>6</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='+' onClick={handleNumberInput}>+</button>
          </div>
          <div>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='1' onClick={handleNumberInput}>1</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='2' onClick={handleNumberInput}>2</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='3' onClick={handleNumberInput}>3</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='-' onClick={handleNumberInput}>-</button>
          </div>
          <div>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='00' onClick={handleNumberInput}>00</button>
          <button className='p-2 border-2 rounded-md m-1 w-10 hover:bg-slate-900 hover:text-white' type='button' value='0' onClick={handleNumberInput}>0</button>
          <button className='p-2 border-2 rounded-md m-1 w-[5.5rem] hover:bg-slate-900 hover:text-white' type='button' value='=' onClick={handleCalculate}>=</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
