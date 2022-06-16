<script lang="ts">
  import { MathQuill } from "svelte-mathquill";
  import { autofocus } from "$lib/autofocus";
  import { tick } from "svelte"

  type Piece = {
    content: string;
  } & ({ type: "text" } | { type: "math", element?: MathQuill })

  interface Section {
    name: string;
    pieces: Piece[];
  }

  let sections: Section[] = []

  async function addSection() {
    sections = [...sections, {
      name: "New Section",
      pieces: [{ type: "math", content: "" }]
    }]
  }
</script>

<div class="m-8">
  {#each sections as section}
    <div class="block">
      <input use:autofocus bind:value={section.name} use:autofocus placeholder="Section Name" class="text-bold text-lg">
      <div class="border-l border-gray-300 p-4">
        {#each section.pieces as piece, i}
          {#if piece.type == "text"}
            <input bind:value={piece.content} placeholder="Enter text..."/>
          {:else if piece.type == "math"}
            <div class="mb-4">
              <MathQuill bind:this={piece.element} bind:latex={piece.content}
              
              on:enter={async () => {
                section.pieces = [...section.pieces, { type: "math", content: "" }]
                await tick()
                const nextPiece = section.pieces[i + 1]
                if (nextPiece.type == "math")
                  nextPiece.element?.focus()
              }}

              on:delete={async () => {
                if (section.pieces.length === 1) return
                section.pieces = section.pieces.filter((_, index) => index !== i)
                await tick()
                const nextPiece = section.pieces[i - 1]
                if (nextPiece.type == "math")
                  nextPiece.element?.focus()
              }}
              /><br/>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/each}

  <button class="print:hidden mt-4 px-4 py-2 rounded-full border border-black" on:click={addSection}>Add Section</button>
</div>