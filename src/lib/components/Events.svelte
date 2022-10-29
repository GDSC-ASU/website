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

<div class="w-[100%] py-[40px]">
    {#if events}
        <div class="h-[100%] px-[65px] ">
            <h1 class="font-bold text-[35px] text-grey-2">Events</h1>
            <h2 class="mt-[10px] mb-[15px] text-[20px] text-grey-1">
                Take a closer look at our chapter's events!
            </h2>
            <!-- <div class="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> -->
            <div class="flex justify-between">
                <div class="scrollable">
                    {#each events as event}
                        <EventV {event} />
                    {/each}
                </div>
                <div class="hidden md:inline-block ml-[60px] flex justify-center">
                    <img
                        class="h-[390px]"
                        alt="aaaa"
                        src="/images/events-right.svg"
                    />
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .scrollable {
        display: inline-flex;
        justify-content: nowrap;
        width: 100%;
        white-space: nowrap;
        position: relative;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
    }
</style>
