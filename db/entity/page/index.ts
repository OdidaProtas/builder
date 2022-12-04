import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Page {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  logo!: string;

  @Column({ nullable: true })
  layout!: string;
  
}
