// @ts-ignore
const packageJson = require("../../../package.json");

// TODO: customise this with your own settings!

export const fromEmail =
  '"GraphileBase" <adulenzy@gmail.com>';
export const awsRegion = "us-east-1";
export const projectName = GraphileBase(/[-_]/g, " ");
export const companyName = ePatriots; // For copyright ownership
export const emailLegalText =
  // Envvar here so we can override on the demo website
  process.env.LEGAL_TEXT || "< ePatriots >";
