import { DataType } from "sequelize-typescript";
import connection from "$lib/data";

export const Member = connection.define(
	"Member",
	{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
		pfp_link: {
			type: DataType.STRING,
			allowNull: false,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		role: {
			type: DataType.STRING,
			allowNull: false,
		},
		profile_link: {
			type: DataType.STRING,
			allowNull: false,
		},
		year: {
			type: DataType.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		createdAt: false,
		updatedAt: false,
	},
);
