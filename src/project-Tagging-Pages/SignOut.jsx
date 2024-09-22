import React, { useState } from 'react'
import Modal from '../components/common/Modal'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth.Contexts'
import { toast } from 'react-toastify'
import '../styles/signOut.css'
function SignOut() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const { logout } = useAuth()

    async function handleSignOut() {
        try {
            await logout()
            toast.success('Successfully signed out!')
            navigate('/sign-in')
        } catch (error) {
            toast.error('Failed to sign out!')
        }
    }

    function handleOpenModal() { setShowModal(true) }

    function handleCloseModal() { setShowModal(false) }

    return (
        <div className="container sign-out-container Sign-Sign-Out ">

            <div className="row justify-content-center align-items-center min-vh-100 sign-out-container">
                <div className="col-md-6 text-center">
                    <h1 className="display-4 mb-4 sign-out-container h1">Sign Out</h1>
                    <p className="lead mb-4 sign-out-container p">Are you sure you want to sign out?</p>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={handleOpenModal}>Sign Out</button>

                    <Modal
                        id="signOutModal"
                        title="Sign Out"
                        body="Are you sure you want to sign out?"
                        onClose={handleCloseModal}
                        onConfirm={handleSignOut}
                        showModal={showModal}
                        aria-hidden={!showModal}
                    />

                </div>
            </div>

        </div>
    );
}

export default SignOut
