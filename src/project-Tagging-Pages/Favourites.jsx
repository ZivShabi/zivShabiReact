import React from 'react'

import { useLike } from '../contexts/Like.Context'
import Spinner from '../components/common/Spinner'
import CardStructureHome from '../components/common/CardStructureHome'
import '../styles/favourites.css'



function Favourites({ token, loading }) {
    const { cards, handleLike, error } = useLike()

    if (loading) return <div className='container-My-Cards'><Spinner /></div>
    if (error) return <div className='container-My-Cards'><p>{error}</p></div>

    const favouriteCards = cards.filter(card => card.liked)

    return (
        <div className='container-Favourites Favourites '>
            <h2>Favourites</h2>
            <div>
                {favouriteCards.map((card) => (
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
                            />
                        </div>
                        <i
                            onClick={() => handleLike(card._id, token)}
                            className={`bi bi-heart${card.liked ? '-fill' : ''}`}
                            style={{
                                color: card.liked ?
                                    'red' : 'gray', cursor: 'pointer', fontSize: '24px'
                            }}
                            aria-label={card.liked ? 'Unlike' : 'Like'}
                        ></i>

                    </React.Fragment>
                ))}

            </div>
        </div>
    )
}

export default Favourites
