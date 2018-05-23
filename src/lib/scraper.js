const checkEmail = (email) => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const scraper = (email) => {
  return new Promise((resolve, reject) => {
    if(checkEmail(email)) {
      setTimeout(() => {
        resolve('Scrape succeed');
      }, 500);
    } else {
      reject('Fail to scrap email');
    }
  });
};

export { scraper, checkEmail };