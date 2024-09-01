import IconComponent from "../iconComponent/IconComponent"
import css from './ExperiencedNannies.module.css';

export const ExperiencedNannies = () => {
    return (
        <div className={css.container}>
            <div className={css.iconArea}><IconComponent width={20} height={15} iconName={'iconCheck'} /></div>
            <div className={css.wrapper}>
                <p className={css.title}>Experienced nannies</p>
                <p className={css.counter}>15,000</p>
            </div>
        </div>
    )
}
