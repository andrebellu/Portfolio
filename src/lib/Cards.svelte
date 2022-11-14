<script>
  import { filtered } from "../store.js";
</script>

<main>
  <div class="cards flex justify-around flex-wrap gap-9 mx-10 mb-10">
    {#each $filtered as project}
      <div
        class="card w-96 bg-base-100 shadow-xl outline outline-primary"
      >
        <div class="card-body">
          <h2 class="card-title justify-center">
            {project.name}
            <div class="badge {project.color}">{project.badge}</div>
          </h2>
          <p class="card-subtitle text-sm text-center">{project.description}</p>
          <!-- svelte-ignore security-anchor-rel-noreferrer -->
          <a href="https://github.com/andrebellu/{project.link}" class="btn btn-primary text-white" target="_blank">
            View Repository</a
          >
        </div>
      </div>
    {/each}
  </div>
</main>
