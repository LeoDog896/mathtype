/// <reference types="@sveltejs/kit" />

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

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
