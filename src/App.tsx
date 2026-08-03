import './App.css';
import Sections from './components/Sections';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaRegCopy } from 'react-icons/fa';
import profilepicture from './assets/picture.jpg';
import { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('frede4947@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <main className='max-w-7xl mx-auto'>
      <div className='grid grid-flow-col grid-cols-5 mb-5 mt-18'>
        <div className='col-span-3 mt-8'>
          <h1 className='leading-none font-bold text-7xl text-gray-50'>Frederik Kristensen</h1>
          <h2 className='leading-none ml-6 font-semibold text-3xl text-cyan-400'>Web developer</h2>
          <div className='mt-9 ml-5 mb-4 space-y-6'>
            <h3 className='flex items-center gap-1.5'>
              <MdEmail className='text-4xl'/>
              <span className='text-2xl font-bold'>Email: </span>
              <button className='text-2xl inline-flex gap-0.5' onClick={copyEmail}>
                frede4947@gmail.com<FaRegCopy className='text-base' />
              </button>
              <div className='text-xs'>
                {copied ? "Copied!" : ""}
              </div>
            </h3>
            <h3 className='flex items-center gap-1.5'>
              <FaGithub className='text-4xl'/>
              <span className='text-2xl font-bold'>Github:</span>
              <a className='text-2xl text-blue-300 underline underline-offset-2 hover:text-sky-500' href='https://github.com/FrederikKristensen'>Github.com/FrederikKristensen</a>
            </h3>
            <h3 className='flex items-center gap-1.5'>
              <FaLinkedin className='text-4xl'/>
              <span className='text-2xl font-bold'>Linkedin: </span>
              <a className='text-2xl text-blue-300 underline underline-offset-2 hover:text-sky-500' href='https://www.linkedin.com/in/frederik-kristensen-94a689198/'>Linkedin.com/in/frederik-kristensen</a>
            </h3>
        </div>
        </div>
        <div className='col-span-2'>
          <img src={profilepicture} alt='Picture of me' className='size-90 object-cover rounded-full' />
        </div>
      </div>
      <Sections />
    </main>
  )
}

export default App
