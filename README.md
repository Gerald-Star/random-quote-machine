This is a random quote machine project as part of freecodecamp frontend library certification.

Build a Random Quote Machine
Objective: Build an app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/qRZeGZ.

https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine


Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. 

function App() { //1. How to set a useState in React
  const [quote, setQuote] = useState("I have enjoyed with the right people")
  const [author, setAuthor] = useState("Chima")
  const [randomNumber, setRandomNumber] = useState(0)

    2.
  when you set a useState with const.
  set const value as an arrow function. The set the setState on the arrow function curly braces () => { setState herewith} 

  Example
   const generateRandomNumber = () => {
    setRandomNumber(Math.random())
  }

  const changeQuoteAndAuthor0 = () => {
    setQuote("Life is not hard with love."); 
    setAuthor("Genesis")
  }

  4. Return/render the const name as the onClick arroe function name. onclick= {()=>changeQuoteAndAuthor0()}

  return (
    <div className="App">
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={()=>setRandomNumber(Math.random())}>
        Generate Random Number
      </button>

       <button onClick={()=> changeQuoteAndAuthor0()}>
        Change Quote
        </button>