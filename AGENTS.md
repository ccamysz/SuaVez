# Architecture rules

- Load Salesforce Embedded Messaging once through the app-level SalesforceChat component, retaining the vendor-managed widget across navigation to prevent duplicate chat sessions.