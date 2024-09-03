import {UserEntity} from "../../entities/user.entity";
import { define } from 'typeorm-seeding';
import {Gender} from "../../enum/gender.enum";

define(UserEntity, () => {
	const user = new UserEntity();

	user.age = Math.floor(Math.random() * 100);
	user.firstName = `firstName_${Math.random()}`;
	user.lastName = `lastName_${Math.random()}`;
	user.gender = Math.random() < 0.5 ? Gender.MALE : Gender.FEMALE;
	user.hasProblems = Math.random() < 0.5;

	return user;
});
