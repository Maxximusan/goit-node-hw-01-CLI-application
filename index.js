const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// console.log(`11111111111111111: ${listContacts()}`);
// console.log(`222222222222222: ${getContactById()}`);
// console.log(`3333333333333333: ${removeContact()}`);
// console.log(`44444444444444444: ${addContact()}`);

const argv = require("yargs").argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      console.table(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;

    case "remove":
      const removedContact = await removeContact(id);
      console.table(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
