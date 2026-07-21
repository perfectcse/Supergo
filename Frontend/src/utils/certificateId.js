export const generateCertificateId = () => {
  const year = new Date().getFullYear();

  const randomCode = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  return `CERT-${year}-${randomCode}`;
};