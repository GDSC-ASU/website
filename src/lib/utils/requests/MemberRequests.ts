import type Member from "$lib/models/Member";

const members = [
	{
		name: "Person1",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2023",
	},
	{
		name: "Person2",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2023",
	},
	{
		name: "Person3",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2023",
	},
	{
		name: "Person4",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2023",
	},
	{
		name: "Person1",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2021",
	},
	{
		name: "Person2",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2021",
	},
	{
		name: "Person3",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2021",
	},
	{
		name: "Person4",
		role: "Core Team Member",
		pfp_link: "/images/logogen.png",
		profile_link: "/sth",
		year: "2021",
	},
];

const years = ["2021", "2023"];

export default class MemberRequest {
	public static async getMembers(year: string): Promise<Member[]> {
		return members.filter((member) => member.year === year);
	}

	public static async getYears(): Promise<string[]> {
		return years;
	}
}
