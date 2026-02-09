type ButtonProps = {
    label: string;
    onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <button className="btn-primary" onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
