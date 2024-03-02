<script lang="ts">
  import { default as EventV } from "./Event.svelte";
  import type Event from "$lib/models/Event";
  import { onMount } from "svelte";
  import ArrowDown from "$lib/ui/ArrowDown.svelte";
  import ArrowUp from "$lib/ui/ArrowUp.svelte";

  export let events: Event[];
  let moreThanThreeEvents = false;
  let visibleEvents = events.flat();
  if (visibleEvents.length > 3) {
    visibleEvents = visibleEvents.slice(0, 3);
    moreThanThreeEvents = true;
  }

  function toggleViewMoreEvents() {
    if (moreThanThreeEvents) {
      visibleEvents = events.flat();
      moreThanThreeEvents = false;
    } else {
      visibleEvents = events.slice(0, 3);
      moreThanThreeEvents = true;
    }
  }
</script>

<div
  class="md:bg-none bg-[url('/images/events-mobile.svg')] bg-center bg-contain bg-no-repeat"
>
  <div class="md:w-auto mx-[0px] md:mx-[55px] xl:mx-[145px]">
    {#if events}
      <div class="flex justify-between">
        <div class="w-[100%] h-[100%]">
          <div class="px-[30px] md:px-0">
            <h1 class="font-bold text-[22px] md:text-[35px] text-grey-2">
              Events
            </h1>
            <h2
              class="mt-[10px] mb-[15px] text-[16px] md:text-[20px] text-grey-1"
            >
              Take a closer look at our chapter's events!
            </h2>
          </div>
          <div class="my-[25px] md:my-[55px] w-[100%] md:w-auto">
            <div class="flex flex-wrap justify-center">
              {#each visibleEvents as event}
                <EventV {event} />
              {/each}
            </div>
            {#if events.length > 3}
              <div class="w-[100%] text-center my-[40px]">
                <button
                  on:click={toggleViewMoreEvents}
                  class="text-[#0086F8] text-center p-[5px] text-[18px] "
                >
                  <p>{moreThanThreeEvents ? "View More" : "View Less"}</p>
                  <p class="w-[100%] flex justify-center">
                    {#if moreThanThreeEvents}
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
        <div class="sm:block hidden mt-[150px] h-[100%]">
          <img alt="" class="w-[18px] h-[100%]" src="/images/events.svg" />
        </div>
      </div>
    {/if}
  </div>
</div>
