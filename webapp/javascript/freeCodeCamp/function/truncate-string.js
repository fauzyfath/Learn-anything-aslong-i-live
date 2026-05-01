const truncateString = (string, number) => {
  if(string.length > number){
    return string.slice(0, number) + "...";
  }
  else{
    return string;
  }
}
const sentences = "A-tisket a-tasket A green and yellow basket"
console.log(truncateString(sentences,1));