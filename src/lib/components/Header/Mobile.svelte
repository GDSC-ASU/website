<script lang="ts">
	import MenuIcon from "$lib/ui/MenuIcon.svelte";
	import RouteLink from "$lib/ui/RouteLink.svelte";
	import { page } from "$app/stores";
	import Separator from "../Separator.svelte";

	$: path = $page.url.pathname;
	$: hashPath = $page.url.hash;

	let showMenu = false;
</script>

<div class="my-[25px] mx-[15px] flex justify-between">
	<div>
		<img
			class="block w-[264px] md:w-[290px]"
			width={290}
			height={45}
			alt="GDSC - ASU"
			src="/images/gdsc-logo.png"
		/>
	</div>
	<div>
		<button on:click={() => (showMenu = !showMenu)} class="pt-[10px]">
			<MenuIcon />
		</button>
	</div>
</div>
<div class="mx-[15px]">
	<Separator />
</div>

{#if showMenu}
	<div
		class="fadeIn absolute z-[5] w-full w-[100%] bg-white p-[30px] p-[20px]"
	>
		{#key [path, hashPath]}
			<div
				class=" grid place-items-center bg-white text-center uppercase"
			>
				<div class="p-[16px]">
					<nav on:click={() => (showMenu = !showMenu)}>
						<RouteLink
							title="Events"
							href="#events"
							_class="block text-[20px] p-[10px]"
						/>
						<RouteLink
							title="Our Team"
							href="#team"
							_class="block text-[20px] p-[10px]"
						/>
						<RouteLink
							title="FAQs"
							href="#faqs"
							_class="block text-[20px] p-[10px]"
						/>
						<RouteLink
							title="Follow Us"
							href="#footer"
							_class="block text-[20px] p-[10px]"
						/>
					</nav>
				</div>
			</div>
		{/key}
	</div>
{/if}

<style>
	.fadeIn {
		animation: fadeInMotion 400ms;
	}

	@keyframes fadeInMotion {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
