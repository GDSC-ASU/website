<script lang="ts">
    export let link: string;
    export let imagePath: string;
</script>

<a href={link} target="_blank">
    <img
        alt={link}
        src={imagePath}
        class="mt-[15px] mr-[20px] inline h-[25px] w-[25px]" />
</a>
