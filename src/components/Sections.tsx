import { useState } from "react";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import WorkMethods from "./WorkMethods";

type Section = "aboutMe" | "projects" | "workMethods";

const Sections = () => {
  const [active, setActive] = useState<Section>("aboutMe");

  return (
    <div>
      <nav className='text-3xl flex gap-14 justify-center pt-10 pb-2 font-bold text-gray-50 border-b border-gray-300'>
        <button className={`hover:text-cyan-400 ${active === "aboutMe" ? "text-sky-300 underline" : ""}`} onClick={() => setActive("aboutMe")}>About me</button>
        <button className={`hover:text-cyan-400 ${active === "projects" ? "text-sky-300 underline" : ""}`} onClick={() => setActive("projects")}>Projects</button>
        <button className={`hover:text-cyan-400 ${active === "workMethods" ? "text-sky-300 underline" : ""}`} onClick={() => setActive("workMethods")}>Work methods</button>
      </nav>

      <main className='w-fit mx-auto pt-6 text-gray-50'>
        <div>
          {active === "aboutMe" && <Aboutme />}
          {active === "projects" && <Projects />}
          {active === "workMethods" && <WorkMethods />}
        </div>
      </main>
    </div>
  )
}

export default Sections;