// Central place to update contact details before publishing.

// Central place to update contact details before publishing.
export const SMS_NUMBER = "+19103689373";
export const SMS_MESSAGE = "Hi Sean, I'm interested in EV financing options.";

export const whatsappLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || SMS_MESSAGE);
  return `sms:${SMS_NUMBER}?body=${message}`;
};
