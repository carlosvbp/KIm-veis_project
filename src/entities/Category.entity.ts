import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./RealEstate.entity";

@Entity("categories")
class Category {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({length: 45, unique: true})
    name: string

    @OneToMany(() => RealEstate, (realestate) => realestate.category)
    realEstate: RealEstate[]
}

export default Category