<script lang="ts">
  import { MathQuill } from "svelte-mathquill";
  import { autofocus } from "$lib/autofocus";
  import { tick } from "svelte"
  import * as engine from "@cortex-js/compute-engine"
  const { ComputeEngine } = engine
  const ce = new ComputeEngine();

  type Piece = {
    content: string;
    focused?: boolean;
  } & ({
    type: "text",
    element?: HTMLParagraphElement
  } | {
    type: "math",
    element?: MathQuill,
    result?: string
  })

  interface Section {
    name: string;
    pieces: Piece[];
    title?: HTMLInputElement;
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
  {#each sections as section, sectionIndex}
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
            const selectedSection = sections[sectionIndex - 1];
            selectedSection.pieces[selectedSection.pieces.length - 1].element?.focus()
          }

        }}
      >
      <div class="border-l border-gray-300 p-4">
        {#each section.pieces as piece, i}
          {#if piece.type == "text"}
            <input bind:value={piece.content} placeholder="Enter text..."/>
          {:else if piece.type == "math"}
            <div class="mb-4 p-2 border border-black ring-blue-700 rounded-md {piece.focused ? "ring" : ""}">
              <MathQuill bind:focused={piece.focused} noBorderOutline={true} bind:this={piece.element} bind:latex={piece.content}
              
              config={({
                autoCommands: "theta sqrt sum pi prod",
                autoOperatorNames: "sin cos tan arcsin arccos arctan"
              })}
              
              on:enter={async () => {
                section.pieces = [...section.pieces, { type: "math", content: "" }]
                await tick()
                const nextPiece = section.pieces[i + 1]
                if (nextPiece.type == "math")
                  nextPiece.element?.focus()
              }}

              on:outOfOnly={async event => {
                if (event.detail == "U" || event.detail == "L") {
                  if (i === 0) {
                    section.title?.focus()
                  } else {
                    section.pieces[i - 1].element?.focus()
                  }
                } else if (i + 1 !== section.pieces.length) {
                  section.pieces[i + 1].element?.focus()
                } else {
                  sections[sectionIndex + 1].title?.focus()
                }
              }}

              on:deleteOutOf={async () => {
                if (section.pieces.length === 1) return
                section.pieces = section.pieces.filter((_, index) => index !== i)
                await tick()
                const nextPiece = section.pieces[i - 1]
                if (nextPiece.type == "math")
                  nextPiece.element?.focus()
              }}
              /><br/>
              {#if piece.result}
                <p>{piece.result}</p>
              {/if}
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {/each}

  <button class="print:hidden mt-4 px-4 py-2 rounded-full border border-black" on:click={addSection}>Add Section</button>
</div>