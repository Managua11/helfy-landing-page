DoktorABC Landing Page

Landing page reproduction based on the provided Figma design.

The project is built with plain HTML, CSS and vanilla JavaScript. No frameworks or build tools are required.

Run

Open index.html in the browser.

You can also run it with a simple local server:

npx serve .

or

python -m http.server 8000

Tech

HTML5

CSS3

Vanilla JavaScript

Poppins from Google Fonts

Project structure

index.html
css/
  style.css
js/
  script.js
assets/
  images/
  badges/

Implemented

Scrolling top bar

Header

Hero section

Benefits and CTA

Trust elements

Testimonials

How it works section

Footer

Responsive desktop and mobile layouts

Carousel interactions

The hero section uses the required real_helfy_hero_section id.

Responsive

The layout is adapted for desktop, tablet and mobile.

Main breakpoints:

1280px

992px

600px

The page was also checked at the required 1920px, 1280px and 390px widths.

Links

Nothing links anywhere yet, because the design did not say where things should go.

The "Jetzt Rezept anfordern!" call to action is a real button element, not a link. It would start the questionnaire rather than open another page, so a button felt like the honest choice. For now it does nothing when clicked.

The five social icons in the footer still use href="#". Left alone those make the browser jump back to the top of the page on every click, which looks like a bug, so script.js cancels the default click for them. Adding real URLs later is enough to make them work, because the cancel only applies to links whose href is exactly "#".

Clicking the logo scrolls back to the hero. That one is intentional.

Known differences

A few details could not be reproduced exactly from the provided assets:

The DoktorABC logo is currently recreated with a simple inline SVG.

Some text in the top bar and testimonials was difficult to read from the design and may need minor corrections.

The decorative curved shape in the how-it-works section is not included.

Some source images are larger than needed and could be optimized further for production.

Notes

Colors, spacing and layout were matched to the Figma design as closely as possible within the assignment time.
## Bonus — LLM Prompt

Review my HTML, CSS and vanilla JavaScript landing page.

Check the code for:
- semantic HTML
- CSS structure
- responsive issues
- duplicated styles
- accessibility
- JavaScript bugs
- possible horizontal overflow

Please suggest simple improvements without introducing frameworks, libraries or build tools.