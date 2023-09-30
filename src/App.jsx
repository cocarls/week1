
import { useState } from 'react';
import './App.css'
import quotes from "./db/quotes.json"
import { getRandomElemnt } from './utils/random'
import QuoteCard from './components/QuoteCard';

const bacgrounds = ["bg1","bg2","bg3"]
// "bg2",

function App() {

  const [quote, setQuote] = useState(getRandomElemnt(quotes))
  
  const [currentBg, setCurrentBg] = useState(getRandomElemnt(bacgrounds))    

  const handleChangeQuote = () =>{
    setQuote(getRandomElemnt(quotes))
    setCurrentBg(getRandomElemnt(bacgrounds))
}

  return (
    <main className={`app ${currentBg}`}>
     <QuoteCard quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App
