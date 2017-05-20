// Movie class
export class Movie {

    Title: string;
    imdbID: string;
    Year: number;
    Type: string;
    Poster: string;

    // Movie class paramerterized constructor
    constructor(
        Title: string,
        imdbID: string,
        Year: number,
        Type: string,
        Poster: string
    ) { 
        this.Title = Title,
        this.imdbID = imdbID,
        this.Year = Year,
        this.Type = Type,
        this.Poster = Poster 
       }

    // clone() method of Movie class
    clone(){
    	return new Movie(this.Title, this.imdbID, this.Year, this.Type, this.Poster);
    }
    
}
