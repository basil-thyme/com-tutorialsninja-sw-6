$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktopspage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktops Test",
  "description": "As user I want to verify the product arranged in alphabetical order",
  "id": "desktops-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5861472700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to verify the product arranged in alphabetical order",
  "description": "",
  "id": "desktops-test;user-should-be-able-to-verify-the-product-arranged-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover and click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I pass selectMenu method name \"Show AllDesktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by position \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to verify that the product is arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 104560900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnDesktopsTab()"
});
formatter.result({
  "duration": 211270400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllDesktops",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 991573500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 27
    }
  ],
  "location": "DesktopsTestSteps.i_select_sort_by_position(String)"
});
formatter.result({
  "duration": 534108300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsTestSteps.i_should_be_able_to_verify_that_the_product_is_arranged_in_descending_order()"
});
formatter.result({
  "duration": 265504800,
  "status": "passed"
});
formatter.after({
  "duration": 697781300,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As user I want to navigate to Desktops, LaptopsAndNotebooks and Components menu successfully",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4141535200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to navigate to LaptopsAndNotebooks menu successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-navigate-to-laptopsandnotebooks-menu-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@regression"
    },
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover and click on Laptops \u0026 Notebooks tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I pass selectMenu method name \"Show AllLaptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify Laptops \u0026 Notebooks text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnLaptopsNotebooksTab()"
});
formatter.result({
  "duration": 163125400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show AllLaptops \u0026 Notebooks",
      "offset": 31
    }
  ],
  "location": "HomePageTestSteps.iPassSelectMenuMethodName(String)"
});
formatter.result({
  "duration": 725302300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iShouldBeAbleToVerifyLaptopsNotebooksText()"
});
formatter.result({
  "duration": 31054900,
  "status": "passed"
});
formatter.after({
  "duration": 691506700,
  "status": "passed"
});
formatter.uri("laptopsandnotebookspage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and notebooks page",
  "description": "\r\nAs a user I should be able to navigate laptops and notebooks page and place an order successfully",
  "id": "laptops-and-notebooks-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3934404200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to verify that user place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-page;user-should-be-able-to-verify-that-user-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@sanity"
    },
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on Laptops \u0026 Notebooks tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on \"Show All Laptops \u0026 Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Select Product \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I verify the productText \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on \"Add To Cart\" button on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the MacBook message \"Success: You have added MacBook to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on link “shopping cart” display on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the text \"Shopping Cart\" from MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the text \"MacBook\" product name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I change the quantity \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on \"Update\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the message \"Success: You have modified your shopping cart!\" on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the Total £737.45",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on \"Checkout\" button on MACBook page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify the text \"checkout\" on MacBook page shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the text \"New Customer\" on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \"Guest Checkout\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on \"Continue\" tab on MacBook page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter below details in the form",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "john123@gmail.com",
        "056981239",
        "CrossWay",
        "Slough",
        "363641",
        "United Kingdom",
        "Cardiff"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on \"Continue\" Button on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I add comments about your order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify the message \"Warning: Payment method required!\" on checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTestSteps.iMouseHoverAndClickOnLaptopsNotebooksTab()"
});
formatter.result({
  "duration": 170405800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Laptops \u0026 Notebooks",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOn(String)"
});
formatter.result({
  "duration": 677828800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iSelectSortBy(String)"
});
formatter.result({
  "duration": 477428500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iSelectProduct(String)"
});
formatter.result({
  "duration": 1234677600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheProductText(String)"
});
formatter.result({
  "duration": 42869100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add To Cart",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnMacBookPage(String)"
});
formatter.result({
  "duration": 58842600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added MacBook to your shopping cart!",
      "offset": 30
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMacBookMessage(String)"
});
formatter.result({
  "duration": 323441700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iClickOnLinkShoppingCartDisplayOnMacBookPage()"
});
formatter.result({
  "duration": 643143600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextFromMacBookPage(String)"
});
formatter.result({
  "duration": 37202500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextProductName(String)"
});
formatter.result({
  "duration": 29174600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iChangeTheQuantity(String)"
});
formatter.result({
  "duration": 126158300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Update",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnTab(String)"
});
formatter.result({
  "duration": 686010000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have modified your shopping cart!",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMessageOnMacBookPage(String)"
});
formatter.result({
  "duration": 39426000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "737",
      "offset": 20
    },
    {
      "val": "45",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTotal£(int,int)"
});
formatter.result({
  "duration": 36071900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnMACBookPage(String)"
});
formatter.result({
  "duration": 437706700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "checkout",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextOnMacBookPageShoppingCart(String)"
});
formatter.result({
  "duration": 31645600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheTextOnMacBookPage(String)"
});
formatter.result({
  "duration": 2038039800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guest Checkout",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnRadioButton(String)"
});
formatter.result({
  "duration": 60963700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnTabOnMacBookPage(String)"
});
formatter.result({
  "duration": 64329800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iEnterBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "duration": 1131918800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 12
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iClickOnButtonOnCheckoutPage(String)"
});
formatter.result({
  "duration": 2061299800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iAddCommentsAboutYourOrderIntoTextArea()"
});
formatter.result({
  "duration": 683326600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iCheckTheTermsConditionsCheckBox()"
});
formatter.result({
  "duration": 306584100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksTestPage.iClickOnContinue()"
});
formatter.result({
  "duration": 70104500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Warning: Payment method required!",
      "offset": 22
    }
  ],
  "location": "LaptopsAndNotebooksTestPage.iVerifyTheMessageOnCheckoutPage(String)"
});
formatter.result({
  "duration": 291108100,
  "status": "passed"
});
formatter.after({
  "duration": 746210500,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As user I want to navigate to login link and verify the login and logout functionality",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4140104500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to login and logout successfully",
  "description": "",
  "id": "login-functionality;user-should-be-able-to-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I pass selectMyAccountOptions method parameter \"Login\" on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter the below details in the form",
  "rows": [
    {
      "cells": [
        "magnussmith123@gmail.com",
        "smith123456"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify text \"My Account\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I pass selectMyAccountOptions method parameter \"Logout\" on my account page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify text \"Account Logout\" from homepage",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on continue button on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 48
    }
  ],
  "location": "LoginTestPage.iPassSelectMyAccountOptionsMethodParameterOnHomepage(String)"
});
formatter.result({
  "duration": 545074200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iEnterTheBelowDetailsInTheForm(DataTable)"
});
formatter.result({
  "duration": 203434600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnLoginButton()"
});
formatter.result({
  "duration": 678037100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyText(String)"
});
formatter.result({
  "duration": 43146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 48
    }
  ],
  "location": "LoginTestPage.iPassSelectMyAccountOptionsMethodParameterOnMyAccountPage(String)"
});
formatter.result({
  "duration": 785372100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 15
    }
  ],
  "location": "LoginTestPage.iVerifyTextFromHomepage(String)"
});
formatter.result({
  "duration": 33965800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestPage.iClickOnContinueButtonOnHomepage()"
});
formatter.result({
  "duration": 444850000,
  "status": "passed"
});
formatter.after({
  "duration": 713307200,
  "status": "passed"
});
formatter.uri("registerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality",
  "description": "As user I want to navigate to register link and verify the registration functionality",
  "id": "registration-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3947270500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to navigate to register page successfully",
  "description": "",
  "id": "registration-functionality;user-should-be-able-to-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I pass selectMyAccountOptions method parameter \"Register\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be able to verify \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 48
    }
  ],
  "location": "RegistrationTestPage.i_pass_selectMyAccountOptions_method_parameter(String)"
});
formatter.result({
  "duration": 873686200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 28
    }
  ],
  "location": "RegistrationTestPage.i_should_be_able_to_verify(String)"
});
formatter.result({
  "duration": 38286600,
  "status": "passed"
});
formatter.after({
  "duration": 708563600,
  "status": "passed"
});
});