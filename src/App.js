import React from 'react'
import logo from './logo.jpg'
import TechSkillsStatus from './components/TechSkills-Status'
import Learningstatus from './components/Learning-status'
import Contact from './components/Contact'
import './App.css';
import { useState, useEffect } from 'react'
import logo2 from './logo2.png'

function App() {
  // State to manage the current theme
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to update the class of the body element based on the current theme
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='  min-h-screen font-rale-sans text-white'>
      <header className='bg-[#000000a9] p-2'>
        <nav className=''>
          <ul className=' flex justify-between items-center'>
            <li>
              <img src={logo2} alt='logo' width={40} className=' rounded-[5px]' />
            </li>
            <li>
              <button onClick={toggleTheme} className=' text-[25px] flex items-center'>{theme === 'light' ? <ion-icon name="moon-outline"></ion-icon> : <ion-icon name="sunny-outline"></ion-icon>} </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className=' flex justify-center items-center flex-col p-4 lg:h-[50vh]' >
        <img src={logo} alt='logo' width={100} className=' h-[100px] object-cover rounded-full' />
        <h1 className='text-justify text-[20px]' >I am MahendraKuamar, learning the front-end devlopment.</h1>
        <p className=' text-[15px] mt-5'>
          Coding is not easy, just do it...
        </p>
      </section>

      {/* -----------section end--------------- */}
      <div className='bg-[#0000008f] w-full h-1'></div>

      <TechSkillsStatus />

      {/* -----------TechSkillsStatus end--------------- */}
      <div className='bg-[#0000008f] w-full h-1'></div>

      <Learningstatus />

      {/* -----------Learningstatus end--------------- */}
      <div className='bg-[#0000008f] w-full h-1'></div>

      <Contact />

    </div>

  );
}

export default App