/**
 * Adds a listener for a custom event.
 * @param event The name of the custom event to listen for.
 * @param handler The event listener callback.
 * @returns A function that removes the listener for this event.
 */
export function listenEvent(event, handler) {
    window.addEventListener(event, handler);
    return () => unlistenEvent(event, handler);
}
/**
 * Removes a listener for a custom event.
 * @param event The name of the custom event to remove the listener for.
 * @param handler The event listener callback to remove.
 */
export function unlistenEvent(event, handler) {
    window.removeEventListener(event, handler);
}
/**
 * Dispatches a custom event.
 * @param event The name of the custom event to dispatch.
 * @param detail Data that will be attached to the custom event. To avoid TypeScript errors, extend the WindowEventMap interface.
 */
export function dispatchCustomEvent(event, detail) {
    window.dispatchEvent(new CustomEvent(event, {
        bubbles: true,
        cancelable: true,
        detail: detail,
    }));
}
