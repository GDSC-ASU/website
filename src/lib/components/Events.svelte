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
	class="bg-[url('/images/events-mobile.svg')] bg-contain bg-center bg-no-repeat md:bg-none"
>
	<div class="mx-[0px] md:mx-[55px] md:w-auto xl:mx-[145px]">
		{#if events}
			<div class="flex justify-between">
				<div class="h-[100%] w-[100%]">
					<div class="px-[30px] md:px-0">
						<h1
							class="text-[22px] font-bold text-grey-2 md:text-[35px]"
						>
							Events
						</h1>
						<h2
							class="mt-[10px] mb-[15px] text-[16px] text-grey-1 md:text-[20px]"
						>
							Take a closer look at our chapter's events!
						</h2>
					</div>
					<div class="my-[25px] w-[100%] md:my-[55px] md:w-auto">
						<div class="flex flex-wrap justify-center">
							{#each visibleEvents as event}
								<EventV {event} />
							{/each}
						</div>
						{#if events.length > 3}
							<div class="my-[40px] w-[100%] text-center">
								<button
									on:click={toggleViewMoreEvents}
									class="p-[5px] text-center text-[18px] text-[#0086F8]"
								>
									<p>
										{moreThanThreeEvents
											? "View More"
											: "View Less"}
									</p>
									<p class="flex w-[100%] justify-center">
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
				<div class="mt-[150px] hidden h-[100%] sm:block">
					<img
						alt=""
						class="h-[100%] w-[18px]"
						src="/images/events.svg"
					/>
				</div>
			</div>
		{/if}
	</div>
</div>
