

import React, { createContext, useState, useContext, useCallback } from 'react'
import axios from 'axios'

const CardContext = createContext()

export const CardProvider = ({ children }) => {
    const [selectedCard, setSelectedCard] = useState(null)
    const [cards, setCards] = useState([])
    const [token, setToken] = useState(() => localStorage.getItem('token'))

    function selectCard(card) {
        setSelectedCard(card)
    };
    const deleteSelectedCard = useCallback(async (card) => {
        const token = localStorage.getItem('authToken')

        if (!card || !token) {
            console.error('No card selected or no token available')
            return
        }

        try {
            await axios.delete(
                `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${card._id}`,
                {
                    headers: { 'x-auth-token': token },
                    data: { bizNumber: card.bizNumber },
                }
            )
        } catch (error) {
            console.error('Error deleting card:', error)
        }
    }, [])


    return (
        <CardContext.Provider value={{ cards, selectedCard, selectCard, deleteSelectedCard }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => useContext(CardContext)


