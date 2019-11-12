const Validator = require('validator');
const isEmpty =require('../../../intern_user_management/validator/isEmpty');
module.exports = function validateAddCategory(data) {
  let errors ={};
  //Soemthing needs to be passed
 data.category=!isEmpty(data.category)?data.category:"";
 data.ip=!isEmpty(data.ip)?data.ip:"";
  
 if(Validator.isEmpty(data.category))
 errors.category="Item cannot be empty!"
 
 if(Validator.isEmpty(data.ip))
 errors.ip="There is something wrong while getting IP";


 
  return{
    errors,
    isValid:isEmpty(errors)
  }
}