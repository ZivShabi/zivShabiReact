import DisplaysStructureSection from '../components/common/DisplaysStructureSection'
import useSectionsData from '../hooks/useSectionsData'
import '../styles/aboutPage.css'
function AboutPage() {
    return (
        <div className="container my-5 container-About-Page about-Page-Title p">
            {useSectionsData.map((section) => (
                <DisplaysStructureSection
                    key={section.id} {...section} />
            ))}
        </div>
    )
}

export default AboutPage