import { MigrationInterface, QueryRunner } from "typeorm";

export class GenderEnum1725132053335 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE gender AS ENUM ('male', 'female');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TYPE gender;`);
    }

}
