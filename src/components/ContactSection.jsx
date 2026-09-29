import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

function ContactSection(){
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <SectionHeading title = "Contact" subtitle = "Say hi."/>
            <ul className="mt-8 space-y-3">
                <ContactLink
                    label = "Email"
                    href = "ivan.aquino@cit.edu"
                    text = "mailto:ivan.aquino@cit.edu"
                />
                <ContactLink
                    label = "GitHub"
                    href = "https://github.com/ivanrylevaquino"
                    text = "github.com/ivanrylevaquino"
                />
                <ContactLink
                    label = "LinkedIn"
                    href = "https://www.linkedin.com/in/ivan-aquino-431666375/"
                    text = "https://www.linkedin.com/in/ivan-aquino-431666375/"
                />
            </ul>
        </section>
    )
}

export default ContactSection