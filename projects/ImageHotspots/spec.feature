Feature: A world map with interactive hotspots.
	When the user presses a hotspot, a popup containing the information of that hotspot area.
	
	Scenario An user clicks on a closed hotspot
	Given No other hotspot is opened
	When The user clicked on a hotspot
	Then The clicked hotspot will open its popup
	
	Scenario An user clicks on a closed hotspot that is behide an opened hotspot
	Given Another hotspot is opened
	When The user clicked on a hotspot that is behide the opened hotspot
	Then The clicked hotspot that is behind will not be opened
	And The opened hotspot's popup will remain and behave like the scenario when an user clicks inside the popup

	Scenario An user clicks on a closed hotspot that is not behide an opened hotspot
	Given Another hotspot is opened
	When The user clicked on a hotspot that is not behide the opened hotspot
	Then The clicked hotspot's popup will be opened 
	and The opened hotspot will be closed

	Scenario An user clicks outside the popup of an opened hotspot 
	Given A hotspot is opened
	When The user clicks outside of the popup of that hotspot
	Then The opened hotspot will be closed

	Scenario An user clicks on the wiki link inside a popup
	Given A hotspot is opened
	when the user clicks on the wiki link of that popup
	Then The linked website will opened in another tab

	Scenario An user clicks other spot inside the popup of an opened hotspot
	Given A hotspot is opened
	When The user clicks inside of the popup of that hotspot
	Then Nothing happen

	Scenerio An user clicks on the map
	Given Nothing is toggle
	When The user clicks on the map
	Then Nothing happen

	Scenario An user clicks on the zoom in button
	Given The zoom in button is not toggle
	When The user clicks on the zoom in button
	Then Toggle zoom in
	And The cursor has a big magnifying glass following it

	Scenerio An user clicks on the zoom in button
	Given The zoom in button is toggle
	When The user clicks on the zoom in button
	Then Stop toggle zoom in
	And The big magnifying glass following the cursor disappears

	Scenerio An user clicks on the map when zoom in toggle
	Given Zoom in button toggle
	And map.size < Max_size
	When The user clicked on the map
	Then Enlarge the map by 2
	And The Screen center is the point clicked on the map
	And Stop toggle zoom in

	Scenerio An user clicks on the map when zoom in toggle
	Given Zoom in button toggle
	And map.size >= Max_size
	When The user clicked on the map
	Then Stop toggle zoom in

	Scenario An user clicks on the zoom out button
	Given The zoom out button is not toggle
	When The user clicks on the zoom out button
	Then Toggle zoom out
	And The cursor has a small magnifying glass following it

	Scenerio An user clicks on the zoom out button
	Given The zoom out button is toggle
	When The user clicks on the zoom out button
	Then Stop toggle zoom in
	And The small magnifying glass following the cursor disappears

	Scenerio An user clicks on the map when zoom out toggle
	Given Zoom out button toggle
	And map.size > Min_size
	When The user clicked on the map
	Then Shrink the map by 2
	And The Screen center is the point clicked on the map
	And Stop toggle zoom out
	
	Scenerio An user clicks on the map when zoom out toggle
	Given Zoom out button toggle
	And map.size <= Min_size
	When The user clicked on the map
	Then Stop toggle zoom out
