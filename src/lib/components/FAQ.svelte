<script lang="ts">
	import type FAQ from "$lib/entities/FAQ";

	export let faq: FAQ;
</script>

{#if faq}
	<div class="m-[20px] text-center">
		<h1 class="text-[20px] font-bold text-grey-2 md:text-[35px]">
			{faq.question}&quest;
		</h1>
		<h2 class="text-[15px] text-grey-1 md:text-[20px]">{faq.answer}</h2>
	</div>
{/if}
