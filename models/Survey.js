const mongoose = require('mongoose');
const { Schema } = mongoose; 
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},//the relationship between the survey and particular user.  
  dateSent: Date,
  lastResponded: Date
});
      /*Collectionname*/  /*CollectionSchema>*/
mongoose.model('surveys', surveySchema); //mongoose first loads up 'surveys' model 
 //whenever it saves a record to the survey collection, it will look at the Schema up