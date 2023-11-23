// Questions that will be asked
const Questions = [{
	q: "When was Chris born?",
	a: [{ text: "June 9", isCorrect: false },
	{ text: "July 8", isCorrect: false },
	{ text: "June 8", isCorrect: true },
	{ text: "July 7", isCorrect: false }
	]

},
{
	q: "Where was Chris born?",
	a: [{ text: "Hoboken", isCorrect: false, isSelected: false },
	{ text: "Queens", isCorrect: false },
	{ text: "Bronx", isCorrect: false },
	{ text: "Brooklyn", isCorrect: true }
	]

},
{
	q: "How old is Chris?",
	a: [{ text: "19", isCorrect: false },
	{ text: "20.3", isCorrect: false },
	{ text: "20.5", isCorrect: true },
	{ text: "20.6", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}

