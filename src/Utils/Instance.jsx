import axios from 'axios';

//This instance is configured with the base URL for the TMDB (The Movie Database) API and includes the necessary headers for authorization.

const Instance = axios.create({

    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzRmYmZmZTNjZTk4OTI4NTkyMWI4NGM5ZDBhYjJkMCIsIm5iZiI6MTczMjgxODg2MS4yMTM4MTEsInN1YiI6IjY3NDhiMTZmMzc5YjAzYTlmMWQwNmMzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cXSmPYPOprU6xQ6yDqGwc0e8nyA4iIdmLASCmBbZ1rM'
      },
      params: {
        api_key: '5c4fbffe3ce989285921b84c9d0ab2d0',
      },
});

export default Instance;