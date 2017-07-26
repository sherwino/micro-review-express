const express          = require('express');
const aws              = require('aws-sdk');
const ensure           = require('connect-ensure-login');
const productAPIroutes = express.Router();
const multer           = require('multer');
const multerS3         = require('multer-s3');
const app              = express();
const path             = require('path');
const fs               = require('fs');
                         require('dotenv').config();
// in order to create the routes for the products you need to load the model
const ProductModel     = require('../models/productmod.js');
const s3               = new aws.S3();

// before you use Amazon AWS you need to set up the configuration file
// the AWS module is going to use the values from the .env file
// that way

aws.config.update({
  secretAccessKey:     process.env.AWS_ACCESS_KEY_ID,
  accessKeyId:         process.env.AWS_SECRET_ACCESS_KEY,
  region:              'us-east-1'
  // awsBucket:        process.env.S3_BUCKET
});

// multer uploads things
// this version was modified to upload to Amazon S3 simple storage

const myUploader       = multer({
	storage: multerS3({
		s3:                s3,
		bucket:            process.env.S3_BUCKET,
    dirname:           '/uploads',
    contentType:       multerS3.AUTO_CONTENT_TYPE,
    // body:           req.file.buffer,
    ACL:               'public-read-write',
    // metadata: (req, file, cb) => {
    //   cb(null, {fieldName: file.fieldname});
    // },

    // the key determines how the file is going to be named
    // from my understanding all of the files must have unique names
		key: (req, file, cb) => {
			console.log(file);
			cb(null, Date.now().toString() + file.originalname);
		},
	})
});


// LIST OF PRODUCTS ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// when angular makes a get request at this route /api/products
productAPIroutes.get('/api/products',
  // ensure.ensureLoggedIn('/login'),

  (req, res, next ) => {
    //give me all of the products, but sort them
    // { owner:    req.user._id },
    ProductModel
    .find()
    .sort( { _id: 1}) // this might not make sense until we have the dates value we want to show the most relevant products
    .exec((err, productList) => {
      if (err) {
        res.status(500).json({ message: 'Could not find any products'});
        return;
      }
      // instead of rendering a view, you are storing all of the results in a json file
      // if you navigate to api/products in your browser you should see all of the json files
      res.status(200).json(productList);
    }); //close exec()
  }); //close get '/api/lits'

  // // SEARCH PRODUCTS ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // // when angular makes a get request at this route /api/products
  // productAPIroutes.get('/search',
  //   // ensure.ensureLoggedIn('/login'),
  //
  //   (req, res, next ) => {
  //     //give me all of the products, but sort them
  //     // { owner:    req.user._id },
  //     ProductModel
  //     .find()
  //     .sort( { _id: 1}) // this might not make sense until we have the dates value we want to show the most relevant products
  //     .exec((err, productList) => {
  //       if (err) {
  //         res.status(500).json({ message: 'Could not find any products'});
  //         return;
  //       }
  //       // instead of rendering a view, you are storing all of the results in a json file
  //       // if you navigate to api/products in your browser you should see all of the json files
  //       res.status(200).json(productList);
  //     }); //close exec()
  //   }); //close get '/api/lits'



// CREATE NEW PRODUCT ROUTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

productAPIroutes.post('/api/products',
// we need to be logged in to create products
// we propbably should use something other than ensure
// ensure.ensureLoggedIn('/login'),
(req, res, next) => {
  const theprodBrand =     req.body.brand;
  const theprodName =      req.body.modelName;
  const theprodModel =     req.body.modelNum;
  const theprodUPC =       req.body.prodUPC;
  const theprodMfg =       req.body.mfgBy;
  const theprodParts =     req.body.prodParts;
  const theprodImg =       req.body.prodImg;

  if (!theprodBrand || !theprodName ) {
    res.status(400).json({ message: 'Please submit brand and model before proceeding'});
    return;
  }

  ProductModel.findOne(
    { prodName: theprodName },
    (err, prodFromDB) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong trying to check if the product existed'});
        return;
      }
      if (prodFromDB) {
        res.status(400).json({ message: 'The product already exist on the site, search for it above'});
        return;
      }
      const theProduct = new ProductModel({
        prodBrand:     theprodBrand,
        prodName:      theprodName,
        prodModel:     theprodModel,
        prodUPC:       theprodUPC,
        prodMfg:       theprodMfg,
        prodParts:     theprodParts,
        prodImg:       theprodImg,

      });
      // POST/SEND NEW PROJECT TO DB ROUTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      theProduct.save((err) => {
        console.log(theProduct);
        if (err) {
          res.status(500).json({ message: 'System was not able to save the new product'});
          return;
        }
        res.status(200).json(theProduct);
      });
    });
}); //close the post route





// SINGLE PROJECT PAGE ROUTE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

productAPIroutes.get('/projects/:id/',
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

productAPIroutes.get('/projects/:id/edit',
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
productAPIroutes.patch('/projects/:id/edit', (req, res, next) => {
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

productAPIroutes.post('/projects/:id/delete', (req, res, next) => {
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

productAPIroutes.get('/search', (req, res, next) => {
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


module.exports = productAPIroutes;
