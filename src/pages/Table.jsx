import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'utils/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [ , setError] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => setError(error));
  }, []);
  return (
    <div>
      <section>
        {trendingMovies && <ListOfMovies movies={trendingMovies} />}
      </section>
    </div>
  );
};
export default Home;
