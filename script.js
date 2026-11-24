document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("units-container");

    try {
        const response = await fetch("data.json");
        if (!response.ok) throw new Error("Could not load unit data.");
        
        const units = await response.json();
        container.innerHTML = "";

        units.forEach(unit => {
            const card = document.createElement("article");
            card.className = "unit-card";

            // Header links (Teaching Guide & Full Unit Review if available)
            let topLinksHTML = '<div class="unit-top-links">';
            if (unit.teachingGuide) {
                topLinksHTML += `<a href="${unit.teachingGuide}" target="_blank" class="badge-link guide">📖 Teaching Guide</a>`;
            }
            if (unit.fullUnitReview) {
                topLinksHTML += `<a href="${unit.fullUnitReview}" target="_blank" class="badge-link review">⭐ Full Unit Review</a>`;
            }
            topLinksHTML += '</div>';

            // Build chapter dropdowns
            let chaptersHTML = '<div class="chapters-list">';
            unit.chapters.forEach(ch => {
                chaptersHTML += `
                    <details class="chapter-dropdown">
                        <summary><strong>${ch.code} - ${ch.title}</strong></summary>
                        <div class="chapter-content">
                            ${ch.slides ? `<a href="${ch.slides}" target="_blank" class="resource-btn slides-btn">📊 Slides</a>` : ''}
                            ${ch.reviewGame ? `<a href="${ch.reviewGame}" target="_blank" class="resource-btn game-btn">🎮 Review Game</a>` : ''}
                            ${ch.videos ? `<a href="${ch.videos}" target="_blank" class="resource-btn video-btn">🎥 Videos Folder</a>` : ''}
                        </div>
                    </details>
                `;
            });
            chaptersHTML += '</div>';

            card.innerHTML = `
                <h2>${unit.unitTitle}</h2>
                ${topLinksHTML}
                ${chaptersHTML}
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading units:", error);
        container.innerHTML = `<p style="color: red; text-align: center;">Failed to load course materials.</p>`;
    }
});