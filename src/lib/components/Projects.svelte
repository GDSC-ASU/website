<script lang="ts">
    import { default as ProjectV } from "./Project.svelte";
    import type Project from "$lib/models/Project";
    import { onMount } from "svelte";
    import ProjectRequests from "$lib/utils/requests/ProjectRequests";

    let projects: Project[];

    onMount(async () => {
        projects = await ProjectRequests.getProjects();
    });
</script>

<!-- <div class="bg-[url('/images/projects-bg.svg')] bg-cover bg-repeat"> -->
<div>
    {#if projects}
        <div class="h-[100%] px-[65px] ">
            <h1 class="font-bold text-[35px] text-grey-2">Projects</h1>
            <h2 class="mt-[10px] mb-[15px] text-[20px] text-grey-1">
                Projects done by our chapter to help the local and global
                community.
            </h2>
            <!-- <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> -->
            <div class="flex flex-wrap justify-center">
                {#each projects as project}
                    <ProjectV {project} />
                {/each}
            </div>
        </div>
    {/if}
</div>
