<script lang="ts">
	import { default as ProjectV } from "./Project.svelte";
	import type Project from "$lib/models/Project";
	import { onMount, type ComponentType } from "svelte";
	import ProjectRequests from "$lib/utils/requests/ProjectRequests";
	import ArrowDown from "$lib/ui/ArrowDown.svelte";
	import ArrowUp from "$lib/ui/ArrowUp.svelte";

	export let projects: Project[];

	let moreThanThreeProjects = false;
	let visibleProjects = projects.flat();
	if (visibleProjects.length > 3) {
		visibleProjects = visibleProjects.slice(0, 3);
		moreThanThreeProjects = true;
	}

	$: projectsBg = `bg-[url('/images/projects-mobile.svg')] ${
		moreThanThreeProjects
			? "md:bg-[url('/images/projects-md.svg')] xl:bg-[url('/images/projects.svg')]"
			: "md:bg-[url('/images/projects.svg')]"
	}`;

	function toggleViewMoreProjects() {
		if (moreThanThreeProjects) {
			visibleProjects = projects.flat();
			moreThanThreeProjects = false;
		} else {
			visibleProjects = projects.slice(0, 3);
			moreThanThreeProjects = true;
		}
	}

	onMount(async () => {
		projects = await ProjectRequests.getAllProjects();
	});
</script>

<div class={`${projectsBg} bg-contain bg-center bg-no-repeat py-[100px]`}>
	<!-- <div class="bg-[url('/images/projects-bg.svg')] bg-cover bg-repeat"> -->
	<div class="mx-[0px] md:mx-[55px] md:w-auto xl:mx-[145px]">
		{#if visibleProjects}
			<div class="h-[100%] w-[100%]">
				<div class="px-[30px] md:px-0">
					<h1
						class="text-[22px] font-bold text-grey-2 md:text-[35px]"
					>
						Projects
					</h1>
					<h2
						class="mt-[10px] mb-[15px] text-[16px] text-grey-1 md:text-[20px]"
					>
						Projects done by our chapter to help the local and
						global community.
					</h2>
				</div>
				<div class="my-[25px] w-[100%] md:my-[55px] md:w-auto">
					<div class="flex flex-wrap justify-center">
						{#each visibleProjects as project}
							<ProjectV {project} />
						{/each}
					</div>
					{#if projects.length > 3}
						<div class="my-[40px] w-[100%] text-center">
							<button
								on:click={toggleViewMoreProjects}
								class="p-[5px] text-center text-[18px] text-[#0086F8]"
							>
								<p>
									{moreThanThreeProjects
										? "View More"
										: "View Less"}
								</p>
								<p class="flex w-[100%] justify-center">
									{#if moreThanThreeProjects}
										<ArrowDown />
									{:else}
										<ArrowUp />
									{/if}
								</p>
							</button>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.bgProps {
		background-size: 600px 400px;
	}
</style>
