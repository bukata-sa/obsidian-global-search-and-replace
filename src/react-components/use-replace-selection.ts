import * as React from "react";
import { useCallback } from "react";
import { FileOperator } from "../domain/file-operator";
import { SearchAndReplaceAction, SearchAndReplaceState } from "./SearchAndReplace";
import { SearchAndReplaceMode } from "src/obsidian-components/search-and-replace-modal";

export function useActOnSelection(
	state: SearchAndReplaceState,
	dispatch: React.Dispatch<SearchAndReplaceAction>,
	fileOperator: FileOperator
) {
	return useCallback(async () => {
		if (state.searchResults.length === 0) return;

		if (state.mode == SearchAndReplaceMode.SEARCH) {
			await fileOperator.open(state.searchResults[state.selectedIndex]);
		} else /* if (state.mode == SearchAndReplaceMode.SEARCH_REPLACE) */{
			const replaceOperationResult = await fileOperator.replace(
				state.searchResults[state.selectedIndex],
				state.replacementText,
				state.searchQuery,
				state.regexEnabled,
				state.caseSensitivityEnabled
			);
			dispatch({ type: "replace", replaceOperationResult });
		}
	}, [
		dispatch,
		fileOperator,
		state.caseSensitivityEnabled,
		state.regexEnabled,
		state.replacementText,
		state.searchQuery,
		state.searchResults,
		state.selectedIndex,
	]);
}
