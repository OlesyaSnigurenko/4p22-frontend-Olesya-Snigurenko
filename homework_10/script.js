"use strict";

console.log("-----------");
console.log("Пункт №1:");
console.log("-----------");
fetch("https://reqres.in/api/users?per_page=12")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    const usersList = result.data;
    console.log(usersList);

    console.log("-----------");
    console.log("Пункт №2:");
    console.log("-----------");

    usersList.forEach((user) => {
      console.log(user.id + ". " + user.last_name);
    });

    console.log("-----------");
    console.log("Пункт №3:");
    console.log("-----------");

    /* let customers = usersList.filter(function (person) {
      if (person.last_name[0] === "F") {
        console.log(person.last_name);
        for (const item in person) {
          console.log(item + ": " + person[item] + ",");
        }
      }
    }); */

    let customers = usersList.filter(function (person) {
      return person.last_name[0] === "F";
    });
    console.log(customers);

    console.log("-----------");
    console.log("Пункт №4:");
    console.log("-----------");

    const ullUsers = usersList.reduce((accumulator, item) => {
      if (accumulator === "") {
        accumulator = item.first_name + " " + item.last_name;
        return accumulator;
      }
      accumulator = `${accumulator}, ${
        item.first_name + " " + item.last_name
      } `;
      return accumulator;
    }, "");

    console.log(
      "Наша база содержит данные следующих пользователей: " + ullUsers
    );

    console.log("-----------");
    console.log("Пункт №5:");
    console.log("-----------");

    /* for (let Object of usersList) {
      for (let key in Object) {
        console.log(key);
      }
    } */

    usersList.forEach((user) => {
      console.log(user.id + ": " + Object.keys(user));
    });
  })

  .catch((e) => {
    console.log(e);
  });
