
import React, { useEffect } from 'react'
import { useLike } from '../contexts/Like.Context'
import { useCard } from '../contexts/Card.Context'
import Spinner from '../components/common/Spinner'
import CardStructureHome from '../components/common/CardStructureHome'
import { useNavigate } from 'react-router-dom'
import '../styles/myCardsBiz.css'



function MyCardsBiz() {
    const { cards, handleLike, error } = useLike()
    const { selectCard, deleteSelectedCard } = useCard()
    const navigate = useNavigate()
    const unlikedCards = cards.filter(card => !card.liked)

    if (error) return <div className='container-My-Cards'><p>{error}</p></div>
    if (cards.length === 0) return <div className='container-My-Cards'><Spinner /></div>

    const handleCardClick = (card) => {
        selectCard(card)
        navigate(`/card-detail/${card._id}`)
    }

    const handleDeleteCard = async (card) => {
        await deleteSelectedCard(card); navigate('/my-cards')
    }

    return (
        <div className='container-My-Cards My-Cards'>
            <h2>My Cards</h2>
            <div>
                {unlikedCards.length > 0 ? (
                    unlikedCards.map((card) => (
                        <React.Fragment key={card._id}>
                            <div className='cards-grid'>
                                <CardStructureHome
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
                                    ${card.address.country}`}
                                    onClick={() => handleCardClick(card)}
                                />
                            </div>
                            <div className="buttonDelete">
                                <i
                                    onClick={() => handleLike(card._id)}
                                    className={`bi bi-heart${card.liked ? '-fill' : ''}`}
                                    style={{
                                        color: card.liked ? 'red' : 'gray',
                                        cursor: 'pointer', fontSize: '24px'
                                    }}
                                    aria-label={card.liked ? 'Unlike' : 'Like'}
                                ></i>
                            </div>
                            <div className="iconLike">
                                <button
                                    onClick={() => handleDeleteCard(card)}
                                    className="btn btn-danger"
                                >
                                    Delete Card
                                </button>
                            </div>
                        </React.Fragment>
                    ))
                ) : (<p>No cards available</p>)}
            </div>
        </div>
    )
}

export default MyCardsBiz
