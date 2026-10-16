# CS351 Lab 8.2 — Fetch demonstration

This is an extension of the professor's FormData Node.js/Express starter, based on the user's working Lab 8.1 project.

## Changes
- Kept the original HTML forms and Express routes for comparison.
- Added three browser-side `fetch()` forms (GET name, POST name, POST customer).
- Added `public/javascripts/fetch-demo.js` to send requests asynchronously and display the server response on the same page.
- Uses the existing `/readNameAndRespond` and `/readCustomerInfoAndRespond` routes; no new backend routes needed.

## Run
From the project folder on Windows PowerShell:
1. `npm.cmd install`
2. `npm.cmd start`
3. Open `http://localhost:3000`
4. Scroll to **Lab 8.2 — JavaScript Fetch Demo**.
5. Enter test values, submit each form, and watch the response appear without navigating away.
6. Press Ctrl+C in the terminal to stop.

## Demonstration
Say: "Lab 8.1 uses regular HTML forms, which navigate to the response page. In Lab 8.2, I used JavaScript fetch() to send GET and POST requests to the same Express routes and display their responses without reloading the page."

## Note
The full professor-issued Lab 8.2 instructions were not available for verification. Check them before submitting. This is a working implementation of the previously discussed fetch requirement, not a guarantee that every rubric item is met.

## Attribution
Original FormData starter: https://github.com/grewe/FormData
Lab 8.2 fetch implementation created with ChatGPT assistance; review and understand the code before presenting.
