export class ContactsModel {
  email: string;
  socialNetworks: {
    _id: string;
    link: string;
    logo: string;
  }[];
  policyUrl: string;
  treatyUrl: string;
}
