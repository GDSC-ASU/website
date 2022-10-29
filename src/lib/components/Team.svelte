<script lang="ts">
    import { default as TeamV } from "./TeamMember.svelte";
    import type Member from "$lib/models/Member";
    import { onMount } from "svelte";
    import MemberRequests from "$lib/utils/requests/MemberRequests";

    let team: Member[];
    let years: string[];
    let lastYear = "";

    async function changeYear(year: string) {
        team = await MemberRequests.getMembers(year);
    }

    onMount(async () => {
        years = await MemberRequests.getYears();
        lastYear = years[years.length - 1];
        team = await MemberRequests.getMembers(lastYear);
    });
</script>

<div>
    {#if team}
        <div class="h-[100%] px-[65px] ">
            <div class="flex justify-between">
                <div>
                    <h1 class="font-bold text-[35px] text-grey-2">Our Team</h1>
                    <h2 class="mt-[10px] text-[20px] text-grey-1">
                        Meet the teams that made it all possible.
                    </h2>
                </div>
                <div class="mt-[25px] text-grey-1">
                    <label for="years" class="p-[10px]">Chapter's Year:</label>
                    <select id="years" class="p-[10px]">
                        {#each years as year}
                            <option
                                selected={year === lastYear}
                                on:click={async () => await changeYear(year)}
                                >{year}</option
                            >
                        {/each}
                    </select>
                </div>
            </div>
            <!-- <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> -->
            <div class="flex flex-wrap justify-between px-[35px]">
                {#each team as member}
                    <TeamV {member} />
                {/each}
            </div>
        </div>
    {/if}
</div>
