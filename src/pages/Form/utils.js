import Joi from "joi";

const schemaFirstName = Joi.string().min(4).max(50).required();
const schemaLastName = Joi.string().min(5).max(50).required();
const schemaCity = Joi.string().required();
const schemaZipCode = Joi.string().regex(/\d{2}-\d{3}/).max(6).required();


const checkValidation = (formData) => {
    let firstNameValidation, lastNameValidation, cityValidation, zipCodeValidation;
    firstNameValidation = schemaFirstName.validate(formData.first_name).error ? false : true;
    lastNameValidation = schemaLastName.validate(formData.last_name).error ? false : true;
    cityValidation = schemaCity.validate(formData.city).error ? false : true;
    zipCodeValidation = schemaZipCode.validate(formData.zip_code).error ? false : true;

    const validation = {
        firstNameValidation,
        lastNameValidation,
        cityValidation,
        zipCodeValidation
    }
    return validation
}

export default checkValidation