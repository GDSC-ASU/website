import { DataTypes } from "sequelize";
import { sequelize } from "../connector";

export const Member = sequelize.define(
	"Member",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		pfp_link: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		profile_link: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		year: {
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
