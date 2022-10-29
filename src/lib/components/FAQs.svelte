<script lang="ts">
    import Google from "$lib/ui/Google.svelte";

    import { default as FAQV } from "$lib/components/FAQ.svelte";
    import type FAQ from "$lib/models/FAQ";
    import { onMount } from "svelte";
    import FAQRequests from "$lib/utils/requests/FAQRequests";

    let faqs: FAQ[];

    onMount(async () => {
        faqs = await FAQRequests.getFAQs();
    });
</script>

{#if faqs}
    <div class="w-[100%] my-[20px] ">
        <div class="w-[100%] grid place-items-center p-[40px] ">
            <div
                class="w-[85vw] h-[25.1vw] bg-[url('/images/faqs.png')] bg-cover grid place-items-center "
            >
                <div class="text-center">
                    <h1
                        class="text-[25px] md:text-[40px] font-bold text-grey-2 "
                    >
                        F.A.Q.
                    </h1>
                    <h2 class="text-[10px] md:text-[25px] text-grey-1 ">
                        Frequent Asked Questions about <Google
                            >Developer Student Clubs</Google
                        >
                    </h2>
                </div>
            </div>
        </div>
        <div class="w-[100%]">
            <div class="flex flex-wrap justify-center px-[35px]">
                {#each faqs as faq}
                    <FAQV {faq} />
                {/each}
            </div>
        </div>
    </div>
{/if}
