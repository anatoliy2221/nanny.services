// import IconComponent from '../iconComponent/IconComponent';
// import css from './Button.module.css';

export const Button = ({ children, className }) => {
    console.log(children);


    return (
        <>
            <button className={className}>{children}


            </button>
        </>
    )
}

{/* <IconComponent width={18} height={18} iconName={'iconArrowUp'} />} */ }
