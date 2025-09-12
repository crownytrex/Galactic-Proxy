document.getElementById('cloakBtn').addEventListener('click', () => {
  const urlField = document.getElementById('urlInput');
  const url = urlField.value.trim();

  if (!url) {
    alert('Please enter a valid URL.');
    return;
  }

  // Open a blank page and inject an iframe for cloaking
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
      <style>body,html{margin:0;padding:0;height:100vh;overflow:hidden}</style>
    </head>
    <body>
      <iframe src="${url}" frameborder="0"
        style="width:100%;height:100vh;border:none;">
      </iframe>
    </body>
    </html>
  `);
  doc.close();
});

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

