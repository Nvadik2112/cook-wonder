import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

class SocialNetwork {
  @prop()
  link: string;

  @prop()
  logo: string;

  @prop()
  socialId: Types.ObjectId;
}

export interface ContactsModel extends Base { }
export class ContactsModel extends TimeStamps {
  @prop()
  email: string;

  @prop({ type: () => [SocialNetwork]})
  socialNetworks: SocialNetwork[];

  @prop()
  policyUrl: string;

  @prop()
  treatyUrl: string;
}
