import bcrypt from "bcrypt";
import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/db";


// Define an interface for your user model
interface UserAttributes {
  full_name: string | null;
  email: string;
  phone?: string;
  password: string;
  role: string;
}

// Extend Model and use the defined interface to specify the structure
class User extends Model<UserAttributes> implements UserAttributes {
  public full_name!: string | null;
  public email!: string;
  public phone!: string | undefined;
  public password!: string;
  public role!: string;
}

const UserModel = User.init({
  full_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user"
  },
}, {
  sequelize,
  modelName: 'User',
});

UserModel.addHook('beforeCreate', (async (user: User, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
}));

export default UserModel;