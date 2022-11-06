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
<div class="md:w-auto mx-[0px] md:mx-[55px] xl:mx-[145px]">
    {#if projects}
        <div class="w-[100%] h-[100%]">
            <div class="px-[30px] md:px-0">
                <h1 class="font-bold text-[22px] md:text-[35px] text-grey-2">
                    Projects
                </h1>
                <h2
                    class="mt-[10px] mb-[15px] text-[16px] md:text-[20px] text-grey-1"
                >
                    Projects done by our chapter to help the local and global
                    community.
                </h2>
            </div>
            <div class="w-[100%] md:w-auto">
                <div class="flex flex-wrap justify-center">
                    {#each projects as project}
                        <ProjectV {project} />
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</div>
