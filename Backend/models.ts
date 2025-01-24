import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('willis', 'postgres', '12341234', {
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
        console.log('Connectoin has been established sucessfully');
    }).catch((error: unknown) => {console.error('Unable to connect to the database:', error);

    });

    const User = sequelize.define(
        'User',
        {
          // Model attributes are defined here
          firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
          },
        },
        {
          // Other model options go here
        },
      );
      
      // `sequelize.define` also returns the model
      console.log(User === sequelize.models.User); // true
