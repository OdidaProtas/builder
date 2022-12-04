import { MigrationInterface, QueryRunner } from "typeorm";

export class app1670146982293 implements MigrationInterface {
    name = 'app1670146982293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "logo" character varying, CONSTRAINT "UQ_f36adbb7b096ceeb6f3e80ad14c" UNIQUE ("name"), CONSTRAINT "PK_9478629fc093d229df09e560aea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "page" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "logo" character varying, "layout" character varying, CONSTRAINT "UQ_b82c19c08afb292de4600d99e4f" UNIQUE ("name"), CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "page"`);
        await queryRunner.query(`DROP TABLE "app"`);
    }

}
