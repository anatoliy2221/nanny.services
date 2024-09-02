const Button = ({ children, className }) => {
    console.log(children);

    return (
        <>
            <button className={className}>{children}</button>
        </>
    );
};

export default Button;
