import TimelineItem from './TimelineItem'
import SectionHeading from './SectionHeading'

function ExperienceSection(){
    return (
        <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title = "Experience" subtitle = "Where I have learned." />
                    <ol className="mt-8 space-y-8 border-l border-stone-200">
                        <TimelineItem
                            period = "2019 – 2021"
                            title = "Senior High School, STEM Strand"
                            place = "Saint Cecilia's College"
                            description = "Created my own Arduino fire suppressant and got hooked."
                        />
                        <TimelineItem
                            period = "2022 – Present"
                            title = "BS Information Technology"
                            place = "Cebu Institute of Technology – University"
                            description = "Taking up web development, databases, and systems analysis."
                        />
                        <TimelineItem
                            period = "2024 - Present"
                            title = "Developing apps"
                            place = "From Home"
                            description = "Set up machines and testing AI models other people trained."
                        />
                    </ol>
        </section>
    )
}

export default ExperienceSection