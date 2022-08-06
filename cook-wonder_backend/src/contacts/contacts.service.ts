import { Injectable } from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ContactsModel} from './contacts.model';
import {ModelType, DocumentType} from '@typegoose/typegoose/lib/types';
import {CreateSocialsDto} from './dto/create-socials';
import {Types} from 'mongoose';


@Injectable()
export class ContactsService {
	constructor(@InjectModel(ContactsModel)
				private readonly contactsModel: ModelType<ContactsModel>) {}

	async setSocial(dto: CreateSocialsDto): Promise<DocumentType<ContactsModel['socialNetworks']>> {
		return this.contactsModel['socialNetworks'].create(dto);
	}

	async deleteSocial(id: string): Promise<DocumentType<ContactsModel['socialNetworks']> | null> {
		return this.contactsModel['socialNetworks'].findByIdAndDelete(id).exec();
	}

	async getSocial(socialId: string): Promise<DocumentType<ContactsModel['socialNetworks']>> {
		return this.contactsModel['socialNetworks']
			.findOne({socialId: new Types.ObjectId(socialId) }).exec();
	}

}
