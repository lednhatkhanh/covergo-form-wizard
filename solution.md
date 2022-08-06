# Solution

## How to run

- Clone this repo
- Run `npm install`
- Run `npm run dev` and navigate to [`http://localhost:3000`](`http://localhost:3000`)

## Architect

- I am more familiar with React/Typescript than Vue so I decided to choose React.
- All folders except for `features` are _shared_ folder
- `features` folder will be used to separate all functions off the applications, it has its own `components`, `hooks`,... sub folders, but in the demo it only has components sub folders.
- I decided to use Xstate for managing the state of the whole application
- This app uses `react-use` for custom hooks, together with `remedy` or `lodash` I can reduce the amount of boilerplate code in the applications.

## Approach

- I decided to use TailwindCSS and followed the mockup
- For multiple steps forms, using statecharts is one of the best solution IMHO, it can help me plan my ideas first and actually make the blueprint before implementing my UI.
