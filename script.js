emailjs.sendForm('11100011', '11999220', form)
  .then(() => alert('Message sent!'))
  .catch(error => alert('Sending failed'));