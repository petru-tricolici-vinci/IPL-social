// src/emailValidator.ts
function isValidEmail(email: string): boolean {
  if (email.includes(' ')) return false;
  const atIndex = email.indexOf('@');
  if (atIndex === -1) return false;
  if (atIndex === 0 || atIndex === email.length - 1) return false;
  const domainPart = email.slice(atIndex + 1);
  const dotIndex = domainPart.indexOf('.');
  if (dotIndex === -1 || dotIndex === domainPart.length - 1) return false;
  return true;
}
module.exports = isValidEmail;
