
document.addEventListener("DOMContentLoaded", function () {

    // ===================================
    // DARK MODE
    // ===================================

    const savedTheme = localStorage.getItem("ehTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }


    // ===================================
    // QUIZ CHECKER
    // ===================================

    const checkButtons = document.querySelectorAll(".check-answer-btn");

    checkButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const question = button.closest(".practice-question");

            const selected = question.querySelector(
                'input[type="radio"]:checked'
            );

            const feedback = question.querySelector(".quiz-feedback");

            if (!selected) {
                feedback.textContent = "Pumili muna ng iyong sagot.";
                feedback.className = "quiz-feedback incorrect";
                return;
            }

            const correctAnswer = question.dataset.answer;

            if (selected.value === correctAnswer) {

                feedback.textContent = "✓ Tama! Mahusay ang iyong sagot.";
                feedback.className = "quiz-feedback correct";

            } else {

                feedback.textContent = "✗ Hindi pa tama. Balikan ang paliwanag at subukan muli.";
                feedback.className = "quiz-feedback incorrect";

            }

        });

    });


    // ===================================
    // MARK LESSON AS COMPLETED
    // ===================================

    const completeButton = document.getElementById("completeLessonBtn");

    if (completeButton) {

        const lessonId = document.body.dataset.lessonId;

        const completedLessons = JSON.parse(
            localStorage.getItem("ehCompletedLessons") || "[]"
        );

        const message = document.getElementById("lessonCompleteMessage");

        if (completedLessons.includes(lessonId)) {

            completeButton.textContent = "✓ Natapos na ang Aralin";

            if (message) {
                message.style.display = "block";
                message.textContent = "Natala na ang araling ito sa iyong progreso.";
            }

        }

        completeButton.addEventListener("click", function () {

            let completed = JSON.parse(
                localStorage.getItem("ehCompletedLessons") || "[]"
            );

            if (!completed.includes(lessonId)) {

                completed.push(lessonId);

                localStorage.setItem(
                    "ehCompletedLessons",
                    JSON.stringify(completed)
                );

            }

            completeButton.textContent = "✓ Natapos na ang Aralin";

            if (message) {
                message.style.display = "block";
                message.textContent = "Mahusay! Naidagdag na ang araling ito sa iyong progreso.";
            }

        });

    }

});
