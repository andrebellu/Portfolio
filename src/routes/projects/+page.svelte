<script>
  import Animate from "../../components/Animate.svelte";

  import Cards from "../../components/Cards.svelte";
  import Filter from "../../components/Filter.svelte";
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
