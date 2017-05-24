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
var RESULTS = [
    { matrix: [101, 103, 102], quote: 'You are a dog' },
    { matrix: [104, 101, 103], quote: 'You are a cat' },
    { matrix: [102, 104, 101], quote: 'You are a fish' }
];
var ResultComponent = (function () {
    function ResultComponent(quizService) {
        this.quizService = quizService;
        this.lengthvar = {
            quiz: 3,
            result: 3
        };
    }
    ResultComponent.prototype.getQuiz = function () {
        var _this = this;
        this.quizService.getQuiz().then(function (quizzes) {
            _this.quizzes = quizzes;
        });
    };
    ResultComponent.prototype.ngOnInit = function () {
        this.getQuiz();
    };
    ResultComponent.prototype.getResult = function () {
        for (var i = 0; i < this.lengthvar.quiz; i++) {
            this.select = this.quizzes[i].choices.find(function (x) { return x.selected === true; });
            this.answers[i] = this.select.id;
        }
        ;
        for (var i = 0; i < this.lengthvar.result; i++) {
            if (this.results[i].matrix === this.answers)
                return this.results[i].quote;
        }
        ;
    };
    return ResultComponent;
}());
ResultComponent = __decorate([
    core_1.Component({
        selector: 'app-result',
        template: "<h4 class=\"alert alert-info text-sm-center\">{{getResult()}}</h4>",
        providers: [quiz_service_1.QuizService]
    }),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], ResultComponent);
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map