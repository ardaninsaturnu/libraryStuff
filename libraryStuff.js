class Media {
  constructor(title) {
    this._title = title ;
    this._isCheckedOut = false ;
    this._ratings = [] ;
  }
  //getters

  get title() {
    return this._title ;
  }
  get isCheckedOut() {
    return this._isCheckedOut ;
  }
  get ratings() {
    return this._ratings ;
  }
  //setters

  set isCheckedOut(value) {
    this._isCheckedOut = value ;
  }

  //methods

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return lengthOfArray
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }

  addRating(rate) {
    this._ratings.push(rate);
  }



};

class Book extends Media {
  constructor(author,title,pages)  {
    super(title);
    this._author = author ;
    this._pages = pages ;

  }

  //getters
  get author() {
    return this.author ;
  }
  get pages() {
    return this.pages;
  }
}

class Movie extends Media {
  constructor(director,title,runTime)  {
    super(title);

    this._director = director ;
    this._runTime = runTime ;

  }

  //getters
  get director() {
    return this._director ;
  }
  get pages() {
    return this._runTime;
  }
}


// call the books


const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());


//call the movies

const speed = new Movie('Jan de Bont','Speed',116) ;

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating())
