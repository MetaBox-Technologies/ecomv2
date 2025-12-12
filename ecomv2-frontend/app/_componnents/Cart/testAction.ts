"use server";
import { z } from "zod";
import { schema } from "./formAction/checkOutFormValidationSchema/schema";
import { nameSchema, emailSchema, CountryCitySchema, phoneSchema, zipCodeSchema, addresSchema, stateSchema } from "./formAction/checkOutFormValidationSchema/schema";
import { error } from "console";


export default async function testAction(prevstate, formData) {

    
    const fnameR  = z.safeParse(nameSchema, formData.get("fname") ? formData.get("fname") : null);
    const lnameR  = z.safeParse(nameSchema, formData.get("lname") ? formData.get("lname") : null);
    const emailR  = z.safeParse(emailSchema, formData.get("email") ? formData.get("email"): null);
    const phoneR  = z.safeParse(phoneSchema, formData.get("phone") ? formData.get("phone") : null);
    const streetR  = z.safeParse(addresSchema, formData.get("address") ? formData.get("address") : null);
    const countryR  = z.safeParse(CountryCitySchema, formData.get("country") ? formData.get("country") : null);
    const cityR = z.safeParse(CountryCitySchema, formData.get("city") ? formData.get("city") : null)
    const stateR  = z.safeParse(stateSchema, formData.get("state") ? formData.get("state") : undefined);
    const zipR  = z.safeParse(zipCodeSchema, formData.get("zip") ? formData.get("zip") : undefined);



    const valid = {
        ...(fnameR.success && {fname:  formData.get("fname")}),
        ...(emailR.success && {email:  formData.get("email")}),
        ...(lnameR.success && {lname:  formData.get("lname")}),
        ...(phoneR.success && {phone:  formData.get("phone")}),
        ...(streetR.success && {address:  formData.get("address")}),
        ...(countryR.success && {country:  formData.get("country")}),
        ...(cityR.success && {city:  formData.get("city")}),
        ...(stateR.success && {state:  formData.get("state")}),
        ...(zipR.success && {zip:  formData.get("zip")}),
    }
    
    const errors = {
        ...(!fnameR.success && {fname:  fnameR.error.flatten().formErrors[0]}),
        ...(!lnameR.success && {email:  lnameR.error.flatten().formErrors[0]}),
        ...(!emailR.success && {lname:  emailR.error.flatten().formErrors[0]}),
        ...(!phoneR.success && {phone:  phoneR.error.flatten().formErrors[0]}),
        ...(!streetR.success && {address:  streetR.error.flatten().formErrors[0]}),
        ...(!countryR.success && {country:  countryR.error.flatten().formErrors[0]}),
        ...(!cityR.success && {city:  cityR.error.flatten().formErrors[0]}),
        ...(!stateR.success && {state:  stateR.error.flatten().formErrors[0]}),
        ...(!zipR.success && {zip:  zipR.error.flatten().formErrors[0]}),
    }

   

    
    return {...prevstate, valid:{...valid}, errors: {...errors}}
}