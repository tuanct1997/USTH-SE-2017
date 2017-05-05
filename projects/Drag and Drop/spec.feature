Feature: Drag and Drop question
  In order to enables the learner to assocate more than two elements to make it logical
  As an education system actor
  This contain both text and images as draggable alternatives

Scenario: User choose topic to answer
  Given there are some topics to choose
  When User choose  topic "A"
  Then Set of question in topic A appear with notification " This is topic A"

Scenario: User choose question 
  Given Set of question in choosen topic
  When User choose question 
  Then Question appeared

Scenario: A diferrent situation
  Given Set of question in choosen topic
  When User choose a question when they havent done the previous one
  Then They should see "Please finish previous question"

Scenario: User answer question
  Given Picture and blocks of text
  When User drags and drops blocks of text to where the image represents it
  And User press "check answer" button
  Then They will see "You are corrected, Next question"

Scenario: A differrent situation
  Given Picture and blocks of text
  When User drags and drops blocks of text to where the image that not represents it
  And User press "check answer" button
  Then They will see "You are wrong , Try again"


Scenario: Finish topic
  Given Last question
  When User give right answer
  Then They will see "Congratulation you are now master in "A" Topic"
  And Notification appear "Return menu"
  Then They will see main page

Scenario: User give up
  Given Notification "You are wrong, Try again"
  When User give up
  And They press "Get Answer" button
  Then results

