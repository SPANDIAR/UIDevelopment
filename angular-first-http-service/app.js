const app = angular.module("integration", []);
app.controller("entryController", entryController);
app.controller("headerController", headerController);
app.controller("footerController", footerController);


function headerController(appServiceSrvc, loggingSrvc){
  loggingSrvc("headerController");
  this.headerTitle = appServiceSrvc.name;
}

function footerController(appServiceSrvc, loggingSrvc){
  loggingSrvc("footerController");
  this.footerTitle = appServiceSrvc.author + " - " + appServiceSrvc.company + " - version " + appServiceSrvc.version;
}

function entryController(loggingSrvc) {
  this.status = "Alive";
  this.repairDetail = [
    {
      "scheduleList": [],
      "listType": "Incremental",
      "lastReadDate": "1584326453452",
      "repairs": [
        {
          "repairId": "R449077207",
          "comment": "TopCase @CI ",
          "repairStatus": "RIP",
          "repairType": "ISR",
          "createdDate": 1584183502047,
          "customer": {
            "firstName": "Vicky Wai Kay",
            "lastName": "Leung",
            "phoneNum": "67793982",
            "alpha2CountryCode": "HK"
          },
          "product": {
            "serialId": "C02TH1RXGVC8"
          },
          "parts": [
            {
              "partNumber": "661-07946",
              "partDescription": "Top Case with Battery, ANSI, Space Gray",
              "partStatus": "ALLOCATED",
              "partSection": "QUOTED",
              "partAddedDate": 1584268741632,
              "partAddedUserId": "1936466563",
              "partAddedUserName": "Candy Cheng",
              "effectiveSequence": 1,
              "replacementSerialRequired": false,
              "eligibleForOrder": true
            },
            {
              "partNumber": "661-07946",
              "partDescription": "Top Case with Battery, ANSI, Space Gray",
              "partSection": "USED",
              "partAddedDate": 1584326436965,
              "partAddedUserId": "1146161718",
              "partAddedUserName": "Andriy Tang",
              "effectiveSequence": 1,
              "replacementSerialRequired": false,
              "eligibleForOrder": true,
              "order": {
                "orderedDate": 0,
                "userId": "1207817525",
                "preferredName": "Jerry Chu"
              }
            }
          ],
          "hazMat": false,
          "sapRepairStatus": "RLSD"
        },
        {
          "repairId": "R448574811",
          "comment": "MLB @CC",
          "repairStatus": "RFP",
          "repairType": "ISR",
          "createdDate": 1583752594649,
          "customer": {
            "firstName": "Hou Fung Felix",
            "lastName": "WONG",
            "phoneNum": "63358673",
            "alpha2CountryCode": "HK"
          },
          "product": {
            "serialId": "C02VL9BTHV2M"
          },
          "parts": [
            {
              "partNumber": "661-07652",
              "partDescription": "Logic Board, 3.1GHz, 8GB, 512GB, ETSI",
              "partStatus": "ORDERED",
              "partSection": "QUOTED",
              "partAddedDate": 1583752594670,
              "partAddedUserId": "1130033858",
              "partAddedUserName": "David Leung",
              "effectiveSequence": 1,
              "replacementSerialRequired": false,
              "eligibleForOrder": false,
              "order": {
                "purchaseOrderNumber": "4827119340",
                "orderStatus": "PRCD",
                "orderedDate": 1583752594671,
                "userId": "1130033858",
                "preferredName": "David Leung"
              }
            },
            {
              "partNumber": "661-07652",
              "partDescription": "Logic Board, 3.1GHz, 8GB, 512GB, ETSI",
              "partStatus": "ALLOCATED",
              "partSection": "USED",
              "partAddedDate": 1584007273109,
              "partAddedUserId": "1207821200",
              "partAddedUserName": "Eason Chan",
              "effectiveSequence": 1,
              "replacementSerialRequired": false,
              "eligibleForOrder": false,
              "order": {
                "orderedDate": 0,
                "userId": "1130033858",
                "preferredName": "David Leung"
              }
            }
          ],
          "hazMat": false,
          "sapRepairStatus": "RLSD"
        }
      ],
      "partSummary": [
        {
          "partNumber": "923-02650",
          "partDescription": "Battery, iPhone Xs Max",
          "partStock": "1"
        },
        {
          "partNumber": "661-13154",
          "partDescription": "Touch ID with Audio Board Flex, Space Gray",
          "partStock": "0"
        },
        {
          "partNumber": "661-02397",
          "partDescription": "LCD, Display Module",
          "partStock": "4"
        },
        {
          "partNumber": "661-8311",
          "partDescription": "Top Case with Battery",
          "partStock": "1"
        },
        {
          "partNumber": "661-09739",
          "partDescription": "Logic Board, 2.3GHz i5, 8GB, 256GB",
          "partStock": "2"
        },
        {
          "partNumber": "661-11232",
          "partDescription": "Display, iPhone XR",
          "partStock": "46"
        },
        {
          "partNumber": "ZA661-11022",
          "partDescription": "128GB, Red, CH, iPhone XR, CI/AR-ITS",
          "partStock": "7"
        },
        {
          "partNumber": "661-05608",
          "partDescription": "Silver Aluminum, 42mm, Apple Watch Series 2 ",
          "partStock": "0"
        },
        {
          "partNumber": "ZA661-11021",
          "partDescription": "128GB, White, CH, iPhone XR, CI/AR-ITS",
          "partStock": "7"
        },
        {
          "partNumber": "ZP661-03027",
          "partDescription": "128GB, Rose Gold, Non-Band 30, iPhone 6s Plus, Asia",
          "partStock": "6"
        },
        {
          "partNumber": "ZP661-09066",
          "partDescription": "Gold, 42mm, Watch Series 3 Cellular, English Sing",
          "partStock": "0"
        },
        {
          "partNumber": "PA661-05378",
          "partDescription": "Beats X, Black, Pacific",
          "partStock": "0"
        }
      ]
    }
  ];

  this.getCustomerDetails = function(index) {
    loggingSrvc("getCustomerDetails");
    this.customerDetails = this.repairDetail[0].repairs[index].customer;
  }

  //$http.get("http://localhost:3000/retailRepairSummary");
}
