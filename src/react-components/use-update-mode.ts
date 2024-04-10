import * as React from "react";
import { useEffect } from "react";
import { SearchAndReplaceAction, SearchAndReplaceState } from "./SearchAndReplace";

export function useUpdateMode(
	state: SearchAndReplaceState,
	dispatch: React.Dispatch<SearchAndReplaceAction>
) {
	useEffect(() => {
		dispatch({ type: "update_mode", nextMode: state.mode });
	}, [dispatch, state.mode]);
}