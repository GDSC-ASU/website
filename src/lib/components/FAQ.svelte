<script lang="ts">
    import type FAQ from "$lib/models/FAQ";

    export let faq: FAQ;
</script>

{#if faq}
    <div class="text-center m-[20px]">
        <h1 class="text-[20px] md:text-[35px] text-grey-2 font-bold">
            {faq.question}&quest;
        </h1>
        <h2 class="text-[15px] md:text-[20px] text-grey-1">{faq.answer}</h2>
    </div>
{/if}
