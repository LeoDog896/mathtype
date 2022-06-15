export const autofocus = (element: HTMLElement) => {
    if (document.activeElement !== element) {
        element.focus();
    }
}