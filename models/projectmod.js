const mongoose = require('mongoose');

const User = require('./usermod.js');

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    jobYear:        Number,
    jobNumber:      String,
    jobName:        String,
    jobClient:      String,
    jobSubs:        String,
    jobType:        String,
    jobFee:         String,
    jobAddress:     String,
    jobMasterperm:  String,
    jobPlbperm:     String,
    jobMechperm:    String,
    jobGasperm:     String,
    jobElecperm:    String,
    jobOtherPerm:   String,
    jobChangeorder: String,
    jobReimburse:   String,
    jobPayroll:     String,
    jobSubExp:      String,
    jobAmtInv:      String,
    jobAmtRec:      String,
    jobAmtDue:      String,
    jobAmtRem:      String,
    jobProfit:      String,
    jobCurrProfit:  String,
    jobMaterialExp: String,
    jobImgName:     String,
    jobImg:         String,

    //reference the id of the user
    createdBy:          { type: Schema.Types.ObjectId },
    updatedBy:          { type: Schema.Types.ObjectId }

    // this is the way I would write it if I wanted to make the user a subdoc
    // owner:          { type: User.schema }
  },
  {
    timestamps: true
  }

);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
