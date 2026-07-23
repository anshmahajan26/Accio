//getter and setter are mentods used in object to control access of properties
// to read and update properties

const user = {
  firstName: "Om",
  lastName: "Patil",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

// console.log(user.fullName); // Om Patil

// user.fullName = "ansh mahajan";

// console.log(user.firstName); // Rahul
// console.log(user.lastName);  // Sharma


//bank
