import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer lEIN-DjitjDzeOy4JDrTUX3VfJncclCy1SKu2xq9OjrO2l2OfwF_B3fhxONtRe1NcV8RonhBMvceT5zU2UR59rrWwIuXktDQKO4Or66H1hovkXIrCYJu15pYKd7LZXYx"
    }
});