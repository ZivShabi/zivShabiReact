

import { useCard } from '../contexts/Card.Context'

function CardDetail() {
    const { selectedCard, deleteSelectedCard } = useCard()

    if (!selectedCard) return null

    return (
        <div className='container'>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.description}</p>
            <p><strong>Email:</strong> {selectedCard.email}</p>
            <p><strong>Website:</strong> {selectedCard.web}</p>
            <p><strong>Phone:</strong> {selectedCard.phone}</p>
            <p><strong>Address:</strong> {`
                ${selectedCard.address.street} 
                ${selectedCard.address.houseNumber}, 
                ${selectedCard.address.city}, 
                ${selectedCard.address.country}
            `}</p>
            <button onClick={deleteSelectedCard} className="btn btn-danger">Delete Card</button>
        </div>
    )
}
export default CardDetail
