import userFetch from "./useFetch";

export default function getUsers(url) {
  const users = userFetch("https://jsonplaceholder.typicode.com/users");

  const firstNames = [];
  const lastNames = [];
  const nameTitles = ["Mrs.", "Mr.", "Ms."];

  users.forEach(function (contact) {
    const nameParts = contact.name.split(" ");
    let firstName = nameParts[0];
    let lastName = nameParts[nameParts.length - 1];
    if (lastName.length === 1) {
      lastName = nameParts[nameParts.length - 2];
    }

    if (nameTitles.includes(nameParts[0])) {
      firstName = nameParts[1];
    }
    if (!firstNames.includes(firstName)) {
      firstNames.push(firstName);
    }

    if (!lastNames.includes(lastName)) lastNames.push(lastName);
  });

  return { users, firstNames, lastNames };
}
