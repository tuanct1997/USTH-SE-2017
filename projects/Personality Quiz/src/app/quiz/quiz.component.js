"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var quiz_service_1 = require("../services/quiz.service");
var QuizComponent = (function () {
    function QuizComponent(quizService) {
        this.quizService = quizService;
        this.mode = 'quiz';
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
    }
    QuizComponent.prototype.getQuiz = function () {
        var _this = this;
        this.quizService.getQuiz().then(function (quizzes) {
            _this.quizzes = quizzes;
            _this.pager.count = _this.quizzes.length;
        });
    };
    QuizComponent.prototype.ngOnInit = function () {
        this.getQuiz();
    };
    Object.defineProperty(QuizComponent.prototype, "filteredQuizzes", {
        get: function () {
            return (this.quizzes) ?
                this.quizzes.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.onSelect = function (quiz, choice) {
        quiz.choices.forEach(function (x) {
            if (x.id !== choice.id)
                x.selected = false;
        });
        if (quiz.answered === true)
            quiz.answered = false;
        else
            quiz.answered = true;
    };
    QuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    QuizComponent.prototype.isAnswered = function (index) {
        return this.quizzes[index].choices.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    QuizComponent.prototype.isCompleted = function () {
        return this.quizzes.find(function (x) { return x.answered === false; }) ? false : true;
    };
    QuizComponent.prototype.onSubmit = function () {
        if (this.isCompleted()) {
            this.mode = 'result';
        }
        else {
            this.mode = 'alert';
        }
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    core_1.Component({
        selector: 'app-quiz',
        templateUrl: './quiz.component.html',
        styleUrls: ['./quiz.component.css'],
        providers: [quiz_service_1.QuizService]
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizComponent);
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=quiz.component.js.map