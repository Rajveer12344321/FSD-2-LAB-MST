# Post Box with Character Counter

React (useState) lab experiment: controlled textarea, live character counter,
"Limit exceeded" validation, and conditional Post button.

## Run
1. Install Node.js (v18 or later)
2. In this folder run:

    npm install
    npm run dev

3. Open the URL shown in the terminal (usually http://localhost:5173)

## Test cases
1. Empty -> 0 / 100, button disabled
2. Only spaces -> button disabled
3. 45 chars -> 45 / 100, button enabled
4. 100 chars -> 100 / 100, no error, button enabled
5. 101 chars -> 101 / 100, red "Limit exceeded", button disabled
6. Type then delete all -> 0 / 100, button disabled
