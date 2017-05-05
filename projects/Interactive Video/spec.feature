Interactive video on working out to help beginners 

Feature: video player
    Scenario: User clicks on 'pause button'
        Given user wants to temporary stop the video
        When user clicks on the 'pause button'
        Then pauses the video

    Scenario: User clicks on 'full-screen button'
        Given user wants to view the video in full-screen
        When user clicks on 'full-screen'
        Then put the video on full-screen mode

    Scenario: User clicks on a certain time on the timeline of the video
        Given user wants to choose a certain play time
        When user clicks on a certain time on the timeline
        Then fastfoward the video to that play time

    Scenario: User hovers the mouse over the 'volume button'
        Given user wants to adjust the volume of the video
        When user hovers the mouse over the 'volume button'
        Then show the volume bar

    Scenario: User chooses a certain volume point
        Given the volume bar appears
        When user holds the pointer on volume bar
        And move the pointer
        Then adjust the volume of the video

Feature: Multiple choice questions
    
    An user is watching a video on working out and there are some questions appear for the user to answer which contain
  very important knowledge

    Scenario: A question popped up on the screen
        Given user comes to a predefined time in the video
        And a multiple choice question automatically appears on the screen, pauses the video
        When user selects an answer
        Then highlight the right answer
        And give out the answer and explaination for the question, resumes the video
         
    Scenario: An optional question on the video
        Given user come to a predefined time in the video
        And a button indicates a multiple choice question appears
        When user selects the question button
        Then show the question
        And pause the video

    Scenario: User chooses to answer the optional question
        Given user chooses to answer the optional question
        When user chooses an answer
        Then highlight the correct answer
        And give out explaination, resumes the video

Feature: Interactive summaries

    The summary for each exercise appear on the screen to provide the most important things that the user need to remember

    Scenario: The user reaches the end of an exercise
        Given a summary box appear
        And pauses the video
        When user selects the right summary choices
        Then Start the next exercise of the video
        When user selects the wrong summary choices
        Then notify the users about the number of incorrect choices

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


