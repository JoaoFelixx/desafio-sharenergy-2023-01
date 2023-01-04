import LocalizedStrings from "react-localization";
import { urls } from './pt/urls';

export const environments = new LocalizedStrings({
  pt: { ...urls }
});