const books = 
  [
    {
      title: "Thus Spoke Zarathustra",
      authorName: "Friedrich Nietzche",
      releaseYear: 1883
    },
    {
      title: "No Longer Human",
      authorName: "Osamu Dazai",
      releaseYear: 1948
    },
    {
      title: "The Methamorphosis",
      authorName: "Franz Kafka",
      releaseYear: 1915
    }
  ]

const sortByYear = (bookA, bookB) =>{
  if(bookA.releaseYear < bookB.releaseYear){
    return -1;
  }
  else if(bookA.releaseYear == bookB.releaseYear){
    return 0;
  }
  else return 1
}

const year = 1900

const filteredBooks = books.filter(book => book.releaseYear <= year)

filteredBooks.sort(sortByYear);

console.log(filteredBooks);

