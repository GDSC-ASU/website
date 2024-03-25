import { DataTypes } from "sequelize";
import { sequelize } from "../connector";

export const FAQ = sequelize.define(
	"FAQ",
	{
		question: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answer: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	},
);
