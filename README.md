# Custom Hyperledger Explorer

Hyperledger Explorer is a simple, powerful, easy-to-use, highly maintainable, open source browser for viewing activity on the underlying blockchain network. Users have the ability to configure & build Hyperledger Explorer natively on macOS and Ubuntu. 

This repository uses Explorer's api to fetch data with new fresh design.

**Quick start**

 1. Install Dependencies
 `npm install`
 
 2. Export Your hosted explorer's endpoint 
 `export EXPLORER_URL='https://your-hosted-explorer-ip-or-link'`
 
 3. Start React Server
 `npm start`

**Docker support will be added in future**



## Features for next release

- **Transaction Subscription** ( You'll get notify for new transaction, New Block or even on new channel creation)
- **Totally Customization** according to your design just by changing Environment Variable.
- Minor Design Fixes.
- Also Moving from Shopify Polaris to Ant Design
- **New Public Blockchain Explorer**

***Note: A Separate Repo will be created for Public Blockchain Explorer***

A Big thanks to Maximilian Stoiber for create awesome [highly scalable react boilerplate](https://github.com/react-boilerplate/react-boilerplate). 
