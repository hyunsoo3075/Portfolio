
import "./portfolio.scss"
import {projects} from "./projects.jsx"
export default function Portfolio() {
    return (
        <div className ="portfolio" id = "portfolio">
            <h1>Projects</h1>
            <div className="container">
               {projects.map((project) => (
                   <a href = {project.visit} className = "grid">
                       <span id = "title">
                            {project.title}
                       </span>
                       <br/>
                       <div className = "image">
                            <img alt ="" src = {project.image}/>
                       </div>
                       <br/>
                       <div className="wrapper">
                            <span id = "description">
                                    {project.description}
                            </span>
                       </div>
                       <span id = "tags">
                            Tools: {project.tags}
                       </span>
                       
                       
                    </a>

               ))

               }

            </div>
           
        </div>
    )
}
