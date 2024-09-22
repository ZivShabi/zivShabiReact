import '../../styles/spinner.css'
import PageHeader from "./PageHeader"
function Spinner() {
    return (
        <>
            <PageHeader title="spinner" description='Loading...' />
            <div className="spinner">
                <div className="loader"></div>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
