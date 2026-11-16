
/* =========================================
   E-HASA GRAMATIKA
   PAGSASANAY AT PAGSUSULIT
========================================= */

const questionBank = {

    "ng-nang": {
        title: "Ng at Nang",
        questions: [
            {
                question: "Alin ang wastong pangungusap?",
                options: [
                    "Kumain nang mansanas si Ana.",
                    "Kumain ng mansanas si Ana.",
                    "Kumain nang mansanas si Ana kahapon.",
                    "Kumain ng mabilis si Ana."
                ],
                answer: 1,
                explanation: "Ginagamit ang 'ng' upang ipakilala ang bagay na kinakain. Ang mansanas ang bagay na kinain."
            },
            {
                question: "Alin ang wastong paggamit ng 'nang'?",
                options: [
                    "Tumakbo nang mabilis ang bata.",
                    "Bumili nang tinapay si Ben.",
                    "Nagbasa nang aklat si Mia.",
                    "Uminom nang tubig ang bata."
                ],
                answer: 0,
                explanation: "Ginagamit ang 'nang' upang ilarawan kung paano ginawa ang kilos. Dito, inilalarawan nito kung paano tumakbo ang bata."
            },
            {
                question: "Piliin ang tamang salita: Nagbigay siya ___ regalo sa kaniyang kaibigan.",
                options: [
                    "nang",
                    "ng",
                    "na'ng",
                    "nang at ng"
                ],
                answer: 1,
                explanation: "Ginagamit ang 'ng' upang tukuyin ang bagay na ibinigay, na siyang regalo."
            }
        ]
    },

    "rin-din": {
    title: "Rin at Din",
    questions: [
        {
            question: "Alin ang wastong pangungusap?",
            options: [
                "Ako din ay sasama.",
                "Ako rin ay sasama.",
                "Ako raw ay sasama rin din.",
                "Ako din rin ay sasama."
            ],
            answer: 1,
            explanation: "Ginagamit ang 'rin' kapag ang naunang salita ay nagtatapos sa patinig o tunog na w at y."
        },
        {
            question: "Piliin ang tamang salita: Si Mark ___ ay sasali sa paligsahan.",
            options: [
                "rin",
                "din",
                "nang",
                "ng"
            ],
            answer: 1,
            explanation: "Ginagamit ang 'din' pagkatapos ng salitang nagtatapos sa katinig, gaya ng Mark."
        },
        {
            question: "Alin ang angkop na salita: Ikaw ___ ang napili.",
            options: [
                "din",
                "rin",
                "raw",
                "daw"
            ],
            answer: 1,
            explanation: "Ang salitang 'ikaw' ay nagtatapos sa tunog na w, kaya ginagamit ang 'rin'."
        }
    ]
},

   "raw-daw": {
    title: "Raw at Daw",
    questions: [
        {
            question: "Alin ang wastong pangungusap?",
            options: [
                "Maganda raw ang tanawin.",
                "Maganda daw ang tanawin.",
                "Maganda rin daw raw ang tanawin.",
                "Maganda nang ang tanawin."
            ],
            answer: 0,
            explanation: "Ginagamit ang 'raw' pagkatapos ng salitang nagtatapos sa patinig o tunog na w at y."
        },
        {
            question: "Piliin ang tamang salita: Uulan ___ mamayang hapon.",
            options: [
                "raw",
                "daw",
                "rin",
                "nang"
            ],
            answer: 1,
            explanation: "Ginagamit ang 'daw' pagkatapos ng salitang nagtatapos sa katinig."
        },
        {
            question: "Alin ang angkop na pangungusap?",
            options: [
                "Siya raw ang nanalo.",
                "Siya daw ang nanalo.",
                "Siya ng ang nanalo.",
                "Siya nang ang nanalo."
            ],
            answer: 0,
            explanation: "Ang 'siya' ay nagtatapos sa patinig na a, kaya ginagamit ang 'raw'."
        }
    ]
},

    "may-mayroon": {
        title: "May at Mayroon",
        questions: [
            {
                question: "Alin ang wastong pangungusap?",
                options: [
                    "Mayroon lapis ako.",
                    "May lapis ako.",
                    "Mayroon ako lapis.",
                    "Mayroon na lapis."
                ],
                answer: 1,
                explanation: "Ginagamit ang 'may' bago ang pangngalan. Sa pangungusap, ang 'lapis' ay pangngalan."
            },
            {
                question: "Piliin ang wastong pangungusap.",
                options: [
                    "Mayroon akong sasabihin.",
                    "Mayroon akong sasabihin na ako ay.",
                    "Mayroon sasabihin akong.",
                    "Mayroon akong ng sasabihin."
                ],
                answer: 0,
                explanation: "Maaaring gamitin ang 'mayroon' bago ang panghalip na 'akong' sa pangungusap na ito."
            },
            {
                question: "Alin ang angkop na salita: ___ ba kayong tanong?",
                options: [
                    "May",
                    "Mayroon",
                    "Nang",
                    "Rin"
                ],
                answer: 1,
                explanation: "Ang 'mayroon' ay maaaring gamitin sa ganitong tanong tungkol sa pagkakaroon ng isang bagay."
            }
        ]
    },

    "bantas": {
        title: "Wastong Paggamit ng Bantas",
        questions: [
            {
                question: "Anong bantas ang ginagamit sa hulihan ng pangungusap na patanong?",
                options: [
                    "Tuldok (.)",
                    "Kuwit (,)",
                    "Tandang pananong (?)",
                    "Tandang padamdam (!)"
                ],
                answer: 2,
                explanation: "Ginagamit ang tandang pananong (?) sa hulihan ng pangungusap na nagtatanong."
            },
            {
                question: "Alin ang wastong bantas sa pangungusap na ito: 'Napakaganda ng tanawin___'",
                options: [
                    "?",
                    "!",
                    ",",
                    ":"
                ],
                answer: 1,
                explanation: "Ang tandang padamdam (!) ay ginagamit upang ipahayag ang matinding damdamin."
            },
            {
                question: "Anong bantas ang ginagamit upang paghiwalayin ang mga salita o parirala sa isang talaan?",
                options: [
                    "Tuldok",
                    "Kuwit",
                    "Tandang pananong",
                    "Panipi"
                ],
                answer: 1,
                explanation: "Ginagamit ang kuwit (,) upang paghiwalayin ang mga salita o parirala sa isang talaan."
            }
        ]
    },

    "pangungusap": {
        title: "Pagbuo ng Pangungusap",
        questions: [
            {
                question: "Ano ang pangungusap?",
                options: [
                    "Pangkat ng mga titik lamang.",
                    "Pangkat ng mga salitang walang diwa.",
                    "Lipon ng mga salitang nagpapahayag ng buong diwa.",
                    "Isang salita lamang sa lahat ng pagkakataon."
                ],
                answer: 2,
                explanation: "Ang pangungusap ay lipon ng mga salitang nagpapahayag ng buong diwa o kaisipan."
            },
            {
                question: "Ano ang tawag sa pinag-uusapan sa pangungusap?",
                options: [
                    "Panaguri",
                    "Simuno",
                    "Pang-abay",
                    "Pang-uri"
                ],
                answer: 1,
                explanation: "Ang simuno ang bahaging pinag-uusapan sa pangungusap."
            },
            {
                question: "Alin ang may malinaw at buong diwa?",
                options: [
                    "Dahil sa paaralan.",
                    "Ang batang masipag.",
                    "Nag-aaral si Liza araw-araw.",
                    "Sa ilalim ng puno."
                ],
                answer: 2,
                explanation: "Ang 'Nag-aaral si Liza araw-araw' ay nagpapahayag ng buong diwa."
            }
        ]
    }

        "bokabularyo": {
        title: "Lalim ng Bokabularyo",
        questions: [
            {
                question: "Alin sa mga sumusunod ang pinakamalapit na kahulugan ng salitang 'masinop'?",
                options: [
                    "Magastos",
                    "Matipid at maingat",
                    "Pabaya",
                    "Mabilis kumilos"
                ],
                answer: 1,
                explanation: "Ang masinop ay tumutukoy sa pagiging matipid, maingat, at mahusay sa paggamit o pangangalaga ng mga bagay."
            },
            {
                question: "Alin ang pinakaangkop na salita sa pangungusap? 'Kailangang maging ___ sa pagpili ng mga salitang gagamitin sa pananaliksik.'",
                options: [
                    "maingat",
                    "magulo",
                    "padalos-dalos",
                    "pabaya"
                ],
                answer: 0,
                explanation: "Ang 'maingat' ang angkop na salita dahil mahalagang piliin nang wasto ang mga salitang ginagamit sa pananaliksik."
            },
            {
                question: "Ano ang kasingkahulugan ng salitang 'marubdob'?",
                options: [
                    "Mahina",
                    "Matindi",
                    "Mabagal",
                    "Malabo"
                ],
                answer: 1,
                explanation: "Ang marubdob ay nangangahulugang matindi o taimtim."
            },
            {
                question: "Alin ang nagpapakita ng wastong pagpili ng salita sa akademikong pagsulat?",
                options: [
                    "Ang resulta ay sobrang ganda.",
                    "Ang resulta ay nagpapakita ng positibong kinalabasan.",
                    "Ang resulta ay astig talaga.",
                    "Ang resulta ay bongga."
                ],
                answer: 1,
                explanation: "Mas angkop sa akademikong pagsulat ang pormal, tiyak, at malinaw na mga salita."
            },
            {
                question: "Ano ang dapat isaalang-alang sa pagpili ng salita?",
                options: [
                    "Haba lamang ng salita",
                    "Pagiging malalim kahit hindi angkop",
                    "Konteksto at layunin ng pagpapahayag",
                    "Dami ng salitang ginagamit"
                ],
                answer: 2,
                explanation: "Mahalagang iayon ang salita sa konteksto at layunin upang maging angkop at mabisa ang pagpapahayag."
            }
        ]
    },

    "kalinawan": {
        title: "Kalinawan ng Nilalaman",
        questions: [
            {
                question: "Ano ang pangunahing katangian ng isang malinaw na talata?",
                options: [
                    "Maraming mahihirap na salita",
                    "May maayos at magkakaugnay na ideya",
                    "Paulit-ulit ang mga pangungusap",
                    "Walang tiyak na paksa"
                ],
                answer: 1,
                explanation: "Nagiging malinaw ang talata kapag maayos ang pagkakasunod-sunod at pagkakaugnay ng mga ideya."
            },
            {
                question: "Alin ang pinakamabisang paraan upang maging malinaw ang pagpapahayag?",
                options: [
                    "Gumamit ng malabo at malalalim na salita",
                    "Magdagdag ng maraming hindi kaugnay na detalye",
                    "Gumamit ng tiyak at angkop na mga salita",
                    "Ulit-ulitin ang pangunahing ideya"
                ],
                answer: 2,
                explanation: "Nakakatulong ang tiyak at angkop na mga salita upang madaling maunawaan ng mambabasa ang mensahe."
            },
            {
                question: "Ano ang dapat taglayin ng isang maayos na talata?",
                options: [
                    "Pangunahing ideya at mga suportang detalye",
                    "Mga pangungusap na walang kaugnayan",
                    "Mga salitang walang malinaw na kahulugan",
                    "Maraming magkakaibang paksa"
                ],
                answer: 0,
                explanation: "Ang pangunahing ideya at mga suportang detalye ay nagbibigay-linaw at direksiyon sa talata."
            },
            {
                question: "Alin ang nagpapakita ng malinaw na pagpapahayag?",
                options: [
                    "Maraming bagay ang nangyari doon na hindi ko alam.",
                    "Nagsagawa ang mga mag-aaral ng pananaliksik tungkol sa wastong paggamit ng wika.",
                    "Ito ay tungkol sa mga bagay na ganoon.",
                    "Mayroon doon at dito na kung anu-ano."
                ],
                answer: 1,
                explanation: "Tiyak at tuwiran ang ikalawang pangungusap kaya madaling maunawaan ang ipinahahayag."
            },
            {
                question: "Bakit mahalaga ang pagkakaugnay-ugnay ng mga ideya sa isang sulatin?",
                options: [
                    "Upang humaba ang sulatin",
                    "Upang maging mahirap itong basahin",
                    "Upang maging organisado at madaling maunawaan ang nilalaman",
                    "Upang dumami ang mga salitang ginamit"
                ],
                answer: 2,
                explanation: "Ang magkakaugnay na ideya ay tumutulong upang maging organisado, lohikal, at malinaw ang isang sulatin."
            }
        ]
    },

        "kalinawan": {
        // dito ang mga tanong sa Kalinawan ng Nilalaman
    }
    };

};


/* =========================================
   MGA ELEMENTO SA HTML
========================================= */

const categoryScreen = document.getElementById("categoryScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const reviewScreen = document.getElementById("reviewScreen");

const quizCategoryTitle = document.getElementById("quizCategoryTitle");
const questionCounter = document.getElementById("questionCounter");
const progressPercent = document.getElementById("progressPercent");
const quizProgressFill = document.getElementById("quizProgressFill");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const answerFeedback = document.getElementById("answerFeedback");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const finalScore = document.getElementById("finalScore");
const totalScore = document.getElementById("totalScore");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const percentageScore = document.getElementById("percentageScore");
const resultMessage = document.getElementById("resultMessage");
const resultDescription = document.getElementById("resultDescription");
const reviewList = document.getElementById("reviewList");


/* =========================================
   MGA VARIABLE
========================================= */

let currentCategory = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedAnswer = null;


/* =========================================
   PAGPILI NG KATEGORYA
========================================= */

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        startQuiz(card.dataset.category);
    });
});

document.getElementById("allCategoryBtn").addEventListener("click", () => {
    startQuiz("all");
});


/* =========================================
   SIMULAN ANG PAGSUSULIT
========================================= */

function startQuiz(category) {

    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    if (category === "all") {

        currentQuestions = [];

        Object.keys(questionBank).forEach(key => {
            questionBank[key].questions.forEach(question => {
                currentQuestions.push({
                    ...question,
                    categoryTitle: questionBank[key].title
                });
            });
        });

        currentQuestions = shuffleArray(currentQuestions).slice(0, 12);

        quizCategoryTitle.textContent = "Lahat ng Kategorya";

    } else {

        currentQuestions = shuffleArray(
            [...questionBank[category].questions]
        );

        quizCategoryTitle.textContent = questionBank[category].title;
    }

    categoryScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


/* =========================================
   PAGHALO NG MGA TANONG
========================================= */

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


/* =========================================
   IPAKITA ANG TANONG
========================================= */

function showQuestion() {

    const question = currentQuestions[currentQuestionIndex];

    selectedAnswer = null;

    const total = currentQuestions.length;
    const current = currentQuestionIndex + 1;
    const percentage = Math.round((current / total) * 100);

    questionCounter.textContent = `Tanong ${current} ng ${total}`;
    progressPercent.textContent = `${percentage}%`;
    quizProgressFill.style.width = `${percentage}%`;

    questionNumber.textContent =
        `TANONG ${String(current).padStart(2, "0")}`;

    questionText.textContent = question.question;

    answerOptions.innerHTML = "";

    answerFeedback.textContent = "";
    answerFeedback.className = "answer-feedback hidden";

    nextQuestionBtn.disabled = true;

    const letters = ["A", "B", "C", "D"];

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "answer-option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = letters[index];

        const text = document.createElement("span");
        text.textContent = option;

        button.appendChild(letter);
        button.appendChild(text);

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        answerOptions.appendChild(button);
    });
}


/* =========================================
   PAGPILI AT PAG-CHECK NG SAGOT
========================================= */

function selectAnswer(index) {

    if (selectedAnswer !== null) return;

    selectedAnswer = index;

    const question = currentQuestions[currentQuestionIndex];
    const buttons = answerOptions.querySelectorAll(".answer-option");

    const isCorrect = index === question.answer;

    if (isCorrect) {
        score++;
    }

    userAnswers.push({
        question: question.question,
        options: question.options,
        selected: index,
        correct: question.answer,
        explanation: question.explanation,
        categoryTitle: question.categoryTitle || ""
    });

    buttons.forEach((button, buttonIndex) => {

        button.disabled = true;

        if (buttonIndex === question.answer) {
            button.classList.add("correct");
        }

        if (buttonIndex === index && !isCorrect) {
            button.classList.add("wrong");
        }
    });

    answerFeedback.classList.remove("hidden");

    if (isCorrect) {
        answerFeedback.textContent =
            "✓ Tamang sagot! " + question.explanation;

        answerFeedback.classList.add("correct-feedback");

    } else {
        answerFeedback.textContent =
            "✗ Hindi iyon ang tamang sagot. " +
            "Tamang sagot: " +
            question.options[question.answer] +
            ". " + question.explanation;

        answerFeedback.classList.add("wrong-feedback");
    }

    nextQuestionBtn.disabled = false;

    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextQuestionBtn.textContent = "Tingnan ang Resulta";
    } else {
        nextQuestionBtn.textContent = "Susunod na Tanong →";
    }
}


/* =========================================
   SUSUNOD NA TANONG
========================================= */

nextQuestionBtn.addEventListener("click", () => {

    if (selectedAnswer === null) return;

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
});


/* =========================================
   IPakita ANG RESULTA
========================================= */

function showResult() {

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const total = currentQuestions.length;
    const wrong = total - score;
    const percentage = Math.round((score / total) * 100);

    finalScore.textContent = score;
    totalScore.textContent = `/ ${total}`;

    correctCount.textContent = score;
    wrongCount.textContent = wrong;
    percentageScore.textContent = `${percentage}%`;

    if (percentage >= 90) {

        resultMessage.textContent = "Napakahusay! 🌟";
        resultDescription.textContent =
            "Napakahusay ng iyong pag-unawa sa aralin. Ipagpatuloy ang mahusay na pagsasanay!";

    } else if (percentage >= 75) {

        resultMessage.textContent = "Mahusay ang iyong ginawa! 👏";
        resultDescription.textContent =
            "Maganda ang iyong naging resulta. Ipagpatuloy ang paglinang ng iyong kaalaman.";

    } else if (percentage >= 50) {

        resultMessage.textContent = "Mayroon ka nang natutuhan! 📘";
        resultDescription.textContent =
            "Balikan ang ilang bahagi ng aralin upang mas mapalawak pa ang iyong kaalaman.";

    } else {

        resultMessage.textContent = "Patuloy lang sa pagsasanay! 💪";
        resultDescription.textContent =
            "Huwag panghinaan ng loob. Balikan ang mga aralin at subukan muli ang pagsusulit.";
    }

    saveQuizResult({
        category: currentCategory,
        score: score,
        total: total,
        percentage: percentage,
        date: new Date().toISOString()
    });
}


/* =========================================
   REVIEW NG MGA SAGOT
========================================= */

document.getElementById("reviewBtn").addEventListener("click", showReview);

document.getElementById("backToResultBtn").addEventListener("click", () => {
    reviewScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
});

function showReview() {

    resultScreen.classList.add("hidden");
    reviewScreen.classList.remove("hidden");

    reviewList.innerHTML = "";

    userAnswers.forEach((answer, index) => {

        const isCorrect = answer.selected === answer.correct;

        const item = document.createElement("div");
        item.className = "review-item";

        const title = document.createElement("h3");
        title.textContent = `${index + 1}. ${answer.question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.textContent =
            "Iyong sagot: " + answer.options[answer.selected];

        yourAnswer.className = isCorrect
            ? "review-correct"
            : "review-wrong";

        const correctAnswer = document.createElement("p");
        correctAnswer.textContent =
            "Tamang sagot: " + answer.options[answer.correct];

        correctAnswer.className = "review-correct";

        const reason = document.createElement("p");
        reason.textContent = "Paliwanag: " + answer.explanation;
        reason.className = "review-reason";

        item.appendChild(title);

        if (answer.categoryTitle) {
            const category = document.createElement("p");
            category.textContent = "Kategorya: " + answer.categoryTitle;
            item.appendChild(category);
        }

        item.appendChild(yourAnswer);
        item.appendChild(correctAnswer);
        item.appendChild(reason);

        reviewList.appendChild(item);
    });
}


/* =========================================
   ULITIN ANG PAGSUSULIT
========================================= */

function retryQuiz() {
    startQuiz(currentCategory);
}

document.getElementById("retryBtn").addEventListener("click", retryQuiz);

document.getElementById("reviewRetryBtn").addEventListener("click", retryQuiz);


/* =========================================
   PUMILI NG IBANG KATEGORYA
========================================= */

function chooseCategory() {

    resultScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");

    categoryScreen.classList.remove("hidden");

    quizProgressFill.style.width = "0%";
}

document.getElementById("chooseCategoryBtn")
    .addEventListener("click", chooseCategory);

document.getElementById("exitQuizBtn")
    .addEventListener("click", chooseCategory);


/* =========================================
   ITAGO ANG RESULTA SA BROWSER
========================================= */

function saveQuizResult(result) {

    let history = [];

    try {
        history = JSON.parse(
            localStorage.getItem("ehQuizHistory")
        ) || [];
    } catch (error) {
        history = [];
    }

    history.push(result);

    localStorage.setItem(
        "ehQuizHistory",
        JSON.stringify(history)
    );
}
