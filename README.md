# A-Random-Quote-Generator-Cowboy-Bebop-

Sean Flood
Nov 19 2021
Unit 1 Project-Team Treehouse Full Stack Javascript tech degree.



EXTRA CREDIT ATTEMPT.



This page displays random quotes from the show "Cowboy Bebop", in 5 second intervals, while changing the background of the page to a random color. 

1. Array of quote objects is created named "quotes"
2. Function getRandomQuote() uses for-loop and math.random method to return a random quote from the quotes array.
3. Function changeBackgroundColor assigns a random number to each rgb value and updates DOM with values.
4. Function printQuote calls getRandomQuote function internally and updates the DOM using interpolation and object values.
5. Function changeQuote uses setInterval() method passing printQuote function and 5000 as the interval number.
6. addEventListener is added "on click" to button quote box for manual quote change on users click. 
