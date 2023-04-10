var json =
  '{"people":[\
     { "firstName": "Somsri", "lastName": "Jaidee" },\
     { "firstName": "Somsuk", "lastName": "Meejai" },\
     { "firstName": "Somruk", "lastName": "Deejai" }\
   ]}';

var obj = JSON.parse(json);
console.log(typeof obj); //object
console.log(obj); //{
/* people: [
       { firstName: 'Somsri', lastName: 'Jaidee' },
       { firstName: 'Somsuk', lastName: 'Meejai' },
       { firstName: 'Somruk', lastName: 'Deejai' }
     ]
   }*/
