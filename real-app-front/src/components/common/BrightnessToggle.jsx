import React, { useState } from 'react'
import '../../styles/brightnessToggle.css'
function BrightnessToggle() {
    const [isBright, setIsBright] = useState(false)

    const toggleBrightness = () => {
        setIsBright(prevState => !prevState);
        document.body.style.filter = !isBright ? 'brightness(50%)' : 'none'
    }

    return (
        <div>
            <button className='brightness-Toggle-Icon' onClick={toggleBrightness}>
                {isBright ?
                    <i className="fa-solid fa-sun"></i> :
                    <i className="fa-solid fa-moon"></i>
                }
            </button>
        </div>
    )
}

export default BrightnessToggle
