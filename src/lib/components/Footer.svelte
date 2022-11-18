<script lang="ts">
  import Separator from "./Separator.svelte";
  import PhotoLink from "$lib/ui/PhotoLink.svelte";
</script>

<div class="md:w-auto mx-[35px] md:mx-[55px] xl:mx-[145px] my-[70px]">
  <Separator />
  <div class="hidden md:block mt-[70px]">
    <div class="flex justify-between">
      <div>
        <img
          class=""
          width={420}
          height={65}
          alt="GDSC - ASU"
          src="/images/gdsc-logo.png"
        />
      </div>
      <div class="text-grey-1">
        <h2 class="text-[25px] text-grey-2 w-[150px] ">Follow Us:</h2>
        <div>
          <PhotoLink
            link="https://www.facebook.com/GDSCASU"
            imagePath="/logos/facebook.png"
          />
          <PhotoLink
            link="https://linkedin.com/company/gdscasu"
            imagePath="/logos/instagram.png"
          />
          <PhotoLink
            link="https://www.linkedin.com/company/GDSCASU"
            imagePath="/logos/linkedin.png"
          />
          <PhotoLink
            link="https://github.com/GDSC-ASU"
            imagePath="/logos/github.png"
          />
          <PhotoLink
            link="https://gdsc.community.dev/applied-science-private-university/"
            imagePath="/logos/google.png"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="block md:hidden mt-[35px]">
    <img
      class=""
      width={290}
      height={45}
      alt="GDSC - ASU"
      src="/images/gdsc-logo.png"
    />
    <div class="text-grey-1 pt-[40px]">
      <h2 class="text-[25px] text-grey-2 w-[150px] ">Follow Us:</h2>
      <div>
        <PhotoLink
          link="https://www.facebook.com/GDSCASU"
          imagePath="/logos/facebook.png"
        />
        <PhotoLink
          link="https://linkedin.com/company/gdscasu"
          imagePath="/logos/instagram.png"
        />
        <PhotoLink
          link="https://www.linkedin.com/company/GDSCASU"
          imagePath="/logos/linkedin.png"
        />
        <PhotoLink
          link="https://github.com/GDSC-ASU"
          imagePath="/logos/github.png"
        />
        <PhotoLink
          link="https://gdsc.community.dev/applied-science-private-university/"
          imagePath="/logos/google.png"
        />
      </div>
    </div>
  </div>
</div>
