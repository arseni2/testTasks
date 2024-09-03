import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Gender} from "../enum/gender.enum";

@Entity("user")
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	age: number;

	@Column({
		type: 'enum',
		enum: Gender,
	})
	gender: Gender; // Использование enum

	@Column({ default: false })
	hasProblems: boolean;
}
