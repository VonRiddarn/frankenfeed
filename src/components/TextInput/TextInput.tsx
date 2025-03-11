import "./TextInput.scss";

type TextInputProps = {
	type: "text" | "email" | "number" | "url" | "tel" | "password";
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
};

const TextInput = ({ type, placeholder = "", value, onChange }: TextInputProps) => {
	return (
		<>
			<input
				className="TextInput"
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</>
	);
};

export default TextInput;
