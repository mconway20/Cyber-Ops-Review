# Cyber Ops — Class Portal & Resource Hub

The official course portal and resource hub for **Cyber Ops**, organizing unit presentations, video lessons, teaching guides, and interactive review games (Gimkit & Wayground).

## Features
* **Unit & Chapter Organization:** Collapsible chapter dropdowns for easy, clutter-free navigation across course units.
* **Data-Driven Updates:** All units, chapters, and resource links are managed through a single `data.json` file—no HTML editing required to add new lessons.
* **Lightweight & Fast:** Built with vanilla HTML, CSS, and JavaScript and hosted via GitHub Pages.

---

## Project Structure
```text
/
├── index.html      # Main page layout
├── style.css       # Styling and responsive card/dropdown layout
├── script.js       # Dynamically loads and renders units from data.json
└── data.json       # Course units, chapters, slides, videos, and review links
```

## Updating Course Content

To add or edit units, chapters, slides, or review games:

1. Open data.json in this repository.

2. Follow the existing JSON structure to add a new chapter object under the corresponding unit's "chapters" list (or add a new unit block).

3. Commit the changes and the live site will update automatically.

## Credits
* **Course Curriculum & Materials**: Micael Conway

* **Site Architecture & Development**: Built in collaboration with Ryan Cunningham