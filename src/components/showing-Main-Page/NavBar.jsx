
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import BrightnessToggle from '../common/BrightnessToggle'
import '../../styles/navBar.css'
import { useAuth } from '../../contexts/auth.Contexts'
import Modal from '../common/Modal'
import { useSearch } from '../../contexts/Search.Contexts'

function NavBar() {
    const { user } = useAuth()
    const { searchQuery, setSearchQuery, filteredCards } = useSearch()
    const [showModal, setShowModal] = useState(false)
    const [showModalSignUp, setShowModalSignUp] = useState(false)

    const handleOpenModalSignUp = () => setShowModalSignUp(true)
    const handleCloseModalSignUp = () => setShowModalSignUp(false)
    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    function handleSearchChange(event) {
        const query = event.target.value;
        setSearchQuery(query);
        if (query && filteredCards.length > 0) {
            handleOpenModal()
        } else {
            handleCloseModal()
        }
    };

    useEffect(() => {
    }, [searchQuery, filteredCards])

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container">
                <Link className="navbar-brand" to="/">My App</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <BrightnessToggle />

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/services'> Services </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/biz-card-home'> b-card </Link>
                        </li>
                        {!user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/sign-in'> Sign In </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={handleOpenModalSignUp}>Sign Up</a>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/Favourites'> Favourites </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/my-Cards'> My Cards </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/create-card-biz'> Add Card </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/sign-out'> Sign Out </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <input
                        type="text"
                        className="form-control ms-3"
                        placeholder="Search Cards"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>


            </div>

            <Modal
                id="signUpModal"
                title="Choose Sign Up Type"
                body={
                    <div className='containerLink'>
                        <Link to="/contact" className="btn btn-dark ms-2">Contact Message</Link>
                        <Link to="/sign-up" className="btn btn-primary">Personal Sign Up</Link>
                        <Link to="/sign-up-biz" className="btn btn-primary">Business Sign Up</Link>
                    </div>
                }
                showModal={showModalSignUp}
                onConfirm={handleCloseModalSignUp}
            />
            <Modal
                id="searchResultsModal"
                title="Search Results"
                body={
                    <div className="search-results">
                        {filteredCards.length > 0 ? (
                            filteredCards.map(card => (
                                <div key={card._id} className="card-item">
                                    <p><strong>Title:</strong> {card.title}</p>
                                    <p><strong>Subtitle:</strong> {card.subtitle}</p>
                                    <p><strong>Description:</strong> {card.description}</p>
                                </div>
                            ))
                        ) : (<p>No cards found</p>
                        )}
                    </div>
                }
                showModal={showModal}
                onClose={handleCloseModal}
                onConfirm={handleCloseModal}
            />
        </nav>
    )
}

export default NavBar
