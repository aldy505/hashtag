export default (_ctx, inject) => {
  function copyText(text) {
    return new Promise((resolve, reject) => {
      if (!text) {
        reject(new Error('text is empty'));
      }

      navigator.clipboard.writeText(text);
      resolve(text);
    });
  }

  inject('copyText', copyText);
};
