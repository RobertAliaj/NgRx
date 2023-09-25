import {createAction, createReducer, on} from '@ngrx/store';

export const productReducer = createReducer(
  {showProductCode: true},
  on(createAction('[Product] Toggle Product Code'), state => {
    console.log('Original State ', JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);






// // Importiert Funktionen aus der '@ngrx/store' Bibliothek.
// // createAction ist zum Erstellen von Redux Actions,
// // createReducer zum Erstellen eines Reducers
// // und on zum Anwenden der Action auf den Reducer.
// import {createAction, createReducer, on} from '@ngrx/store';
//
// // Erstellt einen Reducer mit dem Namen 'productReducer'
// export const productReducer = createReducer(
//   // Inititalstate des Reducers. In diesem Fall gibt es nur ein Attribut: 'showProductCode', welches auf 'true' gesetzt ist.
//   {showProductCode: true},
//
//   // `on` wird verwendet, um auf eine bestimmte Action zu hören und den Zustand entsprechend zu aktualisieren.
//   on(createAction('[Product] Toggle Product Code'), state => {
//
//     // Zeigt den aktuellen Zustand in der Konsole an.
//     console.log('Original State ', JSON.stringify(state));
//
//     // Gibt einen neuen Zustand zurück, der eine Kopie des vorherigen Zustands ist, wobei 'showProductCode' invertiert ist.
//     return {
//       ...state,
//       showProductCode: !state.showProductCode
//     };
//   })
// );
