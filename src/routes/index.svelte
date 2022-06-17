<script lang="ts">
  import { autofocus } from "$lib/autofocus";
  import Piece from "$lib/Piece.svelte"
  import { sections } from "$lib/sections"

  async function addSection() {
    $sections = [...$sections, {
      name: "New Section",
      pieces: [{ type: "math", content: "" }]
    }]
  }
</script>

<div class="m-8">
  {#each $sections as section, sectionIndex}
    <div class="block">
      <input
        bind:this={section.title}
        use:autofocus bind:value={section.name}
        placeholder="Section Name" class="text-bold text-lg"
        on:keydown={e => {
          if (e.key == "Enter" || e.key == "ArrowDown") {
            const firstPiece = section.pieces[0];
            firstPiece.element?.focus()
          } else if (e.key == "ArrowUp" && sectionIndex !== 0) {
            const selectedSection = $sections[sectionIndex - 1];
            selectedSection.pieces[selectedSection.pieces.length - 1].element?.focus()
          }

        }}
      >
      <div class="border-l border-gray-300 p-4 hover:cursor-text">
        {#each section.pieces as piece, pieceIndex}
          <Piece bind:section={section} {sectionIndex} bind:piece={piece} bind:pieces={section.pieces} {pieceIndex}/>
        {/each}
      </div>
    </div>
  {/each}

  <button class="print:hidden mt-4 px-4 py-2 rounded-full border border-black" on:click={addSection}>Add Section</button>
</div>