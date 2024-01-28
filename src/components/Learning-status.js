import React from 'react'

function Learningstatus() {
  const lanrning_status = [
    {
      id: 1,
      title: "HTML5",
      logo: <ion-icon name="logo-html5"></ion-icon>,
      paragrapha: "I am learning HTML5 from last 2 months. I have learned tags, elements, list, media etc tags.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 2,
      title: "CSS3",
      logo: <ion-icon name="logo-css3"></ion-icon>,
      paragrapha: "I am learning CSS3 from last 2 months. I have learned syntax of css, selectors, properties, display desingning Media-Queries etc.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 3,
      title: "Java Script",
      logo: <ion-icon name="logo-javascript"></ion-icon>,
      paragrapha: "I am learning JavaScript from last 1 months. I have learned JavaScript Variables, Data Types & operators, Conditional Statements, Loops, Arrays, objects, DOM, OOPs etc.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 4,
      title: "React",
      logo: <ion-icon name="logo-react"></ion-icon>,
      paragrapha: "I am learning React from last 1 months. I have learned React ES6, JSX, Components, Class, Props, Events, conditional, forms, router, React Hooks, useState, useEffect  etc.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 5,
      title: "Tailwindcss",
      logo: null,
      paragrapha: "Tailwind CSS allows developers to create custom designs by applying utility classes directly to HTML elements.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 6,
      title: "Python",
      logo: <ion-icon name="logo-python"></ion-icon>,
      paragrapha: "I am learning Python from last 10 months. I have learned Syntax of Python, Variables, Data Types & operators, Conditional Statements, Loops, List, Tuples, Sets, Dictionaries,  Functions, Modules, File Handling etc.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 7,
      title: "Java",
      logo: null,
      paragrapha: "I am learning Java from last 1 month. I have learned Syntax of Java, (JVM, JRE, JDK),  Variables, Data Types & operators, Conditional Statements, Loops, Strings, Arrays, Methods, File Handling etc.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 8,
      title: "Git & GitHub",
      logo: <ion-icon name="logo-github"></ion-icon>,
      paragrapha: "I am learning Git & GitHub from last 1 month. I have learned Git & GitHub difference, Commit, Branch, Pull from GitHub, Push from GitHub, Git .gitignore etc.",
      url: "https://github.com/zzasaa-jpg"
    }
    ,
    {
      id: 9,
      title: "Linux",
      logo: <ion-icon name="logo-tux"></ion-icon>,
      paragrapha: "I am learning Linux from last 4 month. I have learned Linux commands, pwd, ls, mkdir, cd, rm etc.",
      url: "https://github.com/zzasaa-jpg"
    }
  ]
  return (
    <div>
      <section>
        <h1 className=' text-[30px] underline text-center mt-5'>Learning Status</h1>

        <div className=' flex flex-wrap justify-center items-center gap-10 mt-10 mb-10'>
          {lanrning_status.map((item, index) => (

            <div className=' flex bg-[#00000068] w-[310px] p-2 rounded-[10px]  flex-col h-[250px]' key={item.id} >
              <h1 className=' text-[25px] flex items-center gap-2'>{item.title}
                {item.logo}
              </h1>
              <p className='px-2'>{item.paragrapha}</p>
              <h1 className=' text-[20px] underline'>Projects</h1>
              <a className='p-2' href={item.url}> GitHub respositiry</a>
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default Learningstatus;