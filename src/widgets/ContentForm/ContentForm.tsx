import "./ContentForm.scss";
import React from "react";
import TextArea from "../../components/TextArea/TextArea";

type ContentFormProps = {
	placeholder?: string;
	minHeight?: string;
	maxHeight?: string | "inf";
	fixedHeight?: string | null;
};

const ContentForm = (props: ContentFormProps) => {
	const [textContent, setTextContent] = React.useState("");

	return (
		<div className="ContentForm">
			<div
				style={{
					aspectRatio: "1/1",
					width: "32px",
					border: "2px solid white",
					borderRadius: "50%",
				}}
			></div>
			<TextArea
				value={textContent}
				onChange={(e) => setTextContent(e.currentTarget.value)}
				placeholder={props.placeholder}
			/>
			<button>SEND</button>
		</div>
	);
};

export default ContentForm;
