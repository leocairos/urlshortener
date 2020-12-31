/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize';

const dbConf = {
  dialect: 'mysql' as const,
  host: 'localhost',
  database: 'urlshortener',
  user: 'root',
  pass: 'MySecret@123',
};

const sequelize = new Sequelize(dbConf.database, dbConf.user, dbConf.pass, {
  host: dbConf.host,
  dialect: dbConf.dialect,
});

export default sequelize;
