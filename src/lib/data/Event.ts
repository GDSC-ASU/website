
import { DataType } from "sequelize-typescript";
import connection from "$lib/data/gdscDB";

export const Event = connection.define(
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
