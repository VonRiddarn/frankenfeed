import "./TextArea.scss";
import React, { useEffect } from "react";

type TextAreaProps = {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	minHeight?: string;
	maxHeight?: string | "inf";
	fixedHeight?: string | null;
};

const TextArea = ({ placeholder = "", value, onChange }: TextAreaProps) => {
	const ref = React.useRef<HTMLTextAreaElement>(null);

	const resizeElement = (s: "big" | "small") => {
		if (ref.current) {
			ref.current.style.height = "auto";
			ref.current.style.minHeight = "50px";
			ref.current.style.height = s == "big" ? ref.current.scrollHeight + "px" : "unset";
		}
	};

	useEffect(() => {
		resizeElement("small");
	}, []);

	return (
		<>
			<textarea
				className="TextArea"
				placeholder={placeholder}
				ref={ref}
				value={value}
				onFocus={() => resizeElement("big")}
				onBlur={() => resizeElement("small")}
				onChange={(e) => {
					if (onChange) onChange(e);
					resizeElement("big");
				}}
			/>
		</>
	);
};

export default TextArea;
