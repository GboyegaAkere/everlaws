// Central place to update contact details before publishing.
export const WHATSAPP_NUMBER = "10000000000"; // replace with real number, digits only, country code first
export const WHATSAPP_MESSAGE = "Hi Sean, I'm interested in EV financing options.";

export const whatsappLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
