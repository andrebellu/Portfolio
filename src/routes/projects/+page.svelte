<script>
  import Animate from "../../lib/Animate.svelte";

  import Cards from "../../lib/Cards.svelte";
  import Filter from "../../lib/Filter.svelte";
</script>

<main>
  <Animate>
    <div class="flex justify-center flex-col items-center m-5">
      <h1 class="text-6xl text-glitch mb-2">Projects</h1>
			<Filter />
    </div>



    <Cards />

  </Animate>
</main>
