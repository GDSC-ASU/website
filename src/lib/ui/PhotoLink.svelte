<script lang="ts">
  export let link: string;
  export let imagePath: string;
</script>

<a href={link} target="_blank">
  <img
    alt={link}
    src={imagePath}
    class="w-[25px] h-[25px] inline mt-[15px] mr-[20px]"
  />
</a>
