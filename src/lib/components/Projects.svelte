<script lang="ts">
  import { default as ProjectV } from "./Project.svelte";
  import type Project from "$lib/models/Project";
  import { onMount, type ComponentType } from "svelte";
  import ProjectRequests from "$lib/utils/requests/ProjectRequests";
  import ArrowDown from "$lib/ui/ArrowDown.svelte";
  import ArrowUp from "$lib/ui/ArrowUp.svelte";

  let projects: Project[];
  let visibleProjects: Project[];
  let moreThanThreeProjects = false;
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
    projects = await ProjectRequests.getProjects();
    visibleProjects = projects.flat();
    if (visibleProjects.length > 3) {
      visibleProjects = visibleProjects.slice(0, 3);
      moreThanThreeProjects = true;
    }
  });
</script>

<div class={`${projectsBg} bg-center bg-contain bg-no-repeat py-[100px]`}>
  <!-- <div class="bg-[url('/images/projects-bg.svg')] bg-cover bg-repeat"> -->
  <div class="md:w-auto mx-[0px] md:mx-[55px] xl:mx-[145px]">
    {#if visibleProjects}
      <div class="w-[100%] h-[100%]">
        <div class="px-[30px] md:px-0">
          <h1 class="font-bold text-[22px] md:text-[35px] text-grey-2">
            Projects
          </h1>
          <h2
            class="mt-[10px] mb-[15px] text-[16px] md:text-[20px] text-grey-1"
          >
            Projects done by our chapter to help the local and global community.
          </h2>
        </div>
        <div class="my-[25px] md:my-[55px] w-[100%] md:w-auto">
          <div class="flex flex-wrap justify-center">
            {#each visibleProjects as project}
              <ProjectV {project} />
            {/each}
          </div>
          {#if projects.length > 3}
            <div class="w-[100%] text-center my-[40px]">
              <button
                on:click={toggleViewMoreProjects}
                class="text-[#0086F8] text-center p-[5px] text-[18px] "
              >
                <p>{moreThanThreeProjects ? "View More" : "View Less"}</p>
                <p class="w-[100%] flex justify-center">
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
