const app = require('./app');

app.listen(app.get('PORT'), () => {
  console.log(`the server is running in http://localhost:${app.get('PORT')}`);
})