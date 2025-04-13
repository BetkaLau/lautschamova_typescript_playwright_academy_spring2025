export class User {
  public username: string;
  password: string;
  age: number;
  isActive: true;
  email: string;
  readonly role = "user";

  constructor(username: string, password: string, age: number, email: string) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.isActive = true;
    this.email = email;
    console.log(
      `Vytvořen uživatel ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
  }

  getUsername(): string {
    return this.username;
  }

  logUser(): void {
    console.log(
      `Uživatel: ${this.username} ve věku ${this.age}, aktivován: ${this.isActive}`
    );
  }

  setAge(newAge: number): void {
    console.log(
      `Změna věku uživatele ${this.username} z ${this.age} na ${newAge}`
    );
    this.age = newAge;
  }

  getEmail(): string {
    return this.email;
  }

  private internalMethod(): void {
    console.log("Můžu být volaná jen uvnitř objektu");
  }
}
