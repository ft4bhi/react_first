import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numberAllow, setNumberAllow] = useState(false);
  const [password, setpassword] = useState('');
  const passwordRef = useRef(null);
  
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "1234567890"
    if (charAllow) str += "!@#$%^&*+"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberAllow, charAllow]);
  
  useEffect(() => {
    generatePassword()
  }, [length, numberAllow, charAllow]);
  
  const copyToClipbord = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>

      <h1 className=' text-white text-center my-3'>
        Password Generater
      </h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>

        <input
          type="text"
          value={password}
          className=' outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipbord}
          className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>

      <div
      className=' flex text-sm gap-x-2'
      >
        <div className=' flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            className=' cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="" />
          <label htmlFor="length">length: {length}</label>
        </div>

         <div className=' flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            onChange={() => {
              setNumberAllow((prev) => !prev)}
            }
            name=""
            id="" />
          <label htmlFor="number">Numbers</label>
          
        </div>
        <div className=' flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev)}
            }
            name=""
            id="" />
          <label htmlFor="char">Character</label>
          
        </div>

      </div>

    </div>
  )
}

export default App
