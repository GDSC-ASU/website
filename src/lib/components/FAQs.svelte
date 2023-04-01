<script lang="ts">
  import Google from "$lib/ui/Google.svelte";

  import { default as FAQV } from "$lib/components/FAQ.svelte";
  import type FAQ from "$lib/models/FAQ";
  import { onMount } from "svelte";
  import FAQRequests from "$lib/utils/requests/FAQRequests";

  export let faqs: FAQ[];
</script>

{#if faqs}
  <div class="w-[100%] my-[20px] ">
    <div class="w-[100%] grid place-items-center py-[40px] ">
      <div
        class="w-full h-auto md:w-[846.6px] md:h-[250px] xl:w-[1354.5px] xl:h-[400px]  bg-[url('/images/faqs.svg')] bg-contain bg-no-repeat bg-center grid place-items-center "
      >
        <div class="text-center pb-[20px]">
          <h1 class="text-[25px] md:text-[40px] font-bold text-grey-2 ">
            F.A.Q.
          </h1>
          <h2 class="text-[11px] md:text-[22px] xl:text-[27px] text-grey-1 ">
            Frequent Asked Questions about <Google
              >&nbsp;Developer Student Clubs</Google
            >
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
