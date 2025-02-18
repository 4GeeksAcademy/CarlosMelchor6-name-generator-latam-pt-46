
  let pronouns = ['the', 'our','their'];
  let adjs = ['great', 'big' ];
  let nouns = ['jogger', 'racoon','apple','computer'];
  let extensiones = ['.com', '.net', '.io']
   

  for ( let pronoun of pronouns) {
    for ( let adj of adjs) {
      for ( let noun of nouns){
        for ( let extension of extensiones){
          console.log( pronoun +  adj +  noun + extension  )
        }
      }
    }
  }