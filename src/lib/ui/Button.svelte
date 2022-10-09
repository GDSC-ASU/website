<script lang="ts">
    import type { ComponentType } from "svelte";

    export let title: string;
    export let icon: ComponentType | undefined = undefined;
    export let _class: string = "";

    const Icon = icon;
</script>

<button
    on:click
    class={`flex justify-between ${_class} bg-yellow hover:bg-[#FFD54F] rounded-[8px] text-white click `}
>
    {#if title.length > 0}
        <span class={`${!Icon ? "text-center w-full" : ""}`}>{title}</span>
    {/if}
    {#if icon !== undefined}
        <Icon />
    {/if}
</button>

<style>
    .click:active {
        transform: scale(-0.95) rotate(180deg);
    }
</style>
