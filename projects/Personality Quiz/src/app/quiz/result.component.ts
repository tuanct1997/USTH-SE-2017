import { Component, OnInit } from '@angular/core';

import { Result } from '../models/result';
import { Quiz } from '../models/quiz';
import { Choice } from '../models/choice';
import { QuizService } from '../services/quiz.service';

const RESULTS: Result[] = [
	{matrix: [101,103,102], quote: 'You are a dog'},
	{matrix: [104,101,103], quote: 'You are a cat'},
	{matrix: [102,104,101], quote: 'You are a fish'}
];

@Component({
	selector: 'app-result',
	template: `<h4 class="alert alert-info text-sm-center">{{getResult()}}</h4>`,
	providers: [QuizService]
})

export class ResultComponent implements OnInit {
	quizzes: Quiz[];
	results: Result[];
	answers: number[];
	select: Choice;
	

	constructor(private quizService: QuizService) { }

	lengthvar = {
		quiz: 3,
		result: 3
	}

	getQuiz(): void {
		this.quizService.getQuiz().then(quizzes => {
			this.quizzes = quizzes;
		});
	}

	ngOnInit(): void {
		this.getQuiz();
	}

	getResult(): String {
		for(var i=0; i < this.lengthvar.quiz; i++) {
			this.select = this.quizzes[i].choices.find(x => x.selected === true);
			this.answers[i] = this.select.id;
		}
		for(var i=0; i < this.lengthvar.result; i++) {
			if(this.results[i].matrix === this.answers)
				return this.results[i].quote;
		}
	}
}