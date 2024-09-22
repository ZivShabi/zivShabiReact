import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AllCardsContext = createContext()

export const AllCardsProvider = ({ children }) => {
    const [cards, setCards] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5])
    const cardsPerPage = 6

    useEffect(() => {
        async function fetchCards() {
            try {
                const res = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards')
                setCards(res.data)
            } catch (error) {
                console.error('Error fetching cards:', error)
            }
        }
        fetchCards()
    }, [])

    useEffect(() => {
        const startPage = Math.max(1, currentPage - 2)
        const endPage = startPage + 4
        setPageNumbers(
            Array.from(
                { length: Math.min(5, Math.ceil(cards.length / cardsPerPage) - startPage + 1) },
                (_, i) => startPage + i
            )
        )
    }, [currentPage, cards])

    return (
        <AllCardsContext.Provider value={{ cards, currentPage, setCurrentPage, pageNumbers, cardsPerPage }}>
            {children}
        </AllCardsContext.Provider>
    )
}

export const useAllCards = () => useContext(AllCardsContext)
