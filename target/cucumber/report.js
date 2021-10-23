$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TF_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Senario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"Bank \u0026 Cash\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"New Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enter on accounttitle \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters on description\"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters intialbalance on \"\u003cintialBalance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountnum on \"\u003caccountNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters contactperson on \"\u003ccontactPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone on \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters bankurl on \"\u003cinternetbankinurl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "intialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetbankinurl"
      ],
      "line": 25,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "banking",
        "saving",
        "7777",
        "123456",
        "Savi",
        "789123",
        "https://www.chase.com/"
      ],
      "line": 26,
      "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1971125300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Senario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"Bank \u0026 Cash\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"New Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enter on accounttitle \"banking\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters on description\"saving\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters intialbalance on \"7777\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountnum on \"123456\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters contactperson on \"Savi\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters phone on \"789123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters bankurl on \"https://www.chase.com/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.User_is_on_Techfios_login_page()"
});
formatter.result({
  "duration": 1287133600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.User_enters_username_as(String)"
});
formatter.result({
  "duration": 3106574900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3071724200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signin",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 4908090000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 210228400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank \u0026 Cash",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 3062442700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 3708351600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "banking",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enter_on_accounttitle(String)"
});
formatter.result({
  "duration": 98873700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_on_description(String)"
});
formatter.result({
  "duration": 68393100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7777",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_intialbalance_on(String)"
});
formatter.result({
  "duration": 63244000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_accountnum_on(String)"
});
formatter.result({
  "duration": 81502900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savi",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_enters_contactperson_on(String)"
});
formatter.result({
  "duration": 72241100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789123",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_enters_phone_on(String)"
});
formatter.result({
  "duration": 62854900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.chase.com/",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.user_enters_bankurl_on(String)"
});
formatter.result({
  "duration": 76220700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 16
    }
  ],
  "location": "LoginStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 4125015100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 149681900,
  "status": "passed"
});
formatter.after({
  "duration": 663243800,
  "status": "passed"
});
});