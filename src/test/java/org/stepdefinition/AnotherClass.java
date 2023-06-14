package org.stepdefinition;

import org.cuc.BaseClass;
import org.cuc.pojoicic;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AnotherClass extends BaseClass {
	@Given("to launch the chrome browser and mximize the window")
	public void to_launch_the_chrome_browser_and_mximize_the_window() {
	   launchBrowser();
	   windowMaximize();
	}
pojoicic c;
	@Given("to pass username{string} in email field")
	public void to_pass_username_in_email_field(String em) {
		c=new pojoicic();
		passText(em, c.getUsername());
	    
	}

	@Given("to pass password {string}in password field")
	public void to_pass_password_in_password_field(String pass) {
		c=new pojoicic();
		passText(pass, c.getPassword());
	    
	}

	@Then("Close the browser")
	public void close_the_browser() {
	    closeEntireBrowser();
	}


}
