import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	) {
	}

	async SetTrueAndCountProblems(): Promise<number> {
		// Начинаем транзакцию
		const count = await this.userRepository
			.createQueryBuilder()
			.update(UserEntity)
			.set({ hasProblems: false })
			.where('hasProblems = :hasProblems', { hasProblems: true })
			.returning('*') // Возвращаем обновленные записи
			.execute()
			.then(result => result.raw.length); // Подсчитываем количество обновленных записей

		return count;
	}
}
