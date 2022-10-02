# Mile End Roulette

The Mile End Roulette is to be used when you don't know where to eat in Mile End and you'd rather let fate (well, mathematics actually) decide for you!

https://mileend-roulette.vercel.app/

## Public API access (for developers)

API endpoint: https://mileend-roulette.vercel.app/api

- `/[state]`: lists all establishments
- `/[state]/random`: randomly selects one establishment

The three available states are:

- `hungry`: for restaurants
- `thirsty`: for bars
- `both`: for bars where you can eat / restaurants where you can have alcoholic drinks

### Examples

- https://mileend-roulette.vercel.app/api/hungry will list all restaurants
- https://mileend-roulette.vercel.app/api/thirsty/random will randomly select a bar

### Format

The result is in JSON format:

#### Example

> {"name":"Comptoir 21","address":"21 Saint-Viateur O"}
