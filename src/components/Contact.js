import React from 'react'

function Contact() {
  return (
    <div>
      <footer className=' flex items-center flex-col p-4 '>
        <h1 className=' text-[30px] underline'>Contact Us</h1>
        <div className=' flex items-center gap-2 text-[20px] mb-2'>
          <h1 className=' flex items-center gap-2'>Email <ion-icon name="mail-outline"></ion-icon></h1>
          <h1>zzsdrt354@gmail.com</h1>
        </div>
        <div className=' flex items-center gap-2 text-[20px]'>
          <h1 className=''><ion-icon name="logo-linkedin"></ion-icon></h1>

          <a className='flex items-center gap-5' href='https://www.linkedin.com/in/mahendra-kumar-44627a243/'>Linkedin
          </a>

        </div>

      </footer>
    </div>
  )
}

export default Contact