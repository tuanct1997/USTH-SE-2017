Single choice set

Feature: question sets with one correct answering alternative per question

Scenario: Question about Goji berries
	        Given question 1 "Goji berries are also known as..."
		          And "Catberries" anwser
		          And "Wolfberries" answer
		          And "Bearberries" answer
	        When player chooses Catberries answer
	        Then he has 0 point
		          And next question appear

Scenario: Question about origin of Goji berries
	        Given question 2 "Goji berries are native to..."
		          And "Africa" answer
		          And "Asia" answer
		          And "Europe" answer
	        When player chooses Asia answer
	        Then he has 1 point
		          And next question appear

Scenario: Question about condition of Goji berries
	        Given question 3 "Goji berries are usually sold..."
		          And "Pickled" answer
		          And "Frozen" answer
		          And "Dried" answer
	        When player chooses Dried answer
	        Then he has 2 point
		          And the result appear

Scenario: Scoreboard
	        Given "You got 2 of 3 correct"
		            And "Retry" button
		            And "Show solution" button
	        When player click retry button
	        Then return to question 1
	        When player click show solution button
	        Then show 3 answers of 3 questions
	
