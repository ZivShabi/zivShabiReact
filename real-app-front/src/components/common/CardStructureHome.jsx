import { FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import '../../styles/cardStructureHome.css'
function CardStructureHome({ title, imageSrc, openingText, phone, address }) {
    return (
        <div className="business-card">
            <div>
                <img src={imageSrc} alt={title} className="business-card-image" />
            </div>
            <div className="business-card-content">
                <h2 className="business-card-title">{title}</h2>
                <p className="business-card-opening-text">{openingText}</p>
                <div className="business-card-contact">
                    <a href={`tel:${phone}`} className="business-card-phone">
                        <FaPhone /> {phone}
                    </a>
                    <a
                        href={`https://maps.google.com/?q=${address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="business-card-address" >
                        <FaMapMarkerAlt /> {address}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardStructureHome
