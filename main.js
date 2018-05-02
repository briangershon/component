// Change `name` attribute in 5 seconds...
setTimeout(() => {
  document.getElementsByTagName('hello-world')[0].setAttribute('name', 'Joe');
}, 5000);
