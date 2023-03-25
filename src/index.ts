/**
 * Defines a type for a custom event listener.
 */
export type EventHandler<K extends keyof WindowEventMap> = (
  event: WindowEventMap[K]
) => void;

/**
 * Adds a listener for a custom event.
 * @param event The name of the custom event to listen for.
 * @param handler The event listener callback.
 * @returns A function that removes the listener for this event.
 */
export function listenEvent<K extends keyof WindowEventMap>(
  event: K,
  handler: EventHandler<K>
): () => void {
  window.addEventListener(event, handler);

  return () => unlistenEvent(event, handler);
}

/**
 * Removes a listener for a custom event.
 * @param event The name of the custom event to remove the listener for.
 * @param handler The event listener callback to remove.
 */
export function unlistenEvent<K extends keyof WindowEventMap>(
  event: K,
  handler: EventHandler<K>
): void {
  window.removeEventListener(event, handler);
}

/**
 * Dispatches a custom event.
 * @param event The name of the custom event to dispatch.
 * @param detail Data that will be attached to the custom event. To avoid TypeScript errors, extend the WindowEventMap interface.
 */
export function dispatchCustomEvent<K extends keyof WindowEventMap>(
  event: K,
  detail: WindowEventMap[K] extends CustomEvent<infer T> ? T : never
) {
  window.dispatchEvent(
    new CustomEvent(event, {
      bubbles: true,
      cancelable: true,
      detail: detail,
    })
  );
}
