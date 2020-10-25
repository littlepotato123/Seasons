import React from 'react';

const Explain = () => {
    return (
        <div className="explain">
            <div className="earth" >
                <h1>Earth</h1>
                <h3>Description</h3>
                <ul>
                    <li>Tilt: 23 Degree Tilt</li>
                    <li>Size Relative to Earth: 1 Earth</li>
                    <li>Distance away from Sun: 92.539 million miles</li>
                    <li>Land Description: Mountain Ranges, Deserts, Ice Caps and Poles, and Civilized Land</li>
                </ul>
                <h3>Why we have seasons</h3>
                <p>
                    We have seasons due to the tilt in our revolution around the sun. This tilt changes our seasons because it changes the amount of sunlight that is hitting a region based on the tilt at that duration of the year.
                </p>
                <h3>What our seasons look like</h3>
                <p>
                    Based on the region, we would experience different temperatures, but also over the year, the direct sunlight will increase and decrease, causing summer, winter, fall, and spring. This makes our temperature fluctuate throughout the year.
                </p>
            </div>
            <div className="other">
                <h1>Other Planet</h1>
                <h3>Description</h3>
                <ul>
                    <li>Tilt: 90 Degree Tilt</li>
                    <li>Size Relative to Earth: 3 Earths</li>
                    <li>Distance Away from Sun: 90 million miles</li>
                    <li>Land Description: Sand Dunes</li>
                </ul>
                <h3>Do they have seasons?</h3>
                <p>
                    In this other planet, there is no seasons because the rotation, although now 90 degrees, it has the same effect as 0 degrees or 180 degree rotation. Therefore, although the direction of rotation is different, it shows the samething, so if you stayed in one region, you would always have the same amount of sunlight, which means that there is only one season in one region.
                </p>
                <h3>What their seasons look like</h3>
                <p>
                    Like said above, this other planet does not have any seasons since there is technically no tilt, therefore there is no difference in the amount of direct sunlight that is hitting a certain region. Therefore there is no seasons or drastic differences in the temperatures.
                </p>
            </div>
            <div className="description" >
                <h1>Differences</h1>
                <ul>
                    <li>Size: Although size seems like it does not matter for the seasons, and that is accurate. The size of the planet does not impact the seasons at all, except for the poles. Since the poles are further away from the sun because of the larger diameter, therefore the poles are going to colder in their respective winters.</li>
                    <li>Tilt: Since earth has about an even tilt, different regions will get sunlight at different times, which is the seasons. But, since the other planet will have a rotation or tilt of 90 degrees, it will essentially be horizontal and be at a tilt of 0 degrees. This means that the regions will either be in summer or winter. Also, this shows that the poles (Where the temperature stays constant most of the times and the coldest), instead of being in the on the vertical endes, now would be in the horizontal ends.</li>
                    <li>Distance from the sun: Since the other planet is closer to the sun, the equator in the other planet, would be much warmer than the earth's equator</li>
                    <li>Poles: The poles of earth are on the area that gets the least bit of sunlight, which is the vertical ends, since the ligth get's there the least. But, in the other planet, the poles would be in the horizontal lines because that is the furthest away from the sun.</li>
                    <li>Land Description: The land is much more civilized on Earth, therefore they have oceans, mountain ranges, and a huge variety of types of land. But, on the other planet, there is no civilization, therefore there is only sand dunes. This is important to think about when talking about perspective of view.</li>
                </ul>
            </div>
        </div>
    )
}

export default Explain;