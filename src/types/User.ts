export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  firstName: string; // Add firstName property
  lastName: string; // Add lastName property
  address: Address;
  company: Company;
}