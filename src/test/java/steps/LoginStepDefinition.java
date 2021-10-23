package steps;


import org.openqa.selenium.support.PageFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.BanksCashPage;
import pages.Loginpage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {

	Loginpage loginPage;
	BanksCashPage banksCashPage;
	
	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, Loginpage.class);
		banksCashPage = PageFactory.initElements(driver, BanksCashPage.class);
		
	}
	
	@Given ("^User is on Techfios login page$") 
	public void User_is_on_Techfios_login_page()  {
		driver.get("https://techfios.com/billing/?ng=admin/");
		
	}
	
	@When ("^User enters username as \"([^\"]*)\"$")
	public void  User_enters_username_as(String username) throws InterruptedException {
		loginPage.insertUserName(username);
		Thread.sleep(3000);
	}
	
	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
		loginPage.insertPassword(password);
		Thread.sleep(3000);
	    
	}

	@And("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String button) throws Throwable {
	    switch (button) {
	    case "Signin":
	    	loginPage.clickSigninButton();
	    	Thread.sleep(3000);
	    	break;
	    case "Bank & Cash":
	    	banksCashPage.clickonbankscashbutton();
	    	Thread.sleep(3000);
	    	break;
	    case "New Account":
	    	banksCashPage.clickonnewaccount();
    	    Thread.sleep(3000);
	    	break;
	    case "Submit":
	    	banksCashPage.clickonsubmit();
	    	 Thread.sleep(3000);
	    default:
	    	System.out.println("Unble to click");
	    	break;
	    }
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
//		String expectedTitle = "Dashboard- iBilling";
//		String actualTitle = loginPage.getPageTitle();
//		Assert.assertEquals(expectedTitle, actualTitle);
//		System.out.println("User landed on Dashboard page");
		takeScreenshot(driver);
	}

	@Then("^User enter on accounttitle \"([^\"]*)\"$")
	public void user_enter_on_accounttitle(String accountTitle) throws Throwable {
	 banksCashPage.insertaccounttitle(accountTitle + generateRandom(999));   
	}

	@Then("^User enters on description\"([^\"]*)\"$")
	public void user_enters_on_description(String description) throws Throwable {
		banksCashPage.insertdescription(description);
	}
	
	@Then("^User enters intialbalance on \"([^\"]*)\"$")
	public void user_enters_intialbalance_on(String intialBalance) throws Throwable {
	   banksCashPage.insertintialbalance(intialBalance); 
	}

	@Then("^User enters accountnum on \"([^\"]*)\"$")
	public void user_enters_accountnum_on(String accountNumber) throws Throwable {
		banksCashPage.insertaccountnumber(accountNumber + generateRandom(999) );
	}


	@And("^User enters contactperson on \"([^\"]*)\"$")
	public void user_enters_contactperson_on(String contactPerson) throws Throwable {
		banksCashPage.insertcontactperson(contactPerson + generateRandom(999)); 
	}

	@And("^User enters phone on \"([^\"]*)\"$")
	public void user_enters_phone_on(String phone) throws Throwable {
		banksCashPage.insertphonenumber(phone + generateRandom(99));
	}

	@And("^User enters bankurl on \"([^\"]*)\"$")
	public void user_enters_bankurl_on(String internetbankinurl) throws Throwable {
		banksCashPage.insertbankurl(internetbankinurl);
	}
	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() throws Throwable {
		takeScreenshot(driver);
	}


	@After
	public void tearDown() {
		driver.close();
		driver.quit();

	}
}	

