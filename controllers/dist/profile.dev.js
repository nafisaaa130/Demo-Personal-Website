"use strict";

exports.ProfileInformation = function (req, res, next) {
  res.render('profile/index', {
    pageTitle: 'Freelancer - Start Bootstrap Theme'
  });
};