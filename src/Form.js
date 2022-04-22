import React, {useState} from 'react'
import Values from 'values.js'


const Form = ({informedColor, setInformedColor, setDisplayedColors}) => {
    const [error, setError] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            setDisplayedColors(new Values(informedColor).all(14))
            setError(false)
        } catch (error) {            
            setError(true)
            alert('Invalid Color!')
        }        
    }
    
    return (        
        <form onSubmit={handleSubmit} className='form'>
            <input                
                className={`${error && 'error'}`}
                type="text"
                name='informed-color'
                id='informed-color'
                value={informedColor}
                onChange={(event) => setInformedColor(event.target.value)}
            />
            <button type='submit'>Generate</button>
        </form>
    )
}

export default Form