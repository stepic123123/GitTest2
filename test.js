let house = {
     age: 30,
    name: "Big house",
   address: {
        city: "Kyiv",
        street: "Freedom",
        }
        };

 console.log(house);

 house["Ground floor"] = true;

 console.log(house);

 delete house.age;

 console.log(house);

 let home = object.assign({}, house);

 home.age = 18;

 console.log(house);
 console.log(home);




    

    











