import React, {useState, useEffect} from 'react'

const Color = ({rgb, index, hex}) => {
    const [alert, setAlert] = useState(false)
    const copyToClipboard = () => {
        setAlert(true)
        navigator.clipboard.writeText(`#${hex}`)
    }

    useEffect(() => {
        const timer = setTimeout(() => setAlert(false), 2000)
        return () => clearTimeout(timer)
    }, [alert])

    return (      
        <article
            className={`color ${index > 6 && 'white-text'}`}
            style={{backgroundColor: `rgb(${rgb.join(',')})`}}
            onClick={copyToClipboard}
        >            
            <p className='hex-code'>{`#${hex}`}</p>
            {alert && 
            <p className='alert'>Copied to Clipboard</p>}
        </article>    
    )
}

export default Color