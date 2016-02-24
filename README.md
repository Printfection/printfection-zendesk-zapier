# Welcome to the Printfection Gift URL Generation App

This app is built to do allow a Printfection Giveaway Gift URL to be generated and added to a Zendesk ticket. To do this the app leverages Zendesk's app api and a Zapier webhook that is connected to Printfection.

# Instructions

1. Navigate to your Zendesk Admin's Apps -> Manage page
2. Click `Upload App`
3. Upload this .zip file and click `Upload`
4. In the app configuration add your Zapier webhook URL (i.e. https://zapier.com/hooks/catch/6l2yey1/)
8. Go to a Zendesk ticket and use your new gift functionality

# Zapier Instructions

Here's a quick screenshot of the workflow you'll be creating: http://cl.ly/2p1f0A0u190r

1. Create a new Zapier Webhook Zap that will be used to receive these Zendesk ticket gift requests
2. Select the *Catch Hook* option for your new webhook
3. Copy the webhook URL provided and use that in *Step 4* above
4. Add Printfection as your 2nd action step in your Zap
5. Point to the Printfection Giveaway (must be running) that you want to generate gifts from
6. Add Zendesk as your 3rd action step in your Zap
7. Set Zendesk to *Find a Ticket* and in the required *Query* box use the _Querystring Ticket ID_ from your Webhook (http://cl.ly/1L0L1C3J0v1a)
8. Add Zendesk as your 4th action step in your Zap
9. Set Zendesk to *Update Ticket* and in the *Custom Value for Ticket ID* field use the ID from *Step 7*
10. In the *New Comment to Add to the Ticket* add some text and the _URL_ from *Step 5* (http://cl.ly/1l45453H1N3E), make sure to set the comment to show as _Private_ for internal use

# Using the App

In Zendesk you can go to any existing ticket and use the *Add a Gift URL to this Ticket* button to add a Gift URL to your ticket as a private comment.

# Copying or Updating this App

Want to update this basic app for your own Zendesk workflow? Feel free. Note that it is licensed under Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0).