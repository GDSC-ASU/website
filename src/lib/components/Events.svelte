<script lang="ts">
    import { default as EventV } from "./Event.svelte";
    import type Event from "$lib/models/Event";
    import { onMount } from "svelte";
    import EventRequests from "$lib/utils/requests/EventRequests";

    let events: Event[];

    onMount(async () => {
        events = await EventRequests.getEvents();
    });
</script>

<div class="md:w-auto mx-[0px] md:mx-[55px] xl:mx-[145px]">
    {#if events}
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
                    {#each events as event}
                        <EventV {event} />
                    {/each}
                </div>
            </div>
        </div>
    {/if}
</div>
