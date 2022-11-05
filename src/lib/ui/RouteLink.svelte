<script lang="ts">
    import { page } from "$app/stores";

    import { onMount } from "svelte";
    export let title: string;
    export let href = "#";
    export let _class: string = "";

    let isActive = false;

    onMount(() => {
        isActive =
            $page.url.pathname.includes(href) || $page.url.hash.includes(href);
    });
</script>

<a {href} class:active={isActive} class={`${_class} hover:text-[#444]`}>
    {title}
</a>

<style>
    a.active {
        color: #222;
        font-weight: bold;
    }
</style>
