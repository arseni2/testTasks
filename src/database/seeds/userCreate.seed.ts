import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import {UserEntity} from "../../entities/user.entity";

export default class CreateUser implements Seeder {
	public async run(factory: Factory, dataSource: DataSource): Promise<void> {
		try {
			await factory(UserEntity)().createMany(1000000);
			console.log('10 users created successfully.');
		} catch (error) {
			console.error('Error creating users:', error);
		}
	}
}