import './App.css';
import Sections from './components/Sections';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profilepicture from './assets/picture.jpg';

function App() {

  return (
    <>
      <div className='grid grid-flow-col grid-cols-5 mb-5'>
        <div className='col-span-3'>
          <h1 className='leading-none font-bold text-3xl text-gray-50 '>Frederik Kristensen</h1>
          <h2 className='leading-none ml-6 font-semibold text-lg text-cyan-400'>Web developer</h2>
          <div className=' mt-5 ml-5 mb-4 space-y-3'>
            <h3 className='flex items-center gap-1.5'>
              <MdEmail className='text-2xl'/>
              <span className='font-bold'>Email: </span>frede4947@gmail.com
            </h3>
            <h3 className='flex items-center gap-1.5'>
              <FaGithub className='text-2xl'/>
              <span className='font-bold'>Github:</span>
              <a className='text-blue-300 underline underline-offset-2 hover:text-sky-500' href='https://github.com/FrederikKristensen'>Github.com/FrederikKristensen</a>
            </h3>
            <h3 className='flex items-center gap-1.5'>
              <FaLinkedin className='text-2xl'/>
              <span className='font-bold'>Linkedin: </span>
              <a className='text-blue-300 underline underline-offset-2 hover:text-sky-500' href='https://www.linkedin.com/in/frederik-kristensen-94a689198/'>Linkedin.com/in/frederik-kristensen</a>
            </h3>
        </div>
        </div>
        <div className='col-span-2'>
          <img src={profilepicture} alt='Picture of me' className='size-60 object-cover rounded-full' />
        </div>
      </div>
      <Sections />
    </>
  )
}

export default App
