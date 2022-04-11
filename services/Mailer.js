//Mailer.js has a capital 'M' becuase it exports a class
//passport.js has a lower 'p' because it doesn't export anything

const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) { //"content" is the html srting that we got from our surveyTemplate(survey) from surveyRoutes.js
    super();

     this.sgApi = sendgrid(keys.sendGridKey);
     this.from_email = new helper.Email('royisader@gmail.com');
     this.subject = subject;
     this.body = new helper.Content('text/html', content);
     this.recipients = this.formatAddresses(recipients); //helper function
  
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
