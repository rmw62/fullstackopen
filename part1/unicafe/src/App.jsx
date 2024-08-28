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

const Statistics = (props) => {
  console.log('Statistics props: ', props)
  const {rating, ratingCount} = props
  return (
    <div>
      {rating} {ratingCount}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log('good ', updatedGood)
    const updatedAll = all + 1
    setAll(updatedAll)
    console.log('all ', updatedAll)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log('neutral ', updatedNeutral)
    const updatedAll = all + 1
    setAll(updatedAll)
    console.log('all ', updatedAll)
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log('bad ', updatedBad)
    const updatedAll = all + 1
    setAll(updatedAll)
    console.log('all ', updatedAll)
  }

  return (
    <div>
      <h1>UniCafe Feedback :)</h1>
      <Title text="Give Feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Title text="Statistics"/>
      <Statistics rating="good" ratingCount={good} />
      <Statistics rating="neutral" ratingCount={neutral} />
      <Statistics rating="bad" ratingCount={bad} />
      <Statistics rating="all" ratingCount={all} />
    </div>
  )
}

export default App