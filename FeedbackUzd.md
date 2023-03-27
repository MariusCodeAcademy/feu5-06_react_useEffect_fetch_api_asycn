## Užduotis: Feedback komponentas

Šioje užduotyje sukursite React funkcijinį komponentą pavadinimu Feedback, kuris rodo pranešimą su skirtingais tipais: informacinis, klaidos ar sėkmingas.

## Reikalavimai:

1. Sukurkite React funkcijinį komponentą pavadinimu Atsiliepimai.
2. Komponentas turi priimti tipą ir tekstą kaip props'us.
3. Priimtas tipas turėtų būti vienas iš trijų: info, error ar success.
4. Komponentas turėtų atitinkamai rodyti pranešimą tinkamu spalvų apipavidalinimu:
   - `info` tipas turi būti mėlynas fonas ir juoda spalva tekste.
   - `error` tipo turėtų būti raudonas fonas ir balta spalva tekste.
   - `success` tipo turėtų būti žalias fonas ir balta spalva tekste.
5. Tekstas turi būti rodomas tarp dviejų div elementų, vienas elementas turi turėti fono spalvą, kitas - teksto spalvą.
6. Eksportuokite Atsiliepimai komponentą kaip numatytąjį eksportą savo modulyje.

```r
import React from 'react';
import Atsiliepimai from './Atsiliepimai';

const MyComponent = () => {
  return (
    <div>
      <Feedback tipas="info" tekstas="Tai informacinis pranešimas" />
      <Feedback tipas="error" tekstas="Tai klaidos pranešimas" />
      <Feedback tipas="success" tekstas="Tai sėkmingas pranešimas" />
    </div>
  );
};

export default MyComponent;

```
