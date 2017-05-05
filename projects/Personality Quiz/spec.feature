Feature: Personality Quiz

	In order to gain more data about people's interest.

Background:
	Given User at home page 

Scenario: Check if the user like japanese animation or not
	Given question 1 "Do you like japanese animation?"
		And "Yes" option
		And "No" option
	When the user chooses 1 option
		And click Next
	Then the status bar is set to 1/3
		And the next question appears

Scenario: Check what is the user's most favorite food
	Given question 2 "What is your most favorite dessert?"
		And "Caramel Pudding" option
		And "Banana Sundae" option
		And "Goldflake Ice-cream" opption
	When the user chooses 1 option
		And click Next
	Then the status bar is set to 2/3
		And the next question appears

Scenario: Check the user is a dog person or a cat person
	Given question 3 "Are you a dog person or a cat person?"
		And "I'm a Dog person" option
		And "I'm a Cat person" option
	When the user chooses 1 option
		And click Next
	Then the status bar is set to 3/3
		And the result appears

Scenario: The user has finished all the questions
	Given the status bar is set to 3/3
		And the photo "Achievement: Finish All Questions" appear
	When the user closed the photo		
	Then return to the home page