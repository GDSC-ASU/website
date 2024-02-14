<script lang="ts">
    import Google from "$lib/ui/Google.svelte";

    import {default as FAQV} from "$lib/components/FAQ.svelte";
    import type FAQ from "$lib/models/FAQ";
    import {onMount} from "svelte";
    import FAQRequests from "$lib/utils/requests/FAQRequests";

    export let faqs: FAQ[];
</script>

{#if faqs}
    <div class="my-[20px] w-[100%]">
        <div class="grid w-[100%] place-items-center py-[40px]">
            <div
                class="grid h-auto w-full place-items-center bg-[url('/images/faqs.svg')] bg-contain bg-center bg-no-repeat md:h-[250px] md:w-[768px] xl:h-[400px] xl:w-[1354.5px]">
                <div class="pb-[20px] text-center">
                    <h1 class="text-[25px] font-bold text-grey-2 md:text-[40px]">
                        F.A.Q.
                    </h1>
                    <h2 class="text-[11px] text-grey-1 md:text-[22px] xl:text-[27px]">
                        Frequent Asked Questions about <Google
                            >&nbsp;Developer Student Clubs</Google>
                    </h2>
                </div>
            </div>
        </div>
        <div class="w-[100%]">
            <div class="grid grid-cols-1 px-[35px]">
                {#each faqs as faq}
                    <FAQV {faq} />
                {/each}
            </div>
        </div>
    </div>
{/if}
