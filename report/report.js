$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/icic.feature");
formatter.feature({
  "name": "to validate the amazon application login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "to validate login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "to launch chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Icic.to_launch_chrome_browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to launch the url of amazon application",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_launch_the_url_of_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Icic.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "to launch the chrome browser and mximize the window",
  "keyword": "Given "
});
formatter.step({
  "name": "to launch the url of amazon application",
  "keyword": "And "
});
formatter.step({
  "name": "to pass username\"\u003cusername\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "to pass password \"\u003cpassword\u003e\"in password field",
  "keyword": "And "
});
formatter.step({
  "name": "to click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "vimalraj",
        "12345"
      ]
    },
    {
      "cells": [
        "manju",
        "12345"
      ]
    },
    {
      "cells": [
        "R jeeva",
        "sathyanatharaj"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "to launch the chrome browser and mximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "AnotherClass.to_launch_the_chrome_browser_and_mximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to launch the url of amazon application",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_launch_the_url_of_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass username\"vimalraj\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "AnotherClass.to_pass_username_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass password \"12345\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "AnotherClass.to_pass_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AnotherClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "to launch the chrome browser and mximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "AnotherClass.to_launch_the_chrome_browser_and_mximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to launch the url of amazon application",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_launch_the_url_of_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass username\"manju\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "AnotherClass.to_pass_username_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass password \"12345\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "AnotherClass.to_pass_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AnotherClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "to launch the chrome browser and mximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "AnotherClass.to_launch_the_chrome_browser_and_mximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to launch the url of amazon application",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_launch_the_url_of_amazon_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass username\"R jeeva\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "AnotherClass.to_pass_username_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to pass password \"sathyanatharaj\"in password field",
  "keyword": "And "
});
formatter.match({
  "location": "AnotherClass.to_pass_password_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Icic.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AnotherClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});