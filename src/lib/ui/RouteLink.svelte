<script lang="ts">
    import { page } from "$app/stores";

    import { onMount } from "svelte";
    import ComingSoon from "./ComingSoon.svelte";
    export let title: string;
    export let href = "#";
    export let _class: string = "";

    let isActive = false;
    export let isComingSoon = false;
    onMount(() => {
        isActive =
            $page.url.pathname.includes(href) || $page.url.hash.includes(href);
    });
</script>

<a {href} class:active={isActive} class={`${_class} hover:text-[#444] text-center md:inline-block`}>
    <div class="grid align-items-center">
        {title}
        {#if isComingSoon}
        <ComingSoon/>
        {/if}
    </div>
</a>

<style>
    a.active {
        color: #222;
        font-weight: bold;
    }
</style>
