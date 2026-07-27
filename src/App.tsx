import './App.css';
import Sections from './components/Sections';

function App() {

  return (
    <>
      <h1 className='font-bold text-3xl text-gray-50 '>Frederik Kristensen</h1>
      <h2 className='font-semibold text-lg text-cyan-400'>Web developer</h2>
      <h3 className='text-gray-50'>
        <span className='font-bold'>Email: </span>frede4947@gmail.com
      </h3>
      <h3 className='text-gray-50'>
        <span className='font-bold'>Github: </span>
        <a className='text-blue-300 underline underline-offset-2 hover:text-sky-500' href='https://github.com/FrederikKristensen'>Github.com/FrederikKristensen</a>
      </h3>
      <h3 className='text-gray-50'>
        <span className='font-bold'>Linkedin: </span>
        <a className='text-blue-300 underline underline-offset-2 hover:text-sky-500' href='https://www.linkedin.com/in/frederik-kristensen-94a689198/'>Linkedin.com/in/frederik-kristensen</a>
      </h3>
      <Sections />
    </>
  )
}

export default App
