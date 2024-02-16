<script lang="ts">
	import { default as TeamV } from "./TeamMember.svelte";
	import type Member from "$lib/models/Member";
	import { onMount } from "svelte";
	import MemberRequests from "$lib/utils/requests/MemberRequests";

	export let team: Member[];
	export let years: string[];

	async function changeYear(year: string) {
		team = await MemberRequests.getMembers(year);
	}
</script>

<div class="mx-[0px] md:mx-[55px] md:w-auto xl:mx-[145px]">
	{#if team}
		<div class="h-[100%] w-[100%]">
			<div class="flex justify-between">
				<div class="px-[35px] md:px-0">
					<h1
						class="text-[22px] font-bold text-grey-2 md:text-[35px]"
					>
						Our Team
					</h1>
					<h2
						class="mt-[10px] mb-[15px] text-[16px] text-grey-1 md:text-[20px]"
					>
						Meet the teams that made it all possible.
					</h2>
				</div>
				<div
					class="my-[25px] hidden text-grey-1 md:my-[55px] md:inline"
				>
					<label for="years" class="p-[10px]">Chapter's Year:</label>
					<select
						id="years"
						class="p-[10px]"
						on:change={async (e) => {
							await changeYear(e.target.value);
						}}
					>
						{#each years as year, i}
							<option selected={i === years.length - 1}
								>{year}</option
							>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<!-- <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> -->
		<div class="w-[100%] md:w-auto">
			<div class="flex flex-wrap justify-center px-[35px]">
				{#each team as member}
					<TeamV {member} />
				{/each}
			</div>
		</div>
	{/if}
</div>
