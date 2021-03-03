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

### Refactor
To add another layer of reusability, I would create a reusable button by placing a button in its own component (if more buttons were needed on the page) and same with the header. 
To get the exact number of different Pokemon that the pokeApi offers, I would find an API that returns property related to the limit or count of total Pokemon. 
I would capitalize the name of the name property. 
In addition, I would place the rendering/displaying of Pokemon cards in a Page component. 
For error handling, I would handle the event that a Pokemon does not have a front default image and render a default pic in place of it. I would also try catch blocks for async calls as well. 

