var raw_data = {
	"questions" : [
		{
			"question_text":"BlockingEnqueue is a not subinterface of Queue",
			"options":[
				{
					"option_text": "True",
					"is_correct": true,
					"option_feedback":"correct answer"
				},
				{
					"option_text":"False",
					"is_correct": false,
					"option_feedback":"wrong answer"
				}
			],
			"hints": [
				"Remember the lecture on Queues"
			]
		},
		{
			"question_text":"Queue is used in Breadth First Traversal of a graph",
			"options":[
				{
					"option_text": "True",
					"is_correct": true,
					"option_feedback":"correct answer"
				},
				{
					"option_text":"False",
					"is_correct": false,
					"option_feedback":"wrong answer"
				}
			],
			"hints": [
				"Remember the lecture on Queues"
			]
		},
		{
			"question_text":"To maintain FIFO, Are newer elements inserted to the tail of the list in Queues?",
			"options":[
				{
					"option_text": "True",
					"is_correct": true,
					"option_feedback":"correct answer"
				},
				{
					"option_text":"False",
					"is_correct": false,
					"option_feedback":"wrong answer"
				}
			],
			"hints": [
				"Remember the lecture on Queues"
			]
		},
		{
			"question_text":"Enqueue and Dequeue are the correct method used to insert and delete items from the queue repectively",
			"options":[
				{
					"option_text": "True",
					"is_correct": true,
					"option_feedback":"correct answer"
				},
				{
					"option_text":"False",
					"is_correct": false,
					"option_feedback":"wrong answer"
				}
			],
			"hints": [
				"Remember the lecture on Queues"
			]
		}
	]
};

var data = JSON.stringify(raw_data);
console.log(data);
var obj = JSON.parse(data);

function detailsupload() {
	for(var i=1; i < 5; i++) {
		var question_id="q"+i;
		document.getElementById(question_id).innerHTML=obj.questions[i-1].question_text;
		document.getElementById(question_id+1+1).innerHTML=obj.questions[i-1].options[0].option_text;
		document.getElementById(question_id+2+2).innerHTML=obj.questions[i-1].options[1].option_text;
	}
}

function check_answer(argument) {
	console.log(argument);
	var question = parseInt(argument[1], 10);
	var option = parseInt(argument[2], 10);
	if(obj.questions[question-1].options[option-1].is_correct) {
		document.getElementById("demo"+argument[1]).innerHTML='<div class = "alert alert-warning alert-dismissible question-cor-ans">' + 
			'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
			"<strong>correct: </strong>" + obj.questions[question-1].options[option-1].option_feedback +
			'</div>';
	}
	else {
		document.getElementById("demo" + argument[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible question-inc-ans">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<strong>Incorrect: </strong>" + obj.questions[question-1].options[option-1].option_feedback +
				'</div>';
	}

function get_hint(arg) {
	var question = parseInt(arg[1], 10);
	document.getElementById("hint" + arg[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible question-hint">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<strong>Hint: </strong>" + obj.questions[question-1].hints[0] +
				'</div>';

}
}