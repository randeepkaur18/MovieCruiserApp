
import { Movie } from './movie';
/*Test for Movie model
Update test code to instansiate new Movie in beforEach() block*/

let movie;

describe('Movie', () => {

  /*beforeEach will initialize the properties of Movie class before each test case
    and store them in an instace of Movie class
  */
  beforeEach(() => {
    movie = new Movie('Titanic','tt0120338',1997,'Movie','https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
  });


  it('has title', () => {
    expect(movie.Title).toEqual('Titanic');
  });

  it('has imdb Id', () => {
    expect(movie.imdbID).toEqual('tt0120338');
  });

  it('has year', () => {
    expect(movie.Year).toEqual(1997);
  });

  it('has type', () => {
    expect(movie.Type).toEqual('Movie');
  });

  it('has poster', () => {
    expect(movie.Poster).toEqual('https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
  });


  it('can clone itself', () => {
    const clone = movie.clone();
    expect(movie).toEqual(clone);
  });
});