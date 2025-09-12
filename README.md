🌌 Galactic Proxy Cloak
Galactic Proxy Cloak is a sleek, frontend-only web interface designed to simulate a proxy-like experience with a cosmic aesthetic. Built using HTML, CSS, and JavaScript, it features a purple-to-black gradient background, high-quality interactive buttons, and a cloaking mechanism that opens user-specified URLs inside an about:blank iframe. While it doesn't offer true proxy functionality, it provides a visually engaging and obfuscating way to launch external sites.

🚀 Features
Galactic Theme: A stunning purple-to-black gradient background inspired by deep space visuals.

High-Quality UI: Smooth, responsive buttons with hover effects and shadows for a polished feel.

Cloaking Mechanism: Opens any URL inside an about:blank iframe in a new tab, mimicking basic cloaking behavior.

Modular Design: Clean separation of HTML, CSS, and JavaScript for easy customization and scalability.

Custom Favicon: Includes a cosmic-themed favicon to match the galactic aesthetic.

📁 File Structure
Code
galactic-proxy-cloak/
├── index.html       # Main HTML structure
├── style.css        # Gradient styling and button design
├── script.js        # Cloaking logic and event handling
🛠️ How It Works
User enters a URL into the input field.

On clicking Cloak & Launch, a new tab opens with about:blank.

The script injects an iframe into the blank page, loading the specified URL.

The original site is now cloaked inside a seemingly empty tab.

⚠️ Note: This is a visual cloaking tool only. It does not bypass firewalls, filters, or CORS restrictions. For actual proxy functionality, a backend server is required.

🌐 Live Preview
You can host this on GitHub Pages or any static hosting service. Just upload the three files and you're good to go.

🖼️ Favicon
The favicon is sourced from this image, which features a cosmic design with star-like elements and curved blue bands—perfectly complementing the galactic theme.

html
<link rel="icon" href="https://i.imgur.com/bRZDu4A.png" type="image/png" />
📦 Installation
Clone the repository:

bash
git clone https://github.com/yourusername/galactic-proxy-cloak.git
cd galactic-proxy-cloak
Then open index.html in your browser.

✨ Customization Ideas
Add a dark mode toggle using CSS variables.

Integrate a backend proxy with Node.js or PHP.

Enhance mobile responsiveness with media queries.

Include a history log of visited URLs (locally stored).

📜 License
This project is open-source and available under the MIT License.

💬 Contribute
Feel free to fork, improve, and submit pull requests. Whether it's UI enhancements, new features, or bug fixes—your contributions are welcome!

🌠 Credits
Created with stardust and code by crownytrex. Favicon artwork courtesy of crownytrex.
