import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('yellow');
  const [i, setI] = useState(0); // State to manage the index

  const myarr = [
    'red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'teal', 'brown', 'gray',
    'aqua', 'black', 'blueviolet', 'burlywood', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'crimson', 'cyan',
    'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid',
    'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
    'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow'
  ];

  function twist() {
    if (i < myarr.length) {
      setColor(myarr[i]);
      setI(i + 1); // Update the index
      setTimeout(twist, 200); // Delay the next color change
    }
  }

  function textt() {
    if (i < myarr.length) {
      return myarr[i];
    }
    return ''; // Return empty string when array ends
  }

  return (
    <div className='w-full h-screen duration-200' style={{ background: color }}>
      <h1 className='text-center text-4xl font-bold mt-10'>{textt()}</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
          <button
            onClick={() => setColor('red')}
            className='outline-none outline-black px-4 py-1 rounded-full shadow-lg text-black'
          >
            red
          </button>
          <button
            onClick={() => setColor('green')}
            className='outline-none outline-black px-4 py-1 rounded-full shadow-lg text-black'
          >
            green
          </button>
          <button
            onClick={() => twist()}
            className='outline-none outline-black px-4 py-1 rounded-full shadow-lg text-black'
          >
            turn
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
