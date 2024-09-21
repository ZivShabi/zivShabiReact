

import { useAllCards } from '../contexts/AllCards.Contexts'
import CardStructureHome from '../components/common/CardStructureHome'

function Cards() {
    const { cards, currentPage, setCurrentPage, pageNumbers, cardsPerPage } = useAllCards()

    // חישוב הכרטיסים להציג בעמוד הנוכחי
    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

    function paginate(pageNumber) { setCurrentPage(pageNumber) }

    return (
        <div className='container-Cards'>
            <h1>Cardssss</h1>
            <div className='cards-grid'>
                {currentCards.map((card) => (
                    <CardStructureHome
                        key={card._id}
                        title={card.title}
                        description={card.description}
                        email={card.email}
                        web={card.web}
                        imageSrc={card.image.url}
                        alt={card.image.alt}
                        openingText={card.subtitle}
                        phone={card.phone}
                        address={`
                        ${card.address.street}
                         ${card.address.houseNumber}, 
                         ${card.address.city}, 
                         ${card.address.country}`
                        }
                    />
                ))}
            </div>
            <div className="pagination">
                {pageNumbers.map(pageNumber => (
                    <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={pageNumber === currentPage ? 'active' : ''}>
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    )
}



function BizCardHome() {

    return (<Cards />)
}
export default BizCardHome
