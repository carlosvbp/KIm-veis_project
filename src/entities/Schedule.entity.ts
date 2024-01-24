import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import RealEstate from "./RealEstate.entity";

@Entity("schedules")
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({type: "date"})
    date: string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => User, (user) => user.schedules)
    user: User

    @ManyToOne(() => RealEstate, (realstate) => realstate.schedules)
    realEstate: RealEstate
}

export default Schedule