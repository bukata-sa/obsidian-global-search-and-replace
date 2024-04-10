import {App, Modal, Scope} from "obsidian";
import {createRoot, Root} from "react-dom/client";
import * as React from "react";
import SearchAndReplace from "../react-components/SearchAndReplace";
import eventBridge from "../infrastructure/event-bridge";
import {FileOperator} from "../domain/file-operator";

export enum SearchAndReplaceMode {
	SEARCH,
	SEARCH_REPLACE
}

export class SearchAndReplaceModal extends Modal {
	private readonly reactRoot: Root;
	private readonly fileOperator: FileOperator;
	private mode: SearchAndReplaceMode;

	constructor(app: App, fileOperator: FileOperator, mode: SearchAndReplaceMode) {
		super(app);
		this.prepareModalEl();
		this.reactRoot = createRoot(this.modalEl);
		this.registerEventListeners();
		this.fileOperator = fileOperator;
		this.scope = new Scope(app.scope);
		this.mode = mode;
	}

	private prepareModalEl() {
		this.modalEl.replaceChildren();
		this.modalEl.addClass("prompt");
		this.modalEl.removeClass("modal");
	}

	private registerEventListeners() {
		// Move selection to previous note
		this.scope.register([], "ArrowUp", (e, ctx) => {
			e.preventDefault();
			eventBridge.onArrowUp?.(e, ctx);
		});

		// Move selection to next note
		this.scope.register([], "ArrowDown", (e, ctx) => {
			e.preventDefault();
			eventBridge.onArrowDown?.(e, ctx);
		});

		// Replace or Open note at selectedIndex
		this.scope.register([], "Enter", (e, ctx) => {
			e.preventDefault();
			// Prevent press and hold
			if (e.repeat) return;
			eventBridge.onEnter?.(e, ctx);
		});
	}

	setMode(mode: SearchAndReplaceMode) {
		this.mode = mode;	
	}

	onOpen() {
		this.reactRoot.render(
			<SearchAndReplace fileOperator={this.fileOperator} mode={this.mode}/>
		);
	}

	onClose() {
		this.reactRoot.unmount();
	}
}