import './index.html';

// Use environment variable for the proxy URL
const proxyUrl = `http://localhost:8082/proxy?url=`;

// JavaScript code for handling button clicks
const output = document.getElementById('output');

function isCorsIssue(error) {
    return error.message.includes('Failed to fetch') || error.message.includes('NetworkError');
}

document.getElementById('no-cors').addEventListener('click', () => {
    fetch('http://www.google.com/robots.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => output.textContent = data)
        .catch(error => {
            if (isCorsIssue(error)) {
                output.innerHTML = `<span class="error">Error: Access to fetch at 'https://www.google.com/robots.txt' (redirected from 'http://www.google.com/robots.txt') from origin '${window.location.origin}' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.</span>`;
            } else {
                output.textContent = 'Error: ' + error.message;
            }
        });
});

document.getElementById('with-cors').addEventListener('click', () => {
    const targetUrl = 'http://www.google.com/robots.txt';

    fetch(proxyUrl + encodeURIComponent(targetUrl))
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => output.textContent = data)
        .catch(error => {
            if (isCorsIssue(error)) {
                output.innerHTML = `<span class="error">Error: CORS proxy issue detected. The proxy server might not be running or is misconfigured.</span>`;
            } else {
                output.textContent = 'Error: ' + error.message;
            }
        });
});