import { createContext, useContext, useState, useEffect } from 'react'
import httpService, { setDefaultHeaders, setToken, clearToken } from '../services-With-Server/http_Service'
import { jwtDecode } from 'jwt-decode'

const TOKEN_KEY = 'authToken'
const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    register: () => { },
    createNewBusinessCard: () => { },
    loading: false
})

AuthContext.displayName = 'Auth'

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function initializeUser() {
            setLoading(true)
            const token = localStorage.getItem(TOKEN_KEY)
            if (token) {
                setDefaultHeaders(token)
                try {
                    const decodedToken = jwtDecode(token)
                    setUser(decodedToken)
                } catch (error) {
                    console.error('Failed to decode token', error)
                    logout()
                }
            }
            setLoading(false)
        }
        initializeUser()
    }, [])

    async function login(credentials) {
        setLoading(true)
        try {
            const { data } = await httpService.post('/bcard2/users/login', credentials)
            const token = data
            if (token) {
                setToken(token)
                setDefaultHeaders(token)
                const decodedToken = jwtDecode(token)
                setUser(decodedToken)
            } else {
                console.error('Token is missing in the response')
            }
        } catch (error) {
            console.error('Login failed', error)
            throw error
        } finally { setLoading(false) }
    }

    async function register(userData) {
        setLoading(true)
        try {
            const { data } = await httpService.post('/bcard2/users', userData)
            const token = data.token
            if (token) {
                setToken(token)
                setDefaultHeaders(token)
                const decodedToken = jwtDecode(token)
                setUser(decodedToken)
            }
        } catch (error) {
            console.error('Registration failed', error)
            throw error
        } finally { setLoading(false) }
    }

    async function createNewBusinessCard(cardData) {
        setLoading(true)
        try {
            const { data } = await httpService.post('/bcard2/cards', cardData)
            const token = data.token
            if (token) {
                setToken(token)
                setDefaultHeaders(token)
                const decodedToken = jwtDecode(token)
                setUser(decodedToken)
            }
            else {
                console.log('Card created successfully:', data)
            }
        } catch (error) {
            console.error('Failed to create card:', error.response?.data || error.message)
            throw error
        } finally { setLoading(false) }

    }


    function logout() {
        clearToken()
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                loading,
                createNewBusinessCard,
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
