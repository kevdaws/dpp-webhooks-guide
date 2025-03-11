"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export function WebhookEventSelector() {
  const [selectedEvent, setSelectedEvent] = useState("deployment-created")

  const eventPayloads = {
    "Merchant Boarded": {
      "EventType": "Merchant Boarded",
      "AccessToken": "A81BB3F5-781A-4A0B-A24C-0B0599C7734F",
      "DbaName": "EXAMPLE MERCHANT",
      "MID": "123456789012",
      "PaymentMethods": "Amex,CASH,CHECK,Discover,MasterCard,Visa",
      "RetailerId": "",
      "DBAAddress1": "123 Merchant Street",
      "DBAAddress2": "",
      "DBACity": "Fort Worth",
      "DBAState": "TX",
      "DBAZip": "76102",
      "SIC": "7538",
      "Phone": "1234561234",
      "MerStatus": "A",
      "TermNo": "001",
      "BankID": "1234",
      "TerminalStatus": ""
  },
    "Merchant Updated": {
      "EventType": "Merchant Updated",
      "MID": "6280123456789012",
      "DbaName": "EXAMPLE MERCHANT",
      "Fields": [{
              "FieldName": "TICKETHIGHCC",
              "OldValue": "0.00",
              "NewValue": "750.00"
          }
      ]
  },
    "CC Batch": {
      "EventType": "CC Batch",
      "MID": "123456789012",
      "DbaName": "EXAMPLE MERCHANT",
      "BatchDate": "09/12/2024",
      "BatchNumber": "254001",
      "BatchStatus": "OK",
      "TotalTransactions": "1",
      "SaleAmount": "225.00",
      "RefundAmount": "0.00",
      "NetAmount": "225.00"
  },
    "ACH Batch": {
      "EventType": "ACH Batch",
      "MID": "6280123456789012",
      "DbaName": "EXAMPLE MERCHANT",
      "BatchDate": "9/11/2024",
      "BatchStatus": "OK",
      "TotalTransactions": "1",
      "DebitAmount": "16399.90",
      "CreditAmount": "0.00",
      "NetAmount": "16399.90"
  },
    "ACH Reject": {
      "EventType": "ACH Reject",
      "MID": "6280123456789012",
      "DbaName": "EXAMPLE MERCHANT",
      "OrderId": "OrderId123",
      "TransactionId": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (GUID)", 
      "Type": "ACH",
      "ReturnedDate": "09/11/2024 20:00:20",
      "ReturnedCode": "R10",
      "Description": "R10-Customer Advises Not Authorized",
      "Amount": "7500.00"
  },
  "Transaction": {
    "EventType": "Transaction",
    "TransactionType": "SALE",
    "AccessToken": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (GUID)",
    "DbaName": "EXAMPLE MERCHANT",
    "Currency": "USD",
    "MID": "123456789012",
    "TerminalId": "001",
    "TransactionId": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (GUID)",
    "DateTime": "2024-09-12 14:48:04",
    "TransactionAmount": "750.00",
    "InvoiceNumber": "9005622812",
    "CardType": "VISA",
    "CardNumber": "411111******1111",
    "CardExpirateion": "**29",
    "AchAccountNumber": "",
    "AchRoutingNumber": "",
    "AchAccountType": "",
    "Discount": "0.00",
    "ProcessingFee": "0.00",
    "Tip": "0.00",
    "Tax": "0.0",
    "Surcharge": "0.00",
    "BatchNumber": "09122024",
    "Status": "APPROVED",
    "AuthCode": "012345",
    "AuthResponse": "",
    "AvsResponse": "Z",
    "CvvResponse": "",
    "CustomerId": "",
    "RecurringId": "",
    "RecurringType": "",
    "RecurringAmount": "0.00",
    "RecurringStartDate": "",
    "RecurringEndDate": "",
    "RecurringDayDetail": "",
    "RecurringMonthDetail": "",
    "VaultId": "",
    "VaultKey": "",
    "Customer": {
        "Name": "Example Customer",
        "Address": "",
        "City": "Fort Worth",
        "State": "TX",
        "PostalCode": "76102",
        "Country": "US",
        "EmailAddress": "",
        "Phone": ""
    },
    "Shipping": {
        "Name": " ",
        "Address": "",
        "City": "",
        "State": "",
        "PostalCode": "",
        "Country": "",
        "EmailAddress": "",
        "Phone": ""
    },
    "CustomFields": [{
            "Name": "CustomerID",
            "Value": "123456789"
        }, {
            "Name": "FormTitle",
            "Value": "EXAMPLE MERCHANT Form"
        }, {
            "Name": "SubmissionMethod",
            "Value": "Online Form (EXAMPLE MERCHANT)"
        }, {
            "Name": "OtherCustomField",
            "Value": "UserDefinedValue"
        }
    ]
},
  "Vault": {

  },
  "CC Chargeback": {
  
  }
  }

  return (
    <div className="space-y-4">
      <Tabs onValueChange={setSelectedEvent}>
        <TabsList className="grid grid-cols-2 md:grid-cols-8 w-full">
          <TabsTrigger value="Merchant Boarded">Merchant Boarded</TabsTrigger>
          <TabsTrigger value="Merchant Updated">Merchant Updated</TabsTrigger>
          <TabsTrigger value="CC Batch">CC Batch</TabsTrigger>
          <TabsTrigger value="ACH Batch">ACH Batch</TabsTrigger>
          <TabsTrigger value="ACH Reject">ACH Reject</TabsTrigger>
          <TabsTrigger value="Transaction">Transaction</TabsTrigger>
          <TabsTrigger value="Vault">Vault</TabsTrigger>
          <TabsTrigger value="CC Chargeback">CC Chargeback</TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className="bg-muted p-4 overflow-auto max-h-96">
        <pre className="text-sm">
          {JSON.stringify(eventPayloads[selectedEvent as keyof typeof eventPayloads], null, 2)}
        </pre>
      </Card>
    </div>
  )
}

