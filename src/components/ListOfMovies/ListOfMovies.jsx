import ListOfMoviesItem from 'components/ListOfMoviesItem/ListOfMoviesItem';

const ListOfMovies = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => (
          <ListOfMoviesItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};
export default ListOfMovies;
