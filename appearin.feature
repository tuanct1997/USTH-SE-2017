Feature: a webside create rooms to show all camera of member in rooms
  
       Scenario: ask users "enter the room"
       Given starting this web
       And starting actions
       When button "enter the room" is clicked
       Then go to the room
       And display camera of all member in room
	   
	   
	   Scenario: user want to mute micro
       Given in the room
	   And micro is opened
       When click button "micro"
       Then mute micro
      
	  
	   
	   Scenario: user want to open micro
       Given in the room
       And micro is muted
       When click botton "micro"
       Then open micro
       

	   
       Scenario: user want to disable camera
       Given in the room
       And camera is enabled
       When click botton "camera"
       Then disable camera
	   
	   
	   
	   Scenario: user want to enable camera
       Given in the room
       And camera is disabled
       When click botton "camera"
       Then enable camera
        	   
		
		
       Scenario: user want to chage setting about camera and sound
       Given in the room
       When click botton "cam/mic"
       Then display setting to user
	   And  users can change setting
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   
			   