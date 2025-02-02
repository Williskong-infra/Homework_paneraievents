import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize('willis', 'postgres', '12341234', {
    host: 'database-1.czuciaio074t.us-east-1.rds.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
  });

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch ((error) => {
    console.error('Unable to connect to the database:', error);
});

export const Users = sequelize.define(
    'Users',
    {
      // Model attributes are defined here
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING 
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      mobile: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      }
    }
  );

export const Events = sequelize.define(
    'Events',
    {
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      location: {
        type: DataTypes.STRING 
      },
      date: {
        type: DataTypes.DATE 
      },
      timeslot: {
        type: DataTypes.STRING,
      }
    },
    {
        timestamps: false
    }
  );

export const Booking = sequelize.define(
    'Booking',
    {
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.STRING 
      },
      event_id: {
        type: DataTypes.STRING,
      },
      attendence: {
        type: DataTypes.TIME,
      }
    }
  );


