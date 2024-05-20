const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Equipment = sequelize.define('equipment', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  status: { type: DataTypes.BOOLEAN, allowNull: false },
  installationDate: { type: DataTypes.DATE, allowNull: false }
})

const Type = sequelize.define('type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Data = sequelize.define('data', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  temparute: {type: DataTypes.STRING, allowNull: false},
  speed: {type: DataTypes.STRING, allowNull: false},
  pressure: {type: DataTypes.STRING, allowNull: false},
})

const Alerts = sequelize.define('alerts', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const AlertsDevice = sequelize.define('alerts_device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Alerts)
Alerts.belongsTo(User)

User.hasMany(Equipment)
Equipment.belongsTo(User)

Alerts.hasMany(AlertsDevice)
AlertsDevice.belongsTo(Alerts)

Type.hasMany(Equipment)
Equipment.belongsTo(Type)

Brand.hasMany(Equipment)
Equipment.belongsTo(Brand)

Equipment.hasMany(Alerts);
Alerts.belongsTo(Equipment);

Equipment.hasMany(Data)
Data.belongsTo(Equipment)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
  User,
  Equipment,
  Type,
  Brand,
  TypeBrand,
  Data,
  Alerts,
  AlertsDevice
}