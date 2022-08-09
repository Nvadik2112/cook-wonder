import {prop} from '@typegoose/typegoose';
import {Types} from 'mongoose';
import {Type} from 'class-transformer';

 class SocialNetwork {
 	link: string;
 	logo: string;
 }

export class CreateContactsDto {
	email: string;
	policyUrl: string;
	treatyUrl: string;
	contactId: string;
	socialNetworks: SocialNetwork[];
}