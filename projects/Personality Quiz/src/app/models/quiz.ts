import { Choice } from './choice';

export class Quiz {
	id: number;
	question: string;
	answered: boolean;
	choices: Choice[];
}