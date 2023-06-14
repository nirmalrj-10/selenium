package org.stepdefinition;

import org.cuc.BaseClass;
import org.cuc.pojoicic;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Icic extends BaseClass{
	@Given("to launch chrome browser and maximize the window")
	public void to_launch_chrome_browser_and_maximize_the_window() {
	    launchBrowser();
	    windowMaximize();
	}
	@Given("to launch the url of amazon application")
	public void to_launch_the_url_of_amazon_application() {
	
		launchUrl("https://na.account.amazon.com/ap/signin?ie=UTF8&clientContext=132-5850572-6943913&openid.pape.max_auth_age=0&use_global_authentication=false&enableGlobalAccountCreation=1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&marketPlaceId=ATVPDKIKX0DER&signedMetricIdentifier=pjdsmDnaXhj%2FNbw9hCvWIQvTgX0htu%2BjAbCBVOtDWHM%3D&language=en_IN&pageId=lwa&arb=b09f3bcf-e644-4ffa-b0ed-0c8908e62bd1&openid.return_to=https%3A%2F%2Fna.account.amazon.com%2Fap%2Foa%3FmarketPlaceId%3DATVPDKIKX0DER%26arb%3D4340e11f-4744-46c2-b307-7418317adbe6%26language%3Den_IN&metricIdentifier=amzn1.application.7ff8a2be5dae490b9914b4f430ca5c4c&openid.assoc_handle=amzn_lwa_na&openid.mode=checkid_setup&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");

	
	}
	
pojoicic p;
	@Given("to pass valid username in email field")
	public void to_pass_valid_username_in_email_field() {
	p=new pojoicic();
	passText("nirmalrj", p.getUsername());
	
	
	}

	@Given("to pass invalid password in password field")
	public void to_pass_invalid_password_in_password_field() {
	    p=new pojoicic();
	    passText("12345", p.getPassword());
	}

	@Given("to click the login button")
	public void to_click_the_login_button() {
	    p=new pojoicic();
	    clickBtn(p.getLoginbtn());
	}

	@Then("close the browser")
	public void close_the_browser() {
	    closeEntireBrowser();
	}


}
