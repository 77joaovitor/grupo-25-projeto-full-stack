import { MigrationInterface, QueryRunner } from "typeorm";

export class columPin1677804520012 implements MigrationInterface {
    name = 'columPin1677804520012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "pin" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "pin" SET NOT NULL`);
    }

}
