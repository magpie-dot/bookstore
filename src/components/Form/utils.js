import Joi from "joi";

const schemaFirstName = Joi.string().required();
const schemaLastName = Joi.string().required();
const schemaCity = Joi.string().required();
const schemaZipCode = Joi.string().regex(/\d{2}-\d{3}/).max(6).required();
const schemaStreet = Joi.string().required();
const schemaHouseNumber = Joi.string().required();
const schemaPhone = Joi.string().min(9).max(9).required();
const schemaMail = Joi.string().required();


const checkValidation = (formData) => {
    let firstNameValidation, lastNameValidation, cityValidation, zipCodeValidation, streetValidation, houseNumberValidation, phoneValidation, mailValidation;
    firstNameValidation = schemaFirstName.validate(formData.first_name).error ? false : true;
    lastNameValidation = schemaLastName.validate(formData.last_name).error ? false : true;
    cityValidation = schemaCity.validate(formData.city).error ? false : true;
    zipCodeValidation = schemaZipCode.validate(formData.zip_code).error ? false : true;
    streetValidation = schemaStreet.validate(formData.street).error ? false : true;
    houseNumberValidation = schemaHouseNumber.validate(formData.houseNumber).error ? false : true;
    phoneValidation = schemaPhone.validate(formData.phone).error ? false : true;
    mailValidation = schemaMail.validate(formData.mail).error ? false : true;

    const validation = {
        firstNameValidation,
        lastNameValidation,
        cityValidation,
        zipCodeValidation,
        streetValidation,
        houseNumberValidation,
        phoneValidation,
        mailValidation
    }
    return validation
}

export default checkValidation