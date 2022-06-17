<script lang="ts">
  import { MathQuill, MathQuillStatic } from "svelte-mathquill";
  import * as engine from "@cortex-js/compute-engine"
  import { sections } from "./sections";
  const { ComputeEngine } = engine
  const ce = new ComputeEngine();

  import { tick } from "svelte"
  export let section: Section
  export let sectionIndex: number;
  export let piece: Piece;
  export let pieces: Piece[]
  export let pieceIndex: number;

  $: if (piece.type == "math" && piece.content) {
    try {
      const parsedContent = ce.parse(piece.content)
      piece.result = parsedContent.evaluate().simplify().latex ?? undefined
    } catch (e) {
      piece.result = "\\text{An unknown error has occured}"
    }
  }
</script>

{#if piece.type == "text"}
  <input bind:value={piece.content} placeholder="Enter text..."/>
{:else if piece.type == "math"}
  <div 
  class="mb-4 p-2 border border-black ring-blue-700 rounded-md {piece.focused ? "ring" : ""}"
  on:click={piece.element?.focus()}
  >
    <MathQuill class="p-2 bg-transparent" bind:focused={piece.focused} noBorderOutline={true} bind:this={piece.element} bind:latex={piece.content}
    
    config={({
      autoCommands: "theta sqrt sum pi prod",
      autoOperatorNames: "sin cos tan arcsin arccos arctan"
    })}
    
    on:deleteOutOf={async () => {
      if (pieces.length === 1) return
      pieces = pieces.filter((_, index) => pieceIndex !== index)
      $sections = $sections
      await tick();
      pieces[Math.max(pieceIndex - 1, 0)].element?.focus()
    }}
    on:outOfOnly={async event => {
      if (event.detail == "U" || event.detail == "L") {
        if (pieceIndex === 0) {
          section.title?.focus()
        } else {
          pieces[pieceIndex - 1].element?.focus()
        }
      } else if (pieceIndex + 1 !== pieces.length) {
        pieces[pieceIndex + 1].element?.focus()
      } else {
        $sections[sectionIndex + 1].title?.focus()
      }
    }}
    on:enter={async () => {
      // If there is only one element OR the last element isn't empty, add a new one
      if (pieces.length === 1 || pieces[pieces.length - 1].content) {
        pieces = [...pieces, { type: "math", content: "" }];
      }

      $sections = $sections
      
      await tick()
      pieces[Math.min(pieceIndex + 1, pieces.length - 1)].element?.focus()
    }}
    /><br/>
    {#if piece.content && piece.result}
      <div class="inline-block p-2 bg-gray-100 rounded-sm m-2">
        <MathQuillStatic latex="="/><MathQuillStatic bind:latex={piece.result}/>
      </div>
    {/if}
  </div>
{/if}