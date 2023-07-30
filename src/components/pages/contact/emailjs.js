const emailjs = jest.createMockFromModule('@emailjs/browser');

const sendForm = jest
  .fn()
  .mockResolvedValue({ text: 'Email sent successfully' });

emailjs.sendForm = sendForm;

module.exports = emailjs;
