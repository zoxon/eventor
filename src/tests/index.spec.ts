import { describe, it, expect, vi } from "vitest";

import { listenEvent, unlistenEvent, dispatchCustomEvent } from "../index";

import "./types";

describe("listenEvent", () => {
  it("should add event listener and return a function to remove it", () => {
    const mockHandler = vi.fn();
    const removeListener = listenEvent("customEvent", mockHandler);

    dispatchCustomEvent("customEvent", { data: "test" });

    expect(mockHandler).toHaveBeenCalledTimes(1);

    removeListener();
    dispatchCustomEvent("customEvent", { data: "test" });

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});

describe("unlistenEvent", () => {
  it("should remove event listener", () => {
    const mockHandler = vi.fn();

    listenEvent("customEvent", mockHandler);
    unlistenEvent("customEvent", mockHandler);
    dispatchCustomEvent("customEvent", { data: "test" });

    expect(mockHandler).toHaveBeenCalledTimes(0);
  });
});

describe("dispatchCustomEvent", () => {
  it("should dispatch a custom event with the provided detail", () => {
    const mockHandler = vi.fn();

    global.addEventListener("customEvent", mockHandler);

    dispatchCustomEvent("customEvent", { data: "test" });

    expect(mockHandler).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { data: "test" },
      })
    );
  });
});
