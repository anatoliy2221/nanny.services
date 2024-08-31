import sprite from '../../assets/sprite.svg';

const IconComponent = ({ width, height, iconName }) => {
    return (
        <svg width={width} height={height}>
            <use href={`${sprite}#${iconName}`}></use>
        </svg>
    )
};

export default IconComponent;