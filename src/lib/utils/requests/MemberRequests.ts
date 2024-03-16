import type Member from "$lib/entities/Member";
import Requests from "./Requests";

export default class MemberRequest {
	//Not implemented yet
	public static async getAllMembers(years?: string) {
		return await Requests.makeRequest("GET", "member", null)
			.then((resp) => resp.json())
			.then((projects) => projects.map((m: Member) => m as Member))
			.catch((err) => {
				console.log(err);
				return [];
			});
	}
	public static async createMember(body: any) {}
	public static async updateMember(body: any) {}
	public static async deleteMember(body: any) {}
	//Not implemented yet
	public static async getYears() {
		return ["2024"];
	}
}
