// Launch the cloaked iframe in about:blank
function launchCloak() {
  const url = document.getElementById('urlInput').value.trim();
  if (!url) {
    alert('Please enter a valid URL.');
    return;
  }

  const win = window.open('about:blank', '_blank');
  if (!win) {
    alert('Popup blocked. Please allow popups for this site.');
    return;
  }

  const doc = win.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Cloaked Content</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          height: 100vh;
          overflow: hidden;
        }
        iframe {
          width: 100%;
          height: 100vh;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="${url}"></iframe>
    </body>
    </html>
  `);
  doc.close();
}

// Open the current interface in about:blank
document.getElementById('openSelfBtn').addEventListener('click', () => {
  const htmlContent = document.documentElement.outerHTML;
  const win = window.open('about:blank', '_blank');
  if (!win) {
    alert('Popup blocked. Please allow popups for this site.');
    return;
  }
  win.document.open();
  win.document.write(htmlContent);
  win.document.close();
});

// Manual cloak button
document.getElementById('cloakBtn').addEventListener('click', () => {
  launchCloak();
});

// Auto-launch if advanced cloaking is enabled
window.addEventListener('load', () => {
  const autoCloak = localStorage.getItem('advancedCloak') === 'true';
  const url = document.getElementById('urlInput').value.trim();
  if (autoCloak && url) {
    launchCloak();
  }
});

document.getElementById('musicBtn').addEventListener('click', () => {
  const win = window.open('about:blank', '_blank');
  if (!win) {
    alert('Popup blocked. Please allow popups for this site.');
    return;
  }

  const doc = win.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Music Portal</title>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          height: 100vh;
          overflow: hidden;
        }
        iframe {
          width: 100%;
          height: 100vh;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="https://umbra-iota.vercel.app/"></iframe>
    </body>
    </html>
  `);
  doc.close();
});

