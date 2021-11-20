/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat




/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "They say hunger is the best spice.",
    source: "Spike Spiegel", 
    citation: "The Real Folk Blues, Part II", 
    timeStamp: '10:25',
    year: 1997
  }, 
  {
    quote: "Whatever happens, happens.",
    source: "Spike Spiegel", 
    citation: "Wild Horses", 
    timeStamp: '22:00',
    

  }, 
  {
    quote:  "I'm not going there to die. I'm going to find out if I'm really alive."
    ,
    source: "Spike Spiegel", 
    citation: "The Real Folk Blues, Part II", 
    timeStamp: '10:25',
    year: 1997
  }, 
  {
    quote: "Don't you want to hang out and waste your life with us?"
    ,
    source: "Spike Spiegel", 
    citation: "Knockin On Heaven's Door", 
    timeStamp: '10:25',
    
  }, 
  {
    quote: "Angels banished from heaven have no choice but to become devils."
    ,
    source: "Vicious", 
    citation: "Ballad Of Fallen Angels ", 
    timeStamp: '15:20',
    year: 1997
  }, 
  {
    quote: "When we show fear, it jumps at us faster than light. But, if we do not show fear, it casts its eye upon us gently and then guides us into infinity."
    ,
    source: "Laughing Bull", 
    citation: "The Real Folk Blues, Part II", 
    timeStamp: '10:25',
    
  }, 
  {
    quote: "You know the first rule of combat? Shoot them before they shoot you." 
    ,
    source: "Faye Valentine", 
    citation: "Honky Tonk Women", 
    timeStamp: '2:30',
    year: 1997
  }, 
  {
    quote: "Men always seem to think about their past before they die, as though they were frantically searching for proof that they truly lived.",
    source: "Jet Black", 
    citation: "The Real Folk Blues, Part II", 
    timeStamp: '10:25',
    
  }, 
  {
    quote: "Why don’t we drink to me and my reflection in your lovely eyes?"
    ,
    source: "Andy Von De Oniyate", 
    citation: "The Real Folk Blues, Part II", 
    timeStamp: '15:23',
    year: 1997
  }, 
  {
    quote: "Where are you? Are you here Mr. spooky space creature?",
    source: "Radical Edward", 
    citation: "Toys In The Attic", 
    timeStamp: '18:15',
    
  }, 
  {
    quote: "High socks are coo-ool. Gotta wear 'em outside!", 
    source: "Radical Edward",  
    citation: "Mushroom Samba", 
    timeStamp: '5:30',
    year: 1997
  }, 
  {
    quote: "I think I know. I don't think I know. I don't think I think I know. I don't think I think.",
    source: "Radical Edward", 
    citation: "Brain Scratch", 
    timeStamp: '12:32', 
   
  }, 
  {
    quote: "Woof",
    source: "Ein",  
    citation: "Stray Dog Strut", 
    timeStamp: '4:34', 
    year: 1997
  }, 
];



/***
 * `getRandomQuote` function
***/  
function getRandomQuote(){
  for (let i = 0; i < quotes.length; i++){
      let thing = Math.floor(Math.random() * quotes.length) + i;
      return quotes[thing]; 
  }
}; 



function changeBackColor(){
  let firstColorNum = Math.floor(Math.random() * 256);
  let secondColorNum = Math.floor(Math.random() * 256);
  let thirdColorNum = Math.floor(Math.random() * 256);
  let backColor = `rgb(${firstColorNum},${secondColorNum},${thirdColorNum})`;
  console.log(backColor);
  document.body.style.background = backColor;}





/***
 * `printQuote` function
***/

function printQuote(){
  changeBackColor();
  let randomQuote = getRandomQuote();
  let markUp = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;
  if (randomQuote.citation){
    markUp += `<span class="citation">${randomQuote.citation}</span>`; 
    if (randomQuote.year){
      markUp += `<span class="year">${randomQuote.year}</span>`
    }
  }markUp += `<span class="year">${randomQuote.timeStamp}</span>`

  markUp += `</p>`; 
  return document.getElementById('quote-box').innerHTML = markUp;

}; 

function changeQuote(){
  return setInterval(printQuote,5000); 
};


changeQuote();
 





//Create function that changes background color 






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);







//Take out some here and there parts for project rules
//Write Comments
//Try adding pictures