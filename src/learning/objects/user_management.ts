import { User } from "./user.ts";

// ? Vytvoření instance třídy User s názvem adminUser
const adminUser = new User("admin", "admin", 30, "petr@seznam.cz");

// ? Volání metody getUserName na instanci třídy User
console.log(adminUser.getUsername());

// ? Volání metody logUser na instanci třídy User
adminUser.logUser();

// ? Volání metody setAge na instanci třídy User
adminUser.setAge(31);

// ? Volání metody logUser na instanci třídy User, věk bude změněný
adminUser.logUser();

console.log(adminUser.getEmail());
