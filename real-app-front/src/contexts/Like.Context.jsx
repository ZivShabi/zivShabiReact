
import React, { createContext, useState, useCallback, useContext, useEffect } from 'react'

const LikeContext = createContext()

export const LikeProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [error, setError] = useState(null)
    const token = localStorage.getItem('authToken')

    const fetchCards = useCallback(async () => {
        if (!token) return

        const myHeaders = new Headers()
        myHeaders.append('x-auth-token', token)

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        }

        try {
            const response = await fetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards", requestOptions)
            if (!response.ok) throw new Error('Network my-cards was not ok')
            const result = await response.json()

            const likedCards = JSON.parse(localStorage.getItem('likedCards')) || []
            const updatedCards = result.map(card => ({
                ...card,
                liked: likedCards.includes(card._id),
            }))
            setCards(updatedCards)
        } catch {
            setError('Failed to fetch cards')
        }
    }, [token])


    useEffect(() => { fetchCards() }, [fetchCards])

    const handleLike = useCallback(async (cardId) => {
        if (!token) return

        const myHeaders = new Headers()
        myHeaders.append("x-auth-token", token)

        const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: JSON.stringify({ cardId }),
            redirect: "follow",
        }

        try {
            const response = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardId}`, requestOptions)
            if (!response.ok) throw new Error('Network like cardId was not ok')

            const likedCards = JSON.parse(localStorage.getItem('likedCards')) || []
            const updatedLikedCards = likedCards.includes(cardId)
                ? likedCards.filter(id => id !== cardId)
                : [...likedCards, cardId]

            localStorage.setItem('likedCards', JSON.stringify(updatedLikedCards))

            setCards(prevCards =>
                prevCards.map(card =>
                    card._id === cardId ? { ...card, liked: !card.liked } : card
                )
            )
        } catch {
            setError('Failed to like card')
        }
    }, [token])

    return (
        <LikeContext.Provider value={{ cards, handleLike, error }}>
            {children}
        </LikeContext.Provider>
    )
}

export const useLike = () => useContext(LikeContext)



