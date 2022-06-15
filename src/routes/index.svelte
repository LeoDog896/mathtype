<script lang="ts">
  import { MathQuill } from "svelte-mathquill";
  import { autofocus } from "$lib/autofocus";

  type Piece = {
    type: "text" | "math";
    content: string;
    editable?: boolean;
  }

  interface Section {
    name: string;
    pieces: Piece[];
    editable?: boolean;
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
      {#if section.editable}
        <input bind:value={section.name} use:autofocus on:blur={() => section.editable = false} placeholder="Section Name" class="text-bold text-lg">
      {:else}
        <p class="text-bold text-lg" on:dblclick={() => section.editable = true}>{section.name}</p>
      {/if}
      <div class="border-l border-gray-300 p-4">
        {#each section.pieces as piece}
          {#if piece.type == "text"}
            {#if piece.editable}
              <input on:blur={() => piece.editable = false} bind:value={piece.content} placeholder="Enter text..."/>
            {:else}
              <p on:dblclick={() => piece.editable = true}>{piece.content}</p>
            {/if}
          {:else if piece.type == "math"}
            <div class="mb-4">
              <MathQuill bind:latex={piece.content}/><br/>
            </div>
          {/if}
        {/each}
      </div>
      <button class="print:hidden" on:click={() => { section.pieces = [...section.pieces, { type: "math", content: "\\sqrt{x}" }] }}>Add Piece</button>
    </div>
  {/each}

  <button class="print:hidden mt-4 px-4 py-2 rounded-lg bg-blue-300 ring active:ring-blue-200" on:click={addSection}>Add Section</button>
</div>