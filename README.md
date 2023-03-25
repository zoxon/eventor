# @zoxon/eventor

An event handling utility that provides a simple API for creating custom events and registering listeners

The eventor name is combination of "event" and "creator".

This library provides a simple API for creating custom events and registering listeners. It also includes helper methods for managing event listeners and triggering events with custom data. It uses TypeScript to ensure type safety when working with events.

## Usage  

To use this utility, you first need to import the functions you want to use:  

```ts
import { listenEvent, unlistenEvent, dispatchCustomEvent } from '@zoxon/eventor';
```

You also need to register your custom event types in `env.d.ts` if you use a TypeScript, like so:


```ts
declare interface WindowEventMap {
  'modal:show': CustomEvent<string>
  'modal:close': CustomEvent<string>
}
```

*Note: In this example type `string` is a type for data that can be emitted with your custom event.*

### Adding an Event Listener

To add an event listener for a custom event, use the `listenEvent` function. It takes two parameters: the name of the event to listen for, and a callback function that will be called when the event is triggered.

```ts
function handleModalShow(event: CustomEvent<string>) {
  console.log(`The modal with ID "${event.detail}" has been shown.`);
}

listenEvent('modal:show', handleModalShow);

```

The `listenEvent` function returns a function that you can use to remove the event listener:

```ts
const unlisten = listenEvent('modal:show', handleModalShow);

// Later, to remove the event listener:
unlisten();
```
### Removing an Event Listener

To remove an event listener for a custom event, use the `unlistenEvent` function. It takes the same two parameters as `listenEvent`: the name of the event and the callback function.

```ts
function handleModalShow(event: CustomEvent<string>) {
  console.log(`The modal with ID "${event.detail}" has been shown.`);
}

listenEvent('modal:show', handleModalShow);

// Later, to remove the event listener:
unlistenEvent('modal:show', handleModalShow);

```

### Dispatching a Custom Event

To dispatch a custom event, use the `dispatchCustomEvent` function. It takes two parameters: the name of the event to dispatch, and the data that should be attached to the event.

```ts
dispatchCustomEvent('modal:show', 'myModal');
```

In this example, a custom event with the name `modal:show` is dispatched, and the string `'myModal'` is attached as the event detail.

The `dispatchCustomEvent` function will automatically infer the correct type for the event detail based on the event name, so you don't need to specify it manually.

```ts
dispatchCustomEvent('modal:close'); // No event detail is attached
dispatchCustomEvent('modal:open', 'my-modal-id'); // The string 'my-modal-id' is attached as the event detail
```
