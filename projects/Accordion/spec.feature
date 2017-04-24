Scenario: A user clicks on an opened header
	Then this header should close
	And its content should disappear

Scenario: A user clicks on a closed header
	Given one header is already opened
	Then this header should open
	And its content should appear
	And other headers should close
	And their content should disappear

Scenario: A user clicks on a closed header
	Given no other header is opened
	Then this header should open
        And its content should appear
