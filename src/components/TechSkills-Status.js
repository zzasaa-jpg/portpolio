import React from 'react'

function TechSkillsStatus() {
  return (
    <div>
      <section className=' flex  items-center flex-col p-4 '>
        <h1 className='text-[30px] underline'>Tech-Skills & Status</h1>
        <p className='text-[12px] mr-20 my-2'>Status calculation in percentage (%).</p>
        <div className=' flex bg-[#00000068] w-[310px] p-2 rounded-[10px] gap-3'>
          <ul className=''>
            <li className='h-7'>HTML5</li>
            <li className='h-7'>CSS3</li>
            <li className='h-7'>Java Script</li>
            <li className='h-7'>React</li>
            <li className='h-7'>Tailwindcss</li>
            <li className='h-7'>Python</li>
            <li className='h-7'>Java</li>
            <li className='h-7'>Git & GitHub</li>
            <li className='h-7'>Linux</li>

          </ul>
          <ul>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
            <li className='h-7'>-----------------&gt;</li>
          </ul>

          <ul>
            <li className='h-7'>100/90</li>
            <li className='h-7'>100/90</li>
            <li className='h-7'>100/60</li>
            <li className='h-7'>100/40</li>
            <li className='h-7'>100/50</li>
            <li className='h-7'>100/80</li>
            <li className='h-7'>100/10</li>
            <li className='h-7'>100/70</li>
            <li className='h-7'>100/60</li>
          </ul>
        </div>
        <p className='mt-2'>Learning all these languages and technologies continues.</p>
      </section>

    </div>
  )
}

export default TechSkillsStatus;