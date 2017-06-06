import { Injectable } from '@angular/core';

import { Quiz } from '../models/quiz';
import { QUIZZES } from '../data/mock-quiz';

@Injectable()
export class QuizService {
	
	getQuiz(): Promise<Quiz[]> {
		return Promise.resolve(QUIZZES);
	}
}