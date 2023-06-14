Feature: to validate the amazon application login functionality
Scenario: to validate login with valid username and invalid password
Given to launch chrome browser and maximize the window
And to launch the url of amazon application
And to pass valid username in email field
And to pass invalid password in password field
And to click the login button
Then close the browser

Scenario Outline:
Given to launch the chrome browser and mximize the window
And to launch the url of amazon application
And to pass username"<username>" in email field
And to pass password "<password>"in password field
And to click the login button
Then Close the browser
Examples:
|username|password|
|vimalraj|12345|
|manju|12345|
|R jeeva|sathyanatharaj|