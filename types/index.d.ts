/**
 * Defines a type for a custom event listener.
 */
export type EventHandler<K extends keyof WindowEventMap> = (event: WindowEventMap[K]) => void;
/**
 * Adds a listener for a custom event.
 * @param event The name of the custom event to listen for.
 * @param handler The event listener callback.
 * @returns A function that removes the listener for this event.
 */
export declare function listenEvent<K extends keyof WindowEventMap>(event: K, handler: EventHandler<K>): () => void;
/**
 * Removes a listener for a custom event.
 * @param event The name of the custom event to remove the listener for.
 * @param handler The event listener callback to remove.
 */
export declare function unlistenEvent<K extends keyof WindowEventMap>(event: K, handler: EventHandler<K>): void;
/**
 * Dispatches a custom event.
 * @param event The name of the custom event to dispatch.
 * @param detail Data that will be attached to the custom event. To avoid TypeScript errors, extend the WindowEventMap interface.
 */
export declare function dispatchCustomEvent<K extends keyof WindowEventMap>(event: K, detail: WindowEventMap[K] extends CustomEvent<infer T> ? T : never): void;
