import { Component, OnInit, } from '@angular/core';

import { Quiz } from '../models/quiz';
import { Choice } from '../models/choice';
import { QuizService } from '../services/quiz.service';



@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.css'],
	providers: [QuizService]
})

export class QuizComponent implements OnInit{
	quizzes: Quiz[];
	mode: string = 'quiz';

	pager = {
		index: 0,	
		size: 1,
		count: 1
	};

	constructor(private quizService: QuizService) { }

	getQuiz(): void {
		this.quizService.getQuiz().then(quizzes => {
			this.quizzes = quizzes;
			this.pager.count = this.quizzes.length;
		});
	}

	ngOnInit(): void {
		this.getQuiz();
	}

	get filteredQuizzes() {
    	return (this.quizzes) ?
      		this.quizzes.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  	}

	onSelect(quiz: Quiz, choice: Choice) {
		quiz.choices.forEach((x) => {
			if (x.id !== choice.id)
				x.selected = false;	
		});
		if (quiz.answered === true)
			quiz.answered = false;
		else
			quiz.answered = true;
	}

	goTo(index: number) {
		if (index >= 0 && index < this.pager.count) {
			this.pager.index = index;
			this.mode = 'quiz';
		}
	}

	isAnswered(index: number) {
		return this.quizzes[index].choices.find(x => x.selected) ? 'Answered' : 'Not Answered';
	}

	isCompleted() {
		return this.quizzes.find(x => x.answered === false) ? false : true
	}

	onSubmit() {
		if (this.isCompleted()) {
			this.mode = 'result';
		} else {
			this.mode = 'alert';
		}
	}
}