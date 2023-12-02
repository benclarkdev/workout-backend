const asyncHandler = require('express-async-handler');

const pageCurrent = asyncHandler(async (req,res,next) => {
  return res.render('workout/current');
});

const pagePast = asyncHandler(async (req,res,next) => {
  return res.render('workout/past');
});

module.exports = {
  pageCurrent,
  pagePast
};