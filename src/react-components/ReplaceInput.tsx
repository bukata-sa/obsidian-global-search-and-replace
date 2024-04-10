import * as React from "react";

import useAutosizeTextArea from "./use-textarea-resize";

interface ReplaceInputProps {
	value: string;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export function ReplaceInput({ value, onChange }: ReplaceInputProps) {
	const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
	useAutosizeTextArea(textAreaRef.current, value)
	return (
		<div className="snr-input-button-wrapper">
			<textarea
				className="snr-prompt-input"
				placeholder="Replace"
				ref={textAreaRef}
				value={value}
				onChange={onChange}
			/>
			{/* TODO <ReplaceAllButton />*/}
		</div>
	);
}
