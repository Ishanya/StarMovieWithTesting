import { TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MovieServiceService } from './movie-service.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { Movie } from './movie';
import { FavouriteMovie } from './FavouriteMovie';
import { CredentialsBean } from './credentialsbean';
import { ProfileBean } from './profilebean';

describe('MovieServiceService', () => {
  let service:MovieServiceService;
  let httpMock:HttpTestingController;

  beforeEach(() => {TestBed.configureTestingModule({
    providers:[MovieServiceService],
    imports:[HttpClientTestingModule]
  }),
  service=TestBed.get(MovieServiceService);
  httpMock=TestBed.get(HttpTestingController);
});

afterEach(()=>{
  httpMock.verify();
});

it('request movies from servive',()=>{

const movieList:Movie[]=[{
  movieId:1,
  movieName:"kal ho na ho",
  moviePosterUrl:"image.jpg",
  movieReleaseDate:"1995-12-12",
  movieDescription:"this is a pure bollywood masala"
}];

  service.getMovies("kal").subscribe(data=>{
   expect( data.length).toBe(1);
   expect(data).toEqual(movieList);
  });

 

const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/searchs/kal`);
expect(request.request.method).toBe('GET');
request.flush(movieList);

});


it('request movies from servive PART2',()=>{

  const movieList:Movie[]=[{
    movieId:1,
    movieName:"kal ho na ho",
    moviePosterUrl:"image.jpg",
    movieReleaseDate:"1995-12-12",
    movieDescription:"this is a pure bollywood masala"
  }];
  
  service.requestMovieList("kal").subscribe(data=>{
    expect( data.length).toBe(1);
    expect(data).toEqual(movieList);
   });
  
  const request=httpMock.expectOne(`${service.baseUrl1}/search-movies/searchs/kal`);
  expect(request.request.method).toBe('GET');
  request.flush(movieList);
  
  });



it('request FAVOURITE movies from servive',()=>{

  const movieList:Movie[]=[{
    movieId:1,
    movieName:"kal ho na ho",
    moviePosterUrl:"image.jpg",
    movieReleaseDate:"1995-12-12",
    movieDescription:"this is a pure bollywood masala"
  }];
  
    service.getFavList().subscribe(data=>{
     expect( data.length).toBe(1);
     expect(data).toEqual(movieList);
    });
   
  
  const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favourite`);
  expect(request.request.method).toBe('GET');
  request.flush(movieList);
  
  });
  
  it('should be created', () => {
    const service: MovieServiceService = TestBed.get(MovieServiceService);
    expect(service).toBeTruthy();
  });

  it('request FAVOURITE movies from servive PART2',()=>{

    const favMovieList:FavouriteMovie[]=[{
      favouriteId:1,
      movieId:1,
      userId:"It1234",
      movieName:"kal ho na ho",
      moviePosterUrl:"image.jpg",
      movieReleaseDate:"1995-12-12",
      movieDescription:"this is a pure bollywood masala"
    }];
    
      service.requestFavMovieList().subscribe(data=>{
       expect( data.length).toBe(1);
       expect(data).toEqual(favMovieList);
      });
     
    
    const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favourite`);
    expect(request.request.method).toBe('GET');
    request.flush(favMovieList);
    
    });
    
    it('should be created', () => {
      const service: MovieServiceService = TestBed.get(MovieServiceService);
      expect(service).toBeTruthy();
    });

  // it('request addition of FAVOURITE movies from servive',()=>{

  //   const movieList:Movie[]=[{
  //     movieId:1,
  //     movieName:"kal ho na ho",
  //     moviePosterUrl:"image.jpg",
  //     movieReleaseDate:"1995-12-12",
  //     movieDescription:"this is a pure bollywood masala"
  //   }];
    
  //     service.addfavMovie(movieList).subscribe(data=>{
  //      expect(data).toEqual(movieList);
  //     });
    
  //   const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favAdd/1`);
  //   expect(request.request.method).toBe('POST');
  //   request.flush(movieList);
    
  //   });

     it('request deletion of FAVOURITE movies from servive',()=>{

       const movieList:Movie[]=[{
         movieId:1,
         movieName:"kal ho na ho",
         moviePosterUrl:"image.jpg",
         movieReleaseDate:"1995-12-12",
         movieDescription:"this is a pure bollywood masala"
       }];
      
         service.requestFavouriteDelete(1).subscribe(data=>{
          expect(data).toEqual(1);
         });
      
       const request=httpMock.expectOne(`${service.baseUrl1}/favourite-movies/favDelete/1`);
       expect(request.request.method).toBe('PUT');
       request.flush(movieList);
      
       });

      it('request USERLogin',()=>{

        const credList:CredentialsBean[]=[{
          userID: "ti1234",
          password :"Ishnaya@121" ,
            loginStatus: 0,
            authQuestion:"Book",
            authAnswer:"harry"
                }];
        
          service.UserLogin(credList).subscribe(data=>{
           expect(data.userID).toEqual("ti1234");
          });
        
        const request=httpMock.expectOne(`${service.baseUrl1}/login-signup-movies/login`);
        expect(request.request.method).toBe('POST');
        request.flush(credList);
        
        });



      /*  it('request Registeration',()=>{
        
          let startdob:"2015-12-12";

          const prof:ProfileBean={
            userId: "It5463",
            firstName: "Ishanya",
            lastName: "Mittal",
            dateOfBirth: new Date(startdob),
            gender: "male",
            state: "Rajasthan",
            pincode: "223344" ,
            mobileNo: "8989787676", 
            emailID: "mittal@gmail.com",
            password: "Ishanya21#",
              authQuestion:"book",
              authAnswer:"harry"
                  };
          
            service.registration(prof).subscribe(data=>{
             expect(data).toEqual(prof);
            });
          
          const request=httpMock.expectOne(`${service.baseUrl1}/login-signup-movies/register`);
          expect(request.request.method).toBe('POST');
          request.flush(prof);
          
          });*/


});
