"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_quiz_1 = require("../data/mock-quiz");
var QuizService = (function () {
    function QuizService() {
    }
    QuizService.prototype.getQuiz = function () {
        return Promise.resolve(mock_quiz_1.QUIZZES);
    };
    return QuizService;
}());
QuizService = __decorate([
    core_1.Injectable()
], QuizService);
exports.QuizService = QuizService;
//# sourceMappingURL=quiz.service.js.map