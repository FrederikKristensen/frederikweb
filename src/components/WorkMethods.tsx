
const WorkMethods = () => {
  return (
    <div>
      <ul className='grid grid-cols-3 lg:gap-x-12 xl:gap-x-18 gap-y-3 disc'>
        <li className='col-span-3 lg:col-span-1'>Website tools
          <ul className='square'>
            <li>Html</li>
            <li>CSS
              <ul>
                <li>- Tailwind</li>
                <li>- Bootstrap</li>
              </ul>
            </li>
            <li>JavaScript
              <ul>
                <li>- React</li>
                <li>- TypeScript</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className='col-span-3 lg:col-span-1'>Developer Tools
          <ul className='square'>
            <li>Vite</li>
            <li>Prettier</li>
            <li>EsLint</li>
          </ul>
        </li>

        <li className='col-span-3 lg:col-span-1'>Minor Experience
          <ul className='square'>
            <li>Python</li>
            <li>Vue.js</li>
            <li>C#</li>
            <li>HTMX</li>
            <li>PowerShell</li>
            <li>SQL</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default WorkMethods