const express          = require('express');
const aws              = require('aws-sdk');
const ensure           = require('connect-ensure-login');
const projectRouter    = express.Router();
const multer           = require('multer');
const multerS3         = require('multer-s3');
const app              = express();
const path             = require('path');
const fs               = require('fs');
                         require('dotenv').config();
const Project          = require('../models/projectmod.js');
const s3               = new aws.S3();
const year             = new Date().getFullYear();

aws.config.update({
  secretAccessKey:  process.env.AWS_ACCESS_KEY_ID,
  accessKeyId:      process.env.AWS_SECRET_ACCESS_KEY,
  region:           'us-east-1'
  // awsBucket:        process.env.S3_BUCKET
});

const myUploader       = multer({
	storage: multerS3({
		s3: s3,
		bucket:       process.env.S3_BUCKET,
    dirname:      '/uploads',
    contentType:  multerS3.AUTO_CONTENT_TYPE,
    // body:         req.file.buffer,
    ACL:          'public-read-write',
    // metadata: (req, file, cb) => {
    //   cb(null, {fieldName: file.fieldname});
    // },
		key: (req, file, cb) => {
			console.log(file);
			cb(null, Date.now().toString() + file.originalname);
		},
	})
});




// CREATE NEW PROJECT ROUTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// This route and layout shows the form and everything needed to create project
projectRouter.get('/projects/new',
// we need to be logged in to create projects
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {
    res.render('projects/new-project-view.ejs', {
      title:    'Project Man - Create a project',
      layout:   'layouts/list-layout',
      currYear:  year
    });

});

// POST/SEND NEW PROJECT TO DB ROUTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
projectRouter.post('/projects',
  ensure.ensureLoggedIn('/login'),

  //<input type="file name ="projectPhoto">
                      //  |
  myUploader.single('jobImg'),

  (req, res, next) => {

    console.log('FILE UPLOAD ------------------------');
    console.log('Successfully uploaded ' + req.file);
    // res.status(204).end();
    const theProject = new Project ({

      //the key is from the model, and the value is from the input form
      jobYear:        req.body.jobYear,
      jobNumber:      req.body.jobNumber,
      jobName:        req.body.jobName,
      jobClient:      req.body.jobClient,
      jobSubs:        req.body.jobSubs,
      jobType:        req.body.jobType,
      jobFee:         req.body.jobFee,
      jobImg:         `${req.file.location}`,
      // jobRenderImg:   `/uploads/${req.body.picName}`,
      jobAddress:     req.body.jobAddress,
      jobMasterperm:  req.body.jobMasterperm,
      jobPlbperm:     req.body.jobPlbperm,
      jobMechperm:    req.body.jobMechperm,
      jobGasperm:     req.body.jobGasperm,
      jobElecperm:    req.body.jobElecperm,
      jobOtherPerm:   req.body.jobOtherPerm,
      jobChangeorder: req.body.jobChangeorder,
      jobReimburse:   req.body.jobReimburse,
      jobPayroll:     req.body.jobPayroll,
      jobSubExp:      req.body.jobSubExp,
      jobAmtInv:      req.body.jobAmtInv,
      jobAmtRec:      req.body.jobAmtRec,
      jobAmtDue:      req.body.jobAmtDue,
      jobAmtRem:      req.body.jobAmtRem,
      jobProfit:      req.body.jobProfit,
      jobCurrProfit:  req.body.jobCurrProfit,
      jobMaterialExp: req.body.jobMaterialExp,
      createdBy:      req.user._id,
      updatedBy:      req.user._id

    });

    theProject.save((err) => {
      console.log('attempted to post form into DB');
      if (err) {
        next(err);
        return;
      }

      req.flash('success', 'Your project was saved succesfully');
      res.redirect('/projects');
    });
  }
);

// LIST OF PROJECTS ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
projectRouter.get('/projects',
  ensure.ensureLoggedIn('/login'),

  (req, res, next ) => {
    //give me all of the projects, but sort them
    // { owner:    req.user._id },
    Project
    .find()
    .sort( { jobNumber: 1})
    .exec((err, projectsList) => {
      if (err) {
        next(err);
        return;
      }
      res.render('projects/project-list-view.ejs', {
        title:              'Project Man - Project Log',
        layout:             'layouts/list-layout',
        projects:           projectsList,
        successMessage:     req.flash('success'),
        user:               req.user
      });
    });
  });

// SINGLE PROJECT PAGE ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

projectRouter.get('/projects/:id/',
  ensure.ensureLoggedIn('/login'),

  (req, res, next ) => {

  const projectID = req.params.id;

  Project.findById(projectID, (err, theProject) => {
    if(err) {
      next(err);
      return;
    }
    res.render('projects/project-detail-view.ejs', {
      title:  `Project Man ${theProject.jobNumber}`,
      layout: 'layouts/detail-layout',
      job:    theProject,
      errors: theProject.errors
    });
  });
});

// EDIT PROJECT PAGE ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

projectRouter.get('/projects/:id/edit',
  ensure.ensureLoggedIn('/login'),

  (req, res, next) => {

  const projectId   = req.params.id;
  //search for the product defined in URL
  Project.findById(projectId, (err, theProject) => {
    if (err) {
      next(err);
      return;
    }
  res.render('projects/edit-project-view.ejs', {
    title:    'Project Man - Edit project',
    layout:   'layouts/list-layout',
    job:       theProject,
    errors:    theProject.errors
  });
});
});
// params gets info from a URL
// so does query but query requires the url to be in a keyValue pair ?name=bob would be in the URL
// body gets stuff from inputs
//
//                      remeber :id is just a placeholder
//                      it could be whatever you want
projectRouter.patch('/projects/:id/edit', (req, res, next) => {
  const projectId = req.params.id;

  const projectChanges = {
    //the key is from the model, and the value is from the input form
    jobYear:        req.body.jobYear,
    jobNumber:      req.body.jobNumber,
    jobName:        req.body.jobName,
    jobClient:      req.body.jobClient,
    jobSubs:        req.body.jobSubs,
    jobType:        req.body.jobType,
    jobFee:         req.body.jobFee,
    jobImg:         `${req.file.location}`,
    // jobRenderImg:   `/uploads/${req.body.picName}`,
    jobAddress:     req.body.jobAddress,
    jobMasterperm:  req.body.jobMasterperm,
    jobPlbperm:     req.body.jobPlbperm,
    jobMechperm:    req.body.jobMechperm,
    jobGasperm:     req.body.jobGasperm,
    jobElecperm:    req.body.jobElecperm,
    jobOtherPerm:   req.body.jobOtherPerm,
    jobChangeorder: req.body.jobChangeorder,
    jobReimburse:   req.body.jobReimburse,
    jobPayroll:     req.body.jobPayroll,
    jobSubExp:      req.body.jobSubExp,
    jobAmtInv:      req.body.jobAmtInv,
    jobAmtRec:      req.body.jobAmtRec,
    jobAmtDue:      req.body.jobAmtDue,
    jobAmtRem:      req.body.jobAmtRem,
    jobProfit:      req.body.jobProfit,
    jobCurrProfit:  req.body.jobCurrProfit,
    jobMaterialExp: req.body.jobMaterialExp,
    createdBy:      Project.createdBy, //should add a eddited by in the model
    updatedBy:      req.user._id
  };
//this new method has three arguments
  Project.findByIdAndUpdate(
    projectId,                  //which document to change
    projectChanges,             //variable of the changes you want to make
    (err, theProject) => {      //the callback
      if (err) {
        next(err);
        return;
      }                        //end of error callback
                              //this is how you would redired to prodcut details page
                              // res.redirect(`/projects/${projectId}
    res.redirect('/projects/:id/');
    }
  );
});

// DELETE PROJECT PAGE ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

projectRouter.post('/projects/:id/delete', (req, res, next) => {
//                   calling  :id
  const projectId = req.params.id;

// this does db.projects.deleteOne({ _id: projectId  })
  Project.findByIdAndRemove(projectId, (err, theProject) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/projects');
  });
});

// SEARCH PROJECT PAGE ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

projectRouter.get('/search', (req, res, next) => {
  const searchTerm = req.query.projectSearchTerm;
  if (!searchTerm) {
    res.render('projects/project-list-view.ejs');
    return;
  }

// "nintendo" turns in the reg expression nintendo so anything that matches would be foudn
  const searchRegex = new RegExp(searchTerm, 'i');
  console.log(searchRegex);

  Project.find(
    { jobName: searchRegex },
    (err, searchResults) => {
      if (err) {
        next(err);
        return;
      }
        res.render('projects/project-list-view.ejs', {
          title:              `Project Man - ${searchRegex}`,
          layout:             'layouts/list-layout',
          projects:            searchResults,
          successMessage:     req.flash('success'),
          user:               req.user

        });
      }
  );
});


module.exports = projectRouter;
