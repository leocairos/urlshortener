const validURL = (url) => {
  let exp = '^(https?:\\/\\/)?'; // protocol
  exp += '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'; // domain name
  exp += '((\\d{1,3}\\.){3}\\d{1,3}))'; // OR ip (v4) address
  exp += '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'; // port and path
  exp += '(\\?[;&a-z\\d%_.~+=-]*)?'; // query string
  exp += '(\\#[-a-z\\d_]*)?$';

  const pattern = new RegExp(exp, 'i'); // fragment locator
  return !!pattern.test(url);
};

export default validURL;
