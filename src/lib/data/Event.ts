import { Sequelize } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "src/lib/data/gdsc.db",
});
export const Event = sequelize.define(
  "Event",
  {
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
    },
    link: {
      type: DataType.STRING,
      allowNull: false,
    },
    imagePath: {
      type: DataType.STRING,
      allowNull: false,
    },
    altImagePath: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
