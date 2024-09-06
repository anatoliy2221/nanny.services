import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/styles/pages.css';
import { Link, Outlet } from 'react-router-dom';
import Filters from '../components/filters/Filters';

const Nannies = () => {
    const [nannies, setNannies] = useState([]);

    useEffect(() => {
        async function fetchNannies() {
            try {
                const response = await axios.get(
                    'https://nannyservices-ef167-default-rtdb.europe-west1.firebasedatabase.app/.json?auth=RvsrXqYeO04kL9SoreKjLYrGQ99YSidUOqlGtScb',
                );

                setNannies(Object.values(response.data));
            } catch (error) {
                console.error('Error fetching nannies data:', error);
            }
        }

        fetchNannies();
    }, []);

    return (
        <div className="nannyContainer">
            <Filters />
            {nannies.length > 0 ? (
                <ul>
                    {nannies.map((nanny, index) => (
                        <li key={index} className="nannyItem">
                            <div className="imgBlock">
                                <img
                                    src={nanny.avatar_url}
                                    alt={`${nanny.name}'s avatar`}
                                    width="96"
                                />
                            </div>
                            <div className="nannyWrapper">
                                <div className="wrap">
                                    <div>
                                        <p>Nanny</p>
                                        <h3 className="nannyTitle">{nanny.name}</h3>
                                    </div>
                                    <div className="nannyInfo">
                                        <p>
                                            <strong></strong> {nanny.location}
                                        </p>
                                        <p>
                                            <strong>rating:</strong> {nanny.rating}
                                        </p>
                                        <p>
                                            <strong>Price / 1 hour:</strong> ${nanny.price_per_hour}
                                        </p>
                                    </div>
                                </div>
                                <ul className="nannyPropertiesList">
                                    <li className="nannyPropertiesItem">
                                        <p className="nannyPropertiesText">
                                            Age:{' '}
                                            <span className="propertiesItemValue">
                                                {new Date().getFullYear() -
                                                    new Date(nanny.birthday).getFullYear()}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="nannyPropertiesItem">
                                        <p className="nannyPropertiesText">
                                            Experience:{' '}
                                            <span className="propertiesItemValue">
                                                {nanny.experience}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="nannyPropertiesItem">
                                        <p className="nannyPropertiesText">
                                            kids_age:{' '}
                                            <span className="propertiesItemValue">
                                                {nanny.kids_age}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="nannyPropertiesItem">
                                        <p className="nannyPropertiesText">
                                            Characters:{' '}
                                            <span className="propertiesItemValue">
                                                {nanny.characters
                                                    .map(
                                                        word =>
                                                            word.charAt(0).toUpperCase() + word.slice(1),
                                                    )
                                                    .join(', ')}
                                            </span>
                                        </p>
                                    </li>
                                    <li className="nannyPropertiesItem">
                                        <p className="nannyPropertiesText">
                                            education:{' '}
                                            <span className="propertiesItemValue">
                                                {nanny.education}
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                                <p>
                                    <strong></strong> {nanny.about}
                                </p>
                                <Link to={`/nannies/${index}/reviews`}>Read more</Link>
                            </div>
                            <Outlet />
                        </li>

                    ))}
                </ul>
            ) : (
                <p>Завантаження даних...</p>
            )}

        </div>
    );
};

export default Nannies;
