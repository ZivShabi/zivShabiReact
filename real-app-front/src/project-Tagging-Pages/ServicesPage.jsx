import ServiceCard from "../components/common/ServiceCard"
import { useServiceCards } from "../hooks/useServiceCards"
import DisplaysStructureSection from '../components/common/DisplaysStructureSection'
function ServicesPage() {
    const serviceCards = useServiceCards()

    return (
        <div className="container my-6 container-Services-Page">
            <div className="row text-center mb-4 page-Services-Cover-Title">
                <DisplaysStructureSection
                    sectionTitle="Our Services"
                    sectionText="Explore the range of services we offer to help you achieve your goals."
                />
            </div>

            <div className="row mb-5">
                {serviceCards.map(card => (
                    <ServiceCard
                        key={card.modalId}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        modalId={card.modalId}
                    />))}
            </div>
        </div>
    )
}

export default ServicesPage
