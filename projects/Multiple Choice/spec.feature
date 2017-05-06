Feature: Multiple Choice
A website provides a quizz game with 15 questions 
Each question have 4 answers, users have to choose one answer. If it is correct, then move to next question.
At first, user will have 3 "lifes"

Scenario: user choose an answer
Given the "life" set has 3 
When the answer is correct
Then output should be "Bingo!"
And move to next question
And the "life" sets still remains 3

Scenario: user choose an answer
Given The "life" set has 3
When the answer is incorrect at the first time
Then output should be "Wrong answer! Retry?"
And "Retry" button appears
And the "life" set has 2

Scenario: user press button "Retry"
Given The "life" sets has 2
When The answer of that question is wrong
Then Reset the answer of that question

Scenario: user choose an answer
Given The "life" set has 2
When the answer is incorrect at the second time
Then output should be "Wrong answer! Retry?"
And "Retry" button appears
And the "life" set has 1

Scenario: user press button "Retry"
Given The "life" sets has 1
When The answer of that question is wrong
Then Reset the answer of that question

Scenario: user choose an answer
Given The "life" set has 1
When the answer is incorrect at the third time
Then output should be "You are dead! Try the quizz again!"
And the "life" set has 0
And "Retry" button appears

Scenario: user press button "Retry"
Given The "life" sets has 0
When User answer wrong 3 times
Then Move to the first question
And the "life" sets has 3




