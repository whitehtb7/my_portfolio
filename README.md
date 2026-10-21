
# Cyber Security and Digital Forensics Portfolio

A professional, responsive portfolio website built using HTML5, CSS3,
and vanilla JavaScript.

## 1. Project Overview

The portfolio presents professional experience, research interests,
cybersecurity projects, teaching activities, technical skills, and
contact information.

It includes an interactive demonstration of rule-based vishing call
analysis.

## 2. Project Structure

```text
cyber_forensics_portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

### File descriptions

- `index.html`: page structure and content.
- `style.css`: styling, layout, colours, and responsive behaviour.
- `script.js`: theme switching, skill animations, navigation,
  vishing analysis, and contact email draft.
- `README.md`: project documentation and setup instructions.

## 3. Requirements

- Windows 11, Linux, or macOS.
- A modern web browser such as Chrome, Firefox, or Edge.
- A text editor such as Visual Studio Code.
- Internet access for downloading Google Fonts.

No JavaScript packages or build tools are required.

## 4. Run the Website on Windows 11

1. Create the `cyber_forensics_portfolio` folder.
2. Save all four files in that folder.
3. Open the folder in Visual Studio Code or File Explorer.
4. Double-click `index.html` to open it in your browser.

### Optional: Use Visual Studio Code Live Server

1. Install Visual Studio Code.
2. Open the project folder.
3. Install the Live Server extension.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

The browser will open a local version of the portfolio.

## 5. Customize Your Portfolio

### Personal details

In `index.html`, replace:

- `Your Name` with your professional name.
- The sample biography with your own profile.
- The sample education and experience details.
- Placeholder project titles and descriptions.
- `you@example.com` with your actual email address.

### Contact email

In `script.js`, find:

```javascript
var recipient = 'you@example.com';
```

Replace the placeholder with your real email address.

The contact button opens the visitor's configured email application.
It does not send email directly from the website.

### Social profiles

In `index.html`, replace the placeholder `href="#"` values for
LinkedIn and GitHub with your actual profile URLs.

### Skills

In `script.js`, edit the `skills` array to change skill names and
their displayed percentages.

Use realistic values that reflect your current abilities.

### Projects

Add verified project details, technologies, outcomes, GitHub
repositories, publications, and demonstration links.

Do not claim performance results unless you have measured them.

## 6. Website Features

- Responsive desktop, tablet, and mobile layouts.
- Light and dark colour themes.
- Sticky navigation and active section highlighting.
- Animated skill progress bars.
- Project exhibit cards.
- Rule-based vishing call checker.
- Contact form that prepares an email draft.
- Automatic copyright year.
- Accessible focus indicators and reduced-motion support.

## 7. Vishing Analyzer Disclaimer

The vishing checker searches for predefined words and phrases related
to urgency, authority, credentials, payment, and secrecy.

It is a simplified educational demonstration. It is not a trained
machine-learning model, and it does not establish whether a call is
genuinely fraudulent.

A message without recognized signals may still be malicious.

## 8. Publish with GitHub Pages

1. Sign in to GitHub.
2. Create a new repository, for example `my-portfolio`.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md`
   to the repository root.
4. Open the repository's **Settings**.
5. Select **Pages**.
6. Under the build and deployment settings, select
   **Deploy from a branch**.
7. Select the `main` branch and `/ (root)` directory.
8. Save the configuration.
9. Wait for deployment and open the URL shown in the Pages settings.

The site will be available at a GitHub Pages address similar to:

`https://yourusername.github.io/my-portfolio/`

Replace `yourusername` and `my-portfolio` with your actual GitHub
username and repository name.

## 9. Troubleshooting

### CSS is not loading

Check that the filename is exactly `style.css` and that it is in the
same directory as `index.html`.

### JavaScript is not working

Check that the filename is exactly `script.js`. Open browser
Developer Tools with F12 and inspect the Console for errors.

### Fonts look different

The Google Fonts service requires internet access. The website uses
fallback fonts when the external fonts are unavailable.

### Email draft does not open

Set up a default email application in your operating system or use
a browser configured to handle `mailto:` links.

## 10. License

You may customize this starter portfolio for personal and professional
use. Add your preferred license if you distribute the project.
