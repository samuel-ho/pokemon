# Pokemon Finder

Pokemon Finder is a page that displays three starter Pokemon cards and allows users to find random Pokemon by clicking the find button.

## Getting Started

Install the project dependencies by running

### yarn

Once installation is complete, you can run (in the project directory):

### yarn start

Runs the app in development mode.
Open [http://localhost:3000] to view it in the browser.

## Improvements

To get the exact number of different Pokemon that the pokeApi offers, I would find an API that returns property related to the limit or count of total Pokemon. 
I would capitalize the name of the name property. 
In addition, I would place the rendering/displaying of Pokemon cards in a Page component. 
For error handling, I would handle the event that a Pokemon does not have a front default image and render a default pic in place of it. I would also try catch blocks for async calls as well. 

## Stretch Features

Create a new component called 'Stats', that is below the header and above the Pokemon cards.
a. One h3 element at the top with the text 'Stats'
b. Four p tags showing:
c. 'Total Base Exp: {number}'
d. 'Highest Base Exp: {Pokemon name}, {number}'
e. 'Heaviest: {Pokemon name}, {number}'
f. 'Tallest: {Pokemon name}, {number}'

