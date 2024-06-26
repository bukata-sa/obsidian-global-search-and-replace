import { App, Plugin, PluginManifest } from "obsidian";
import { PluginSettings } from "./settings/plugin-settings";
import { SearchAndReplaceModal, SearchAndReplaceMode } from "./obsidian-components/search-and-replace-modal";
import { FileOperator } from "./domain/file-operator";

export const DEFAULT_SETTINGS: PluginSettings = {
	replaceAllEnabled: false,
};

export default class SearchAndReplacePlugin extends Plugin {
	settings: PluginSettings | undefined;
	private fileOperator: FileOperator;

	constructor(app: App, manifest: PluginManifest) {
		super(app, manifest);
		this.fileOperator = new FileOperator(app);
	}

	async onload() {
		await this.loadSettings();
		this.addPluginCommand();

		// TODO there are no settings yet
		// this.addSettingTab(new SettingsTab(this.app, this));
	}

	private addPluginCommand(): void {
		this.addCommand({
			id: "search",
			name: "Search in all files",
			callback: () => {
				new SearchAndReplaceModal(this.app, this.fileOperator, SearchAndReplaceMode.SEARCH).open();
			},
		});
		this.addCommand({
			id: "search_replace",
			name: "Search and replace in all files",
			callback: () => {
				new SearchAndReplaceModal(this.app, this.fileOperator, SearchAndReplaceMode.SEARCH_REPLACE).open();
			},
		});
		
	}

	onunload() {
		// Nothing to unload yet
	}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
