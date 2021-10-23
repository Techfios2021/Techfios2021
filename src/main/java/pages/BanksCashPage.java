package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BanksCashPage {
	
	WebDriver driver;
	
	public void bankscashpage(WebDriver driver) {
		this.driver = driver;
	}
	String accountTitle ="banking";
	String description = "saving";
	String intialBalance = "7777";
	String accountNumber = "123456";
	String contactPerson = "Ram";
	String phone   = "789123";
	String internetbankinurl = "https://www.chase.com/";
			
	@FindBy(how = How.XPATH, using ="//span[text()='Bank & Cash']")
	WebElement BANK_CASH_ELEMENT;
	@FindBy(how = How.XPATH, using ="//a[text()='New Account']")
	WebElement NEW_ACCOUNT_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement DESCRIPTION_ELEMENT;	
	@FindBy(how = How.XPATH, using ="//input[@id='balance']")
	WebElement INTIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using ="//input[@id='account_number']")
	WebElement ACCOUT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using ="//input[@id='contact_person']")
	WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using ="//input[@id='contact_phone']")
	WebElement PHONE_ELEMENT;
	@FindBy(how = How.XPATH, using ="//input[@id='ib_url']")
	WebElement BANK_URL_ELEMENT;
	@FindBy(how = How.XPATH, using="//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement SUBMIT_ELEMENT;
	
	
	public void clickonbankscashbutton() {
		BANK_CASH_ELEMENT.click();
	}
	
	public void clickonnewaccount() {
		NEW_ACCOUNT_ELEMENT.click();
	}
	
	public void insertaccounttitle(String accountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(accountTitle);
	}
	
	public void insertdescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}
	
	public void insertintialbalance(String intialBalance) {
		INTIAL_BALANCE_ELEMENT.sendKeys(intialBalance);
	}
	
	public void insertaccountnumber(String accountNumber) {
		ACCOUT_NUMBER_ELEMENT.sendKeys(accountNumber);	
	}
	
	public void insertcontactperson(String contactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
	}
	
	public void insertphonenumber(String phone) {
		PHONE_ELEMENT.sendKeys(phone);
	}
	
	public void insertbankurl(String internetbankinurl) {
		BANK_URL_ELEMENT.sendKeys(internetbankinurl);
	}
	
	public void clickonsubmit() {
		SUBMIT_ELEMENT.click();
	}
	
}
