import Button from '../components/button/Button';
import ExperiencedNannies from '../components/experiencedNannies/ExperiencedNannies';
import IconComponent from '../components/iconComponent/IconComponent';

import '../styles/pages.css';

const Home = () => {
    return (
        <section className='homeContainer'>

            <div className='titleWrapper'>
                <h1 className='homeTitle'>Make Life Easier for the Family:</h1>
                <h3 className='homeSubTitle'>Find Babysitters Online for All Occasions</h3>
                <Button className='btnGetStarted'>Get started
                    <IconComponent width={18} height={18} iconName={'iconArrowUp'} />
                </Button>
            </div>
            <ExperiencedNannies />
        </section>
    )
};

export default Home;
