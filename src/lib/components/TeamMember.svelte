<script lang="ts">
	import type Member from "$lib/entities/Member";
	export let member: Member;
</script>

{#if member}
	<div
		class="my-[30px] grid w-[200px] place-items-center text-center md:mx-[40px]"
	>
		<img
			alt=""
			class="rounded-[100%]"
			height={273}
			width={273}
			src={member.pfp_link}
		/>
		<h1 class="text-[20px] font-bold">{member.name}</h1>
		<h2 class="m-[20px] text-[15px]">{member.role}</h2>
		<a href={member.profile_link} target="_blank">
			<button
				class="click rounded-[8px] border-[2px] border-[#0086F8] bg-[#0086F8] p-[10px] font-bold text-[#fff] hover:bg-[#fff] hover:text-[#0086F8]"
			>
				View Profile
			</button>
		</a>
	</div>
{/if}

<style>
	.click:active {
		transform: scale(-0.95) rotate(180deg);
	}
</style>
