import { Sequelize } from 'sequelize';

/* const sequelize = new Sequelize(
  'mysql://root:my-secret-pw@localhost:3306/urlshortener',
); */

const sequelize = new Sequelize('urlshortener', 'docker', 'docker', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
