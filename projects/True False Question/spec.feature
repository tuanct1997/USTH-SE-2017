Feature: True/False Question
	A client want to play a true/false game

	Provide he/she a question with 2 answer: true or false. The questions can be images, videos, or a bunch of words. The player will be asked, and the program will return if it true or false.

Scenario: Dat want to play True/False Game
	Given image of Oslo 
	  And Oslo is the capital of Norway
	When he clicks yes
	  And he clicks check
	Then he got 1 point
	
Scenario: Hung want to play True/False Game
	Given image of Oslo
	  And Oslo is the capital of Norway
	When he clicks no
	  And he clicks check
	Then he got 0 point
	When he clicks show solution
	Then the solution is shown

Scenario: Long want to play True/False Game
	Given image of Oslo 
	  And Oslo is the capital of Norway
	When he clicks no
	  And he click check
	Then he got 0 point
	When he clicks Retry
	Then he answers it again

Scenario: Dat want to play the next question
	Given next button
	When he clicks
	Then next question appears
