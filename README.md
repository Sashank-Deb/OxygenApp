# OXYGEN (Implementing In App Nudges Using Angular)
Check out the code:
[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-ityo1f)
[UI on Behance](https://www.behance.net/gallery/124092919/In-app-Nudges-Bajaj-Finserv-HACKATHON21-(Team-Oxygen)/modules/705212435)

# Winners of ALL INDIA HACKATHON BY BAJAJ FINSERV
Designed and implemented an SDK using angular to an in-app tool to allow setting up in-app nudges for various use cases, tool to allow nudge configuration on screen without need of having to code them on the screen / per use case. My team stood third in the Hackathon for the same.

### Types of Nudges :
Below are the types of nudges that we implemented and can be customized from users end.
Capsule, Tooltip, Action Prompt, Beacon, Feedback, Spotlight, Alert, Highlighters, Circles, Blinkers, Stars 

### How a nudge should get trigger:
  a. Static Nudge: Placement of static nudges on the Sample app sections. These are admin configured nudges done through front end without need to code on the app.
  b. Automated event-based Nudge: Some nudges to trigger basis sample events / API or data set (tags) in a real-time manner. 
Example: When a user completes a payment and earns a reward the application will put an alert nudge on rewards icon highlighting that user has won a reward and can go to the section to check

### Working:
 1. Metric: Backend logic for the conversion ratio/ success of a particular nudge
 2. Governance Control (Optional): A governance control to be available as per below:
    b. Priority set: Setting of business product wise prioritization.
    c. Customer threshold: X no. of nudges could be triggered per customer


