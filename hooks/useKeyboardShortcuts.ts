import { useEffect } from "react";

type KeyHandler = {
	key: string;
	handler: () => void;
	description?: string;
};

interface UseKeyboardShortcutOptions {
	handlers: KeyHandler[];
	// Add additional options as needed
	preventDefault?: boolean;
}

export const useKeyboardShortcut = ({
	handlers,
	preventDefault = true,
}: UseKeyboardShortcutOptions) => {
	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			// Skip if typing in input/textarea or using modifier keys
			if (
				event.target instanceof HTMLInputElement ||
				event.target instanceof HTMLTextAreaElement ||
				event.metaKey ||
				event.ctrlKey ||
				window.getSelection()?.toString()
			) {
				return;
			}

			const key = event.key.toLowerCase();
			const handler = handlers.find((h) => h.key.toLowerCase() === key);

			if (handler) {
				if (preventDefault) {
					event.preventDefault();
				}
				handler.handler();
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [handlers, preventDefault]);
};
