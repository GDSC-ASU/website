<script lang="ts">
    import { goto } from "$app/navigation";

    import type Member from "$lib/models/Member";
    import Button from "$lib/ui/Button.svelte";
    export let member: Member;

    function openMemberProfile() {
        goto(member.profile_link);
    }
</script>

{#if member}
    <div
        class="text-center w-[200px] my-[30px] md:mx-[40px] grid place-items-center"
    >
        <img
            alt=""
            class="rounded-[100%]"
            height={273}
            width={273}
            src={member.pfp_link}
        />
        <h1 class="font-bold text-[20px]">{member.name}</h1>
        <h2 class="text-[15px]">{member.role}</h2>
        <Button
            title="View Profile"
            on:click={openMemberProfile}
            _class="mt-[20px] p-[10px] bg-[#F2F2F2] text-[#0086F8] hover:bg-[#0086F8] hover:text-[#F2F2F2] font-bold"
        />
    </div>
{/if}
