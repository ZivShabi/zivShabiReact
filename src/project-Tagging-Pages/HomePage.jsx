import DisplaysStructureSection from '../components/common/DisplaysStructureSection'
import '../styles/homePeage.css'
import useHomePageSections from '../hooks/useHomePageData'
function HomePage() {


    return (

        <div className="container-Home-Page">

            <div className="home-Page page-Cover-Title ">
                {useHomePageSections.map((section) => (
                    <DisplaysStructureSection key={section.id} {...section} />
                ))}
            </div>
        </div>
    )
}

export default HomePage


