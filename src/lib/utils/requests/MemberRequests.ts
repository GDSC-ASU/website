import type Member from "$lib/models/Member";

let members: Member[] = [
    {
        name: "Person1",
        role: "Core Team Member",
        pfp_link: "/sth",
        profile_link: "/sth",
    },
    {
        name: "Person2",
        role: "Core Team Member",
        pfp_link: "/sth",
        profile_link: "/sth",
    },
    {
        name: "Person3",
        role: "Core Team Member",
        pfp_link: "/sth",
        profile_link: "/sth",
    },
    {
        name: "Person4",
        role: "Core Team Member",
        pfp_link: "/sth",
        profile_link: "/sth",
    },
]

export default class MemberRequest {
    public static async getMembers(): Promise<Member[]> {
        return members;
    }

    public static async getMember(id: number): Promise<Member> {
        return members.find(member => (member.id as number) === id) as Member;
    }
}
