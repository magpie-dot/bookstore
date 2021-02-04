import Joi from "joi";

const schemaFirstName = Joi.string().min(4).max(50).required();
const schemaLastName = Joi.string().min(5).max(50).required();
const schemaCity = Joi.string().required();
const schemaZipCode = Joi.string().regex(/\d{2}-\d{3}/).required();


const checkValidation = (formData) => {
    let firstNameValidation, lastNameValidation, cityValidation, zipCodeValidation;
    firstNameValidation = schemaFirstName.validate(formData.first_name)
    lastNameValidation = schemaLastName.validate(formData.last_name)
    cityValidation = schemaCity.validate(formData.city)
    zipCodeValidation = schemaZipCode.validate(formData.zip_code)

    const validation = {
        firstNameValidation,
        lastNameValidation,
        cityValidation,
        zipCodeValidation
    }
    console.log(validation);

    return validation
}

export default checkValidation