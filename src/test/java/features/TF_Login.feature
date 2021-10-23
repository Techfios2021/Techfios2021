Feature: Techfios login functionality validation 

@Senario1
Scenario Outline: User should be able to login with valid credentials 
	Given User is on Techfios login page 
	When User enters username as "<username>" 
	When User enters password as "<password>"   
	And User clicks on "Signin"
	Then User should land on Dashboard page
	Then User clicks on "Bank & Cash"
	Then User clicks on "New Account"
     And User enter on accounttitle "<accountTitle>"    
     And User enters on description"<description>"      
     And User enters intialbalance on "<intialBalance>"    
     Then User enters accountnum on "<accountNumber>"
     And User enters contactperson on "<contactPerson>" 
     And User enters phone on "<phone>"
     And User enters bankurl on "<internetbankinurl>"
     And User clicks on "Submit" 
	Then User should be able to validate account created successfully 
	
     
	
	Examples:
	|username|password|accountTitle|description|intialBalance|accountNumber|contactPerson|phone|internetbankinurl|
	|demo@techfios.com|abc123|banking|saving|7777|123456|Savi|789123|https://www.chase.com/|
	
	
	
	