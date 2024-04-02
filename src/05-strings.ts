(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('productTitle: ', productTitle);

  const productDescription = "This product has ' in text";
  console.log('productDescription: ', productDescription);

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
  `;
  console.log('summary: ', summary);
})();
