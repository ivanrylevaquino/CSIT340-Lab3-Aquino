import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection(){
    return(
        <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title = "Projects" subtitle = "Things I have built." />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <ProjectCard
                    year = "2026"
                    title = "About Me in React"
                    description = "My first React project, rebuilt from a plain HTML page."
                    tech = "React · Tailwind CSS"
                    link= "https://github.com/ivanrylevaquino/CSIT340-Lab1-Aquino"
                />

                <ProjectCard
                    year = "2026"
                    title = "WildMeow"
                    description = "A Django-based enrollment management system for CIT-U."
                    tech = "Django · Python · HTML · CSS" 
                    link= "https://github.com/Cybolio/WildMeow"
                />

                <ProjectCard
                    year = "2026"
                    title = "Jeepseek"
                    description = "A web-based jeepney route/navigation application."
                    tech = "React · HTML · CSS · MySQL · Springboot"
                    link= "https://github.com/Cybolio/JeepSeek-mariadb"
                />

                <ProjectCard
                    year = "2025"
                    title = "Click2Eat"
                    description = "A web-based food ordering system built around a MySQL database."
                    tech = "PHP · HTML · CSS · MySQL"
                    link= "https://github.com/Cybolio/Click2Eat"
                />
            </div>
        </section>
    )
}

export default ProjectsSection