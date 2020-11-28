/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize';

const dbConf =
  (process.env.NODE_ENV)?.trim() === 'dev'
    ? {
      dialect: 'postgres' as const,
      host: 'localhost',
      database: 'urlshortener',
      user: 'docker',
      pass: 'docker',
    }
    : {
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
