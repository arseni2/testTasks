import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1725132064991 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL PRIMARY KEY,
                "firstName" VARCHAR NOT NULL,
                "lastName" VARCHAR NOT NULL,
                "age" INT NOT NULL,
                "gender" gender NOT NULL,
                "hasProblems" BOOLEAN DEFAULT FALSE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user";`);
    }

}
