
const Aboutme = () => {
  return (
    <div>
      <ul className='grid grid-cols-2 gap-y-1 disc'>
        <li className='col-span-2 md:col-span-1'>Info
          <ul className='square'>
            <li>From Jyllinge (City near Roskilde)</li>
            <li>I am 28 years old</li>
          </ul>
        </li>

        <li className='col-span-2 md:col-span-1'>Hobbies
          <ul className='square'>
            <li>Videogames</li>
            <li>Gym</li>
            <li>Fan of punk rock and techno music</li>
          </ul>
        </li>

        <li className='col-span-2 md:col-span-1'>Educations
          <ul className='square'>
            <li>Zealand, Roskilde - Academy of Technologies and Business</li>
            <li>HTX, Roskilde - Highschool</li>
          </ul>
        </li>

        <li className='col-span-2 md:col-span-1'>Experience
          <ul className='square'>
            <li>Q8 - Sales assistant</li>
            <li>TP Aerospace - Intern</li>
            <li>Roskilde Kommune - On-call substitute</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Aboutme