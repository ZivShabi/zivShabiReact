import { createContext, useContext, useState, useEffect } from 'react'
import { useAllCards } from './AllCards.Contexts'

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const { cards } = useAllCards()
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredCards, setFilteredCards] = useState([])

    useEffect(() => {
        if (searchQuery) {
            const filtered = cards.filter(card =>
                card.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setFilteredCards(filtered)
        } else {
            setFilteredCards([])
        }
    }, [searchQuery, cards])

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredCards }}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = () => useContext(SearchContext)
