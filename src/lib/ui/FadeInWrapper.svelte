<script lang="ts">
	import { fade } from "svelte/transition";
	import { inview } from "svelte-inview";

	let isInView: boolean;
</script>

<div
	class="wrapper"
	id="fff"
	use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fade class="box">
			<h3>Appears from nowhere</h3>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
				adipisci nihil iste.
			</p>
		</div>
	{/if}
</div>

<style>
	.wrapper {
		margin-top: 30px;
	}

	.box {
		width: 300px;
		border: 1px solid rgb(221, 221, 221);
		padding: 25px;
		border-radius: 10px;
	}
</style>
