import { useState } from 'react'

const Title = (props) => {
  console.log('Title props: ', props)
  const {text} = props

  return (
    <h2>{text}</h2>
  )
}

const Button = (props) => { 
  console.log('Button props: ', props)
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    
  }

  return (
    <div>
      <h1>UniCafe Feedback :)</h1>
      <Title text="Give Feedback"/>
      <Button handleClick={handleGoodClick} text="good"/>
      <Title text="Statistics"/>
    </div>
  )
}

export default App