// Lab 8.2: Send GET/POST requests to the existing Express routes without page navigation.
const output = document.getElementById('fetch-result');

async function submitWithFetch(event, method, endpoint) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get('name') || '').trim();
  if (!name) {
    output.textContent = 'Please enter a name.';
    return;
  }
  output.textContent = 'Sending request...';

  try {
    let url = endpoint;
    const options = { method };
    if (method === 'GET') {
      url += '?' + new URLSearchParams(data).toString();
    } else {
      options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
      options.body = new URLSearchParams(data).toString();
    }
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const text = await response.text();
    // Server currently returns HTML for the customer endpoint. Render it as plain
    // text to avoid inserting untrusted form values into the page as HTML.
    output.textContent = text.replace(/<br\s*\/?\s*>/gi, '\n');
  } catch (error) {
    output.textContent = 'Request failed: ' + error.message;
  }
}

document.getElementById('fetch-get-form').addEventListener('submit', event =>
  submitWithFetch(event, 'GET', '/readNameAndRespond'));
document.getElementById('fetch-post-form').addEventListener('submit', event =>
  submitWithFetch(event, 'POST', '/readNameAndRespond'));
document.getElementById('fetch-customer-form').addEventListener('submit', event =>
  submitWithFetch(event, 'POST', '/readCustomerInfoAndRespond'));
