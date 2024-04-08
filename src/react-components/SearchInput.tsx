import * as React from "react";
import { EnableRegexButton, EnableRegexButtonProps } from "./EnableRegexButton";
import {
	EnableCaseSensitivityButton,
	EnableCaseSensitivityButtonProps,
} from "./EnableCaseSensitivityButton";

interface SearchInputProps extends EnableRegexButtonProps, EnableCaseSensitivityButtonProps {
	value: string;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export default function SearchInput({
	value,
	onChange,
	regexEnabled,
	onToggleRegexSearch,
	onToggleCaseSensitiveSearch,
	caseSensitivityEnabled,
}: SearchInputProps) {
	return (
		<div className="snr-input-icon-wrapper">
			<textarea
				className="snr-prompt-input"
				placeholder="Search"
				autoFocus
				value={value}
				onChange={onChange}
			/>
			<EnableCaseSensitivityButton
				caseSensitivityEnabled={caseSensitivityEnabled}
				onToggleCaseSensitiveSearch={onToggleCaseSensitiveSearch}
			/>
			<EnableRegexButton
				regexEnabled={regexEnabled}
				onToggleRegexSearch={onToggleRegexSearch}
			/>
		</div>
	);
}
