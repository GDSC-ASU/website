import { Member } from "$lib/db/types/Member";

export default class MemberRequest {
	//Not implemented yet
	public static async getAllMembers(years?: string) {
		const members = await Member.findAll();
		return members.map((member) => member.toJSON());
	}
	public static async createMember(body: any) {
		const member = await Member.create(body);
		return member;
	}
	public static async updateMember(body: any) {
		const member = await Member.findByPk(body.id);
		if (!member) {
			throw new Error("Member not found");
		}
		await member.update(body);
		return member.toJSON();
	}
	public static async deleteMember(body: any) {
		const member = await Member.findByPk(body.id);
		if (!member) {
			throw new Error("Member not found");
		}
		await member.destroy();
		return { message: "Deleted" };
	}
	//Not implemented yet
	public static async getYears() {
		return "2024";
	}
}
