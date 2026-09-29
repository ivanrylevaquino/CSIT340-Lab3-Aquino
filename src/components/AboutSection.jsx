import SectionHeading from './SectionHeading'
import Fact from './Fact'



function AboutSection(){
    return (
        <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title = "About" subtitle = "A little about who I am." />
            <p>
                I grew up in Minglanilla and Mandaue. We moved from time to time.
                I currently commute to Cebu City daily for college. I am pursuing a career in IT
                because I've had an affinity for computers since I was 3.
                So far, my favorite part is seeing my projects work as conceptualized.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Fact label = "Course" value = "BS Information Technology"/>
                <Fact label = "Year level" value = "Fourth year"/>
                <Fact label = "School" value = "CIT-U"/>
                <Fact label = "Based in" value = "Minglanilla"/>
            </dl>
        </section>
    )
}

export default AboutSection