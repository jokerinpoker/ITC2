require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const userRoutes = require('./routes/userRoutes');

const app = express();

// 中间件
app.use(express.json());

// 路由
app.use('/api/users', userRoutes);

// 数据库连接
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('PostgreSQL connection error:', err));

app.locals.pool = pool; // 将连接池添加到应用的本地变量，以便在控制器中访问

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));