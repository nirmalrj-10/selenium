package org.cuc;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class pojoicic extends BaseClass{
	public pojoicic() {
		PageFactory.initElements(driver, this);

	}
	@FindBy(name = "email")
	private WebElement username;
	@FindBy(id = "ap_password")
	private WebElement password;
	@FindBy(id="signInSubmit")
	private WebElement loginbtn;
	public WebElement getUsername() {
		return username;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getLoginbtn() {
		return loginbtn;
	}
}
