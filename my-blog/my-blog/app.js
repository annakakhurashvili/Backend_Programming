const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});