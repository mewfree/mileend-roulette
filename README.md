# Mile End Roulette

The Mile End Roulette is to be used when you don't know where to eat in the Mile End and you'd rather let fate (well, mathematics actually) decide for you!

http://www.mileendroulette.com

## Public API access (for developers):

API endpoint: http://www.mileendroulette.com

- `/[state]/list`: lists all establishments
- `/[state]/random`: randomly selects one establishment

The three available states are:

- hungry: for restaurants
- thirsty: for bars
- both: for bars where you can eat / restaurants where you can have alcoholic drinks

Example:

http://www.mileendroulette.com/hungry/list will list all restaurants
http://www.mileendroulette.com/thirsty/random will randomly select a bar

The result is in the JSON format:

Example:

> {"name":"Comptoir 21","address":"21 Saint-Viateur O"}
