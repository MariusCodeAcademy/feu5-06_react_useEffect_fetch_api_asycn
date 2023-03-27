# Užduotis: Įkelti ir rodyti prekes

Šioje užduotyje sukursite React komponentą, kuris įkelia duomenis iš API ir rodo straipsnių sąrašą.

## Reikalavimai:

1. Sukurkite React funkcijinį komponentą pavadinimu PostsList, kuris įkelia duomenis iš šio API: https://dummyjson.com/posts
2. Naudokite useEffect huką, kad galėtumėte užkrauti API užklausą, kai komponentas yra atvaizduojamas
3. Duomenis, gautus iš API, saugokite naudodami useState huką
4. Rodykite straipsnių sąrašą naudodami map metodą posts masyve, gautame iš API
5. Susikurkite SinglePost.jsx komponentą.
6. Rodykite kiekvieno straipsnio šiuos atributus:
   - id
   - title
   - body
   - userId
   - tags (atskirtas kableliais)
   - reactions
7. Eksportuokite PostsList komponentą kaip numatytąjį eksportą savo modulyje

```r
import React from 'react';
import PostsList from './PostsList';

const MyComponent = () => {
  return (
    <div>
      <PostsList />
    </div>
  );
};

export default MyComponent;

```

8. prideti mygtuka delete i SinglePost.
9. jo paspaudimu istrinti ta post is state.
