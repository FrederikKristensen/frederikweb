import { useState } from "react";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import WorkMethods from "./WorkMethods";

type Section = "aboutMe" | "projects" | "workMethods";

const Sections = () => {
  const [active, setActive] = useState<Section>("aboutMe");

  return (
    <div>
      <nav>
        <button onClick={() => setActive("aboutMe")}>About me</button>
        <button onClick={() => setActive("projects")}>Projects</button>
        <button onClick={() => setActive("workMethods")}>Work methods</button>
      </nav>

      <main>
        {active === "aboutMe" && <Aboutme />}
        {active === "projects" && <Projects />}
        {active === "workMethods" && <WorkMethods />}
      </main>
    </div>
  )
}

export default Sections;