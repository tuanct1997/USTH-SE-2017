Feature: Drag and Drop question
  In order to enables the learner to assocate more than two elements to make it logical
  As an education system actor
  This contain both text and images as draggable alternatives

Scenario: User loads the app
  Loading...
  When User waits a few seconds
  Then App will appear

Scenario: User move the mouse 
  Given Set of answers
  When User moves the mouse on answer
  Then Background color of the question changes

Scenario: User drag answer to picture
  Given Picture and Set of answers
  When User drags an answer from answer field to the picture
  Then The answer will move to the picture

Scenario: User drag answer to outside of picture
  Given Picture and Set of answers
  When User drags an answer from answer field to invalid field
  Then The answer will not change postition

Scenario: User checks answer
  Given show answer button
  When User clicks on show answer
  Then The right answer will change to green
  And The wrong answer will change to red
