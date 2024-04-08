import * as React from "react";

interface ReplaceInputProps {
	value: string;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export function ReplaceInput({ value, onChange }: ReplaceInputProps) {
	return (
		<div className="snr-input-button-wrapper">
			<textarea
				className="snr-prompt-input"
				placeholder="Replace"
				value={value}
				onChange={onChange}
			/>
			{/* TODO <ReplaceAllButton />*/}
		</div>
	);
}
