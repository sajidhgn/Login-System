import { Sequelize } from 'sequelize';

// Replace the following with your actual PostgreSQL database credentials
const sequelize = new Sequelize('loginsystem_db', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });

export default sequelize;