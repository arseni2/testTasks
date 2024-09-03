import { MigrationInterface, QueryRunner, TableIndex } from "typeorm";

export class CreateIndexForHasProblems1725208101725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createIndex(
            'user',
            new TableIndex({
                name: 'IDX_HAS_PROBLEMS',
                columnNames: ['hasProblems'],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('user', 'IDX_HAS_PROBLEMS');
    }
}
