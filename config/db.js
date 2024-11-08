const { Sequelize } = require('sequelize');

// 创建 Sequelize 实例，指定数据库连接字符串和 dialect
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',  // 指定数据库类型为 PostgreSQL
  logging: false        // 可选：关闭日志输出
});

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('PostgreSQL connection error:', err));

module.exports = sequelize;