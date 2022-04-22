import React, {useState} from "react"
import Form from './Form.js'
import Color from './Color.js'
import Values from "values.js"

function App() {
  const [informedColor, setInformedColor] = useState('#0000FF')
  const [displayedColors , setDisplayedColors] = useState(new Values('#0000FF').all(14))
  

  return (
    <main className="app">
      <section className="header">
        <h1>Color Generator</h1>
        <Form
          informedColor={informedColor}
          setInformedColor={setInformedColor}
          setDisplayedColors={setDisplayedColors}
        />
      </section>

      <section className="colors">
        {displayedColors.map((displayedColor, index) => {
            return <Color key={index} {...displayedColor} index={index} hex={displayedColor.hex}/>            
        })}
      </section>
    </main>
  )
}

export default App
