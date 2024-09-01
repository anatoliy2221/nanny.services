import { useEffect, useState } from "react";
import axios from "axios";

export const Nannies = () => {
    const [nannies, setNannies] = useState([]);

    useEffect(() => {
        async function fetchNannies() {
            try {
                const response = await axios.get(
                    "https://nannyservices-ef167-default-rtdb.europe-west1.firebasedatabase.app/.json?auth=RvsrXqYeO04kL9SoreKjLYrGQ99YSidUOqlGtScb"
                );

                setNannies(Object.values(response.data));
            } catch (error) {
                console.error("Error fetching nannies data:", error);
            }
        }

        fetchNannies();
    }, []);

    return (
        <div>
            {nannies.length > 0 ? (
                <ul>
                    {nannies.map((nanny, index) => (
                        <li key={index}>
                            <img src={nanny.avatar_url} alt={`${nanny.name}'s avatar`} width="100" />
                            <p>Nanny</p>
                            <h3>{nanny.name}</h3>
                            <p>Age</p>
                            <p><strong>Experience:</strong> {nanny.experience}</p>
                            <p><strong>kids_age:</strong> {nanny.kids_age}</p>
                            <p><strong>Characters:</strong> {nanny.characters}</p>
                            <p><strong>education:</strong> {nanny.education}</p>

                            <p><strong></strong> {nanny.location}</p>
                            <p><strong>Price / 1 hour:</strong> ${nanny.price_per_hour}</p>
                            <p><strong>rating:</strong> {nanny.rating}</p>
                            <p><strong></strong> {nanny.about}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Завантаження даних...</p>
            )}
        </div>
    );
};




