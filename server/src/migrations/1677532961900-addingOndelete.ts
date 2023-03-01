import { MigrationInterface, QueryRunner } from "typeorm";

export class addingOndelete1677532961900 implements MigrationInterface {
    name = 'addingOndelete1677532961900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_fc42575c192706f18bb905f8c3f"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_9beec40b48df8ecad98b434f326"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_fc42575c192706f18bb905f8c3f" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_9beec40b48df8ecad98b434f326" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_9beec40b48df8ecad98b434f326"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_fc42575c192706f18bb905f8c3f"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_9beec40b48df8ecad98b434f326" FOREIGN KEY ("vehicleId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_fc42575c192706f18bb905f8c3f" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
