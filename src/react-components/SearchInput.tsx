import * as React from "react";
import { EnableRegexButton, EnableRegexButtonProps } from "./EnableRegexButton";
import {
	EnableCaseSensitivityButton,
	EnableCaseSensitivityButtonProps,
} from "./EnableCaseSensitivityButton";
import useAutosizeTextArea from "./use-textarea-resize";

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
	const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
	useAutosizeTextArea(textAreaRef.current, value)
	return (
		<div className="snr-input-icon-wrapper">
			<textarea
				className="snr-prompt-input"
				placeholder="Search"
				autoFocus
				ref={textAreaRef}
				value={value}
				onChange={onChange}
			/>
			<div className="snr-controls">
				<EnableCaseSensitivityButton
					caseSensitivityEnabled={caseSensitivityEnabled}
					onToggleCaseSensitiveSearch={onToggleCaseSensitiveSearch}
				/>
				<EnableRegexButton
					regexEnabled={regexEnabled}
					onToggleRegexSearch={onToggleRegexSearch}
				/>
			</div>
		</div>
	);
}
