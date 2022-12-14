import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY from './colorsArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

//fetch url
let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"


//format  useState here on function App
function App() {
  const [quote, setQuote] = useState("I have enjoyed with the right people")
  const [author, setAuthor] = useState("Genesis")
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArr, setquotesArr] = useState(null)
  const [accentColor, setAccentColor] = useState('#282c34')

  //use useEffect arrow function to listen to any changes 
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setquotesArr(parsedJSON.quotes)
    console.log(parsedJSON)
  }


  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  },)

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArr.length * Math.random())
    setRandomNumber(randomInteger)
    setAccentColor(COLORS_ARRAY[randomInteger])
    setQuote(quotesArr[randomInteger].quote)
    setAuthor(quotesArr[randomInteger].author)
 
  }

  //   if (randomInteger === 0) {
  //     setQuote(quotesArr[0].quote)
  //     setAuthor(quotesArr[0].author)

  // } if (randomInteger === 1) {
  //     setQuote(quotesArr[1].quote)
  //     setAuthor(quotesArr[1].author)

  // } if (randomInteger === 2) {
  //   setQuote(quotesArr[2].quote)
  //   setAuthor(quotesArr[2].author)
  // }
  


  //set an array of object lieteral

  // const quotesArr = [
  //   {quote: "Life is not hard with love.",
  //     author: "Genesis"},

  //   {quote: "I love my family.",
  //     author:"Ben" },

  //   {quote: "Avoid betrayals they have nothing to offer.",
  //     author: "Titi"},

  //   {quote: "They never themselves, nothing to offer.",
  //     author: "Burna"},

  //   {quote: "Selfish people has nothing to offer.",
  //     author: "ZinoLesky"},

  //   {quote: "Love is selfless.",
  //     author: "Burna Boy"}
  // ]


  // const changeQuoteAndAuthor0 = () => {
  //   setQuote("Life is not hard with love."); 
  //   setAuthor("Genesis")
  // }

  // const changeQuoteAndAuthor1 = () => {
  //   setQuote("I love my family."); 
  //   setAuthor("Ben")
  // }

  // const changeQuoteAndAuthor2 = () => {
  //   setQuote("Avoid betrayals they have nothing to offer."); 
  //   setAuthor("Titi")
  // }

 
  return (
    <div className="App">
      <header className='App-header' style={{backgroundColor: accentColor}}>
        <div id="quote-box" style={{ color: accentColor}}>
          <h1>Random Quotes: {randomNumber}</h1>
        

          <p id="text"> "{quote}"</p>
          <p id="author"> - {author}</p>
    
        
          <div className='buttons'>

            {/* This makes strings into click to open in twitter URLS */}
            <a id="tweet-quote" style={{backgroundColor: accentColor}} href=
              {encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          
        

            <button id="new-quote" style={{backgroundColor: accentColor}} onClick={()=>getRandomQuote()}>
            Generate Random Quotes</button>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
