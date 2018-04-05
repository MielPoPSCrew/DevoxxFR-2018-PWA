import { Break } from './break';
import { Talk } from './talk';
import { Room } from './room';

export class Event {

    slotId: string;
    day: string;
    room: Room;
    fromTime: string;
    fromTimeMillis: string;
    toTime: string;
    toTimeMillis: string;
    break: Break;
    talk: Talk;

    private constructor() {}

    public static fromJson(json: any): Event {
        const event: Event = new Event();

        event.slotId = json['slotId'];
        event.day = json['day'];
        event.room = Room.fromJson(json['roomId']);
        event.fromTime = json['fromTime'];
        event.fromTimeMillis = json['fromTimeMillis'];
        event.toTime = json['toTime'];
        event.toTimeMillis = json['toTimeMillis'];
        event.break = json['break'] == null ? null : Break.fromJson(json['break']);
        event.talk = json['talk'] == null ? null : Talk.fromJson(json['talk']);

        event.room = new Room();
        event.room.id = json['roomId'];
        event.room.capacity = json['roomCapacity'];
        event.room.setup = json['roomSetup'];
        event.room.name = json['roomName'];

        return event;
    }

    public isTalk(): boolean {
        return this.talk !== null && this.talk !== undefined;
    }

}
