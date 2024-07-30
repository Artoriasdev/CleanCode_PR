(() => {
  //no aplicando el principio de responsabilidad unica
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    person: PersonProps;
    email: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, person }: UserProps) {
      super(person);
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // class UserSettings extends User {
  //   constructor(
  //     public workingDirectory: string,
  //     public lastOpenFolder: string,
  //     email: string,
  //     role: string,
  //     name: string,
  //     gender: Gender,
  //     birthdate: Date
  //   ) {
  //     super(email, role, name, gender, birthdate);
  //   }
  // }

  // const userSettings = new UserSettings(
  //   "/usr/home",
  //   "/home",
  //   "franco@google.com",
  //   "Admin",
  //   "Franco",
  //   "M",
  //   new Date("1985-10-21")
  // );

  // console.log({
  //   userSettings,
  //   areCrendentialsValid: userSettings.checkCredentials(),
  // });
})();
