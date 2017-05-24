Feature: Multiple Choice
A website provides a quiz with 4 answers.
User have to choose the right answer and check the result
If the answer is wrong, user can retry it.

Scenario: user choose an answer
Given user choose an answer and click check button
When the answer is uncorrect 
Then output should be "Your answer is wrong"
And give the Retry button

Scenario: user choose an answer
Given user choose an answer and click check button
When the answer is correct
Then output should be "Your answer is correct"
And give the Retry button

Scenario: user click Check button
Given user has selected an answer
When user click Check button
Then move to result page

Scenario: user click Retry button
Given in result page
When user click Retry button
Then move to question page
 
