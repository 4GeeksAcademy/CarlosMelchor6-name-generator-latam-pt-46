
  let pronouns = ['the', 'our','their'];
  let adjs = ['great', 'big' ];
  let nouns = ['jogger', 'racoon','apple','computer'];
  
   

  for ( let pronoun of pronouns) {
    for ( let adj of adjs) {
      for ( let noun of nouns){
        console.log( pronoun + " " + adj + " " + noun + ".com" )
      }
    }
  }