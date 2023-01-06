import LocalizedStrings from "react-localization";
import { urls } from './pt/urls';

const statusCode = [100,101,102,200,201,202,204,303,305,307,400,401,402,403,404,405,408,409,500,501,502,503];

export const environments = new LocalizedStrings({
  pt: { ...urls, statusCode }
});