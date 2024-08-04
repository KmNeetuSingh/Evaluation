const express = require('express');
const bodyParser = require('body-parser');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', courseRoutes);
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
