<script lang="ts">
  import "../../node_modules/mathquill/build/mathquill.css"

  type Piece = {
    type: "text";
    content: string;
    editable?: boolean;
  }

  interface Section {
    name: string;
    pieces: Piece[];
  }

  let sections: Section[] = []

  function addSection() {
    sections = [...sections, {
      name: "New Section",
      pieces: []
    }]
  }

  function addPiece(section: Section, piece: Piece) {
    section.pieces = [...section.pieces, piece]
  }
</script>

<div class="m-8">
  {#each sections as section}
    <div class="block">
      <p class="text-bold text-lg">{section.name}</p>
      <div class="border-l border-gray-300 p-4">
        {#each section.pieces as piece}
          {#if piece.type == "text"}
            {#if piece.editable}
              <input on:blur={() => { piece.editable = false }} bind:value={piece.content} placeholder="Enter text..."/>
            {:else}
              <p on:dblclick={() => { piece.editable = true }}>{piece.content}</p>
            {/if}
          {/if}
        {/each}
      </div>
      <button class="print:hidden" on:click={() => { section.pieces = [...section.pieces, { type: "text", content: "hello" }] }}>Add Piece</button>
    </div>
  {/each}

  <button class="print:hidden mt-4 px-4 py-2 rounded-lg bg-blue-300 ring active:ring-blue-200" on:click={addSection}>Add Section</button>
</div>