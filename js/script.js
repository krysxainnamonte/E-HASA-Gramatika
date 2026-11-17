
document.addEventListener("DOMContentLoaded", function () {

    // ===================================
    // DARK MODE
    // ===================================

    const themeBtn = document.getElementById("themeBtn");

    const savedTheme = localStorage.getItem("ehTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeButton();

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            const isDark = document.body.classList.contains("dark-mode");

            localStorage.setItem(
                "ehTheme",
                isDark ? "dark" : "light"
            );

            updateThemeButton();

        });
    }

    function updateThemeButton() {

        if (!themeBtn) return;

        const isDark = document.body.classList.contains("dark-mode");

        themeBtn.textContent = isDark ? "☾" : "☼";
        themeBtn.title = isDark ? "Light Mode" : "Dark Mode";

    }

   /* =========================================
   E-HASA GRAMATIKA
   LIVE SEARCH SUGGESTIONS
========================================= */

const searchInput = document.getElementById("searchInput");
const searchSuggestions = document.getElementById("searchSuggestions");
const lessonLinks = document.querySelectorAll(".lesson-list a");

if (searchInput && searchSuggestions) {

    searchInput.addEventListener("input", function () {

        const searchValue = this.value.toLowerCase().trim();

        // Walang laman ang search: itago ang suggestions
        if (searchValue === "") {
            searchSuggestions.hidden = true;
            searchSuggestions.innerHTML = "";
            return;
        }

        // Kunin ang mga aralin na tumutugma sa hinahanap
        const matchedLessons = Array.from(lessonLinks).filter(function (lesson) {
            return lesson.textContent.toLowerCase().includes(searchValue);
        });

        // Linisin ang dating suggestions
        searchSuggestions.innerHTML = "";

        if (matchedLessons.length > 0) {

            matchedLessons.forEach(function (lesson) {

                const suggestion = document.createElement("a");

                suggestion.href = lesson.getAttribute("href");
                suggestion.className = "search-suggestion-item";

                suggestion.textContent = lesson.textContent
                    .replace("›", "")
                    .trim();

                searchSuggestions.appendChild(suggestion);

            });

        } else {

            const noResult = document.createElement("div");

            noResult.className = "search-no-results";
            noResult.textContent = "Walang nahanap na kaugnay na aralin.";

            searchSuggestions.appendChild(noResult);

        }

        searchSuggestions.hidden = false;

    });

    // Itago ang suggestions kapag pinindot ang Escape
    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            searchSuggestions.hidden = true;
        }

    });

}


    // ===================================
    // NAVIGATION ACTIVE STATE
    // ===================================

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

    
// ===================================
// MOBILE NAVIGATION
// ===================================

        const menuToggle = document.getElementById("menuToggle");
        const navbar = document.getElementById("navbar");
        const closeMenu = document.getElementById("closeMenu");
        const navOverlay = document.getElementById("navOverlay");

        function closeMobileMenu() {
            if (navbar) navbar.classList.remove("active");
            if (navOverlay) navOverlay.classList.remove("active");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
            }

            document.body.style.overflow = "";
        }

        if (menuToggle && navbar && closeMenu && navOverlay) {

            menuToggle.addEventListener("click", function() {
                navbar.classList.add("active");
                navOverlay.classList.add("active");
                menuToggle.setAttribute("aria-expanded", "true");
                document.body.style.overflow = "hidden";
            });

            closeMenu.addEventListener("click", closeMobileMenu);
            navOverlay.addEventListener("click", closeMobileMenu);

           navbar.querySelectorAll("a[href^='#']").forEach(function(link) {
             link.addEventListener("click", closeMobileMenu);
});
        }

    // ===================================
    // WORD OF THE DAY
    // ===================================

    const words = [

        {
            word: "Mabisa",
            meaning: "May kakayahang maghatid ng nais na resulta o epekto.",
            example: "Mabisa ang kaniyang paraan ng pagpapaliwanag."
        },

        {
            word: "Masinop",
            meaning: "Maingat at maayos sa paggawa o paggamit ng mga bagay.",
            example: "Masinop siyang gumawa ng kaniyang pananaliksik."
        },

        {
            word: "Malinaw",
            meaning: "Madaling maunawaan at hindi malabo.",
            example: "Malinaw ang pagkakalahad ng kaniyang ideya."
        },

        {
            word: "Makabuluhan",
            meaning: "May saysay, halaga, o mahalagang layunin.",
            example: "Makabuluhan ang talakayan tungkol sa wika."
        },

        {
            word: "Wasto",
            meaning: "Tama at naaayon sa tuntunin.",
            example: "Gumamit siya ng wastong bantas sa pangungusap."
        },

        {
            word: "Payak",
            meaning: "Simple at hindi masalimuot.",
            example: "Gumamit siya ng payak na mga salita sa kaniyang paliwanag."
        },

        {
            word: "Mabisa",
            meaning: "Nagbibigay ng magandang resulta.",
            example: "Mabisa ang kaniyang paraan ng pag-aaral."
        }

    ];

    const dayNumber = Math.floor(Date.now() / 86400000);

    const wordIndex = dayNumber % words.length;

    const todayWord = words[wordIndex];

    const wordTitle = document.getElementById("wordOfDay");
    const wordMeaning = document.getElementById("wordMeaning");
    const wordExample = document.getElementById("wordExample");

    if (wordTitle) {
        wordTitle.textContent = todayWord.word;
    }

    if (wordMeaning) {
        wordMeaning.textContent = todayWord.meaning;
    }

    if (wordExample) {
        wordExample.textContent = todayWord.example;
    }


    // ===================================
    // PROGRESS TRACKER
    // ===================================

    const totalLessons = 8;

    const completedLessons = JSON.parse(
        localStorage.getItem("ehCompletedLessons") || "[]"
    );

    // Mga valid na lesson ID
    const validLessonIds = [
        "ng-at-nang",
        "rin-at-din",
        "raw-at-daw",
        "may-at-mayroon",
        "bantas",
        "pagbuo-ng-pangungusap",
        "bokabularyo",
        "kalinawan"
    ];

    // Bilangin lamang ang natatangi at valid na natapos na aralin
    const uniqueCompletedLessons = [
        ...new Set(
            completedLessons.filter(function (id) {
                return validLessonIds.includes(id);
            })
        )
    ];

    const completedCount = Math.min(
        uniqueCompletedLessons.length,
        totalLessons
    );

    const percentage = Math.round(
        (completedCount / totalLessons) * 100
    );

    const countElement = document.getElementById("completedCount");
    const totalElement = document.getElementById("totalLessons");
    const percentElement = document.getElementById("progressPercent");
    const progressBar = document.getElementById("progressBarFill");
    const progressCircle = document.getElementById("progressCircle");
    const progressMessage = document.getElementById("progressMessage");

    if (countElement) {
        countElement.textContent = completedCount;
    }

    if (totalElement) {
        totalElement.textContent = totalLessons;
    }

    if (percentElement) {
        percentElement.textContent = percentage + "%";
    }

    if (progressBar) {
        progressBar.style.width = percentage + "%";
    }

    if (progressCircle) {
        progressCircle.style.background =
            `conic-gradient(#ffc64c ${percentage * 3.6}deg, #e8edf5 0deg)`;
    }

    if (progressMessage) {

        if (completedCount === totalLessons) {

            progressMessage.textContent =
                "🏆 Mahusay! Natapos mo na ang lahat ng pangunahing aralin!";

        } else if (completedCount === 0) {

            progressMessage.textContent =
                "🌱 Magsimula sa isang aralin. Bawat hakbang ay pag-unlad!";

        } else {

            progressMessage.textContent =
                `👏 Magaling! ${completedCount} sa ${totalLessons} aralin na ang natapos mo. Ipagpatuloy ito!`;

        }

    }

});


