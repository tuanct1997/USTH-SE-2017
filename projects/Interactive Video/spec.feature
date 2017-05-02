Interactive video on working out to help beginners 

Feature: Multiple choice questions
    
    An user is watching a video on working out and there are some questions appear for the user to answer which contain
  very important knowledge

    Scenario: The user is required to answer a question popped up on the screen to continue with the video
        Given user comes to a predefined time in the video
        And a multiple choice question automatically appears on the screen, pauses the video
        When user selects an answer
        Then highlight the right answer
        And give out the answer and explaination for the question, resumes the video
         
    Scenario: The user chooses to answer an optional question on the video
        Given user come to a predefined time in the video
        And a button indicates a multiple choice question appears, pauses the video
        When user selects the question button
        And selects an answer
        Then highlight the right answer
        And give out the answer and explaination for the question, resumes the video

Feature: Interactive summaries

    The summary for each exercise appear on the screen to provide the most important things that the user need to remember

    Scenario: The user reaches the end of an exercise and has the summary popped out
        Given user comes to the end of each exercise
        And a summary box appear, pauses the video
        When user selects the right summary choices
        Then Start the next exercise of the video

Feature: Images
    
    An image appear on the screen to help the user understand more about the anatomy of each muscle group

    Scenario: An image showing the anatomy of the muscle appears on the screen
        Given user somes to a predefined time in the video
        And an image appears on the screen, pauses the video
        When user chooses 'continue'
        Then resumes the video

Feature: Labels/Links

    Before every exercise, there's a label with the link to another site with detailed description about that exercise

    Scenario: The user is at the beginning of a new exercise and the label shown on the screen
        Given user comes to the beginning of an exercise
        When user clicks on the label
        Then open the link in the label which directs to a website with detailed description about the following exercise in a new tab


