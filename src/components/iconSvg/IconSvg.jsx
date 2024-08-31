import sprite from '../../assets/sprite.svg';

const IconSvg = ({ width, height, iconName }) => {
    return (
        <svg width={width} height={height}>
            <use href={`${sprite}${iconName}`}></use>
        </svg>
    )
};

export default IconSvg;

