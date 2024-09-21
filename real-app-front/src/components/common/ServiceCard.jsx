import PropTypes from 'prop-types'
import '../../styles/serviceCard.css'
const ServiceCard = ({ icon, title, description, modalId }) => {
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card text-center">
                    <div className="card-body">
                        <i className={`fs-2 mb-3 ${icon}`}></i>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target={`#${modalId}`}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="modal fade"
                id={modalId} tabIndex="-1"
                aria-labelledby={`${modalId}Label`}
                aria-hidden="true">

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${modalId}Label`}>{title} - Details</h5>

                            <button type="button" className="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button> </div>

                        <div className="modal-body">  {description}  </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

ServiceCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    modalId: PropTypes.string.isRequired,
}; export default ServiceCard
