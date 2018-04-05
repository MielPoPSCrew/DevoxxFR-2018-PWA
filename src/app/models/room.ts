export class Room {

    id: string;
    name: string;
    capacity: Number;
    setup: string;

    public constructor() {}

    public static fromJson(json: any): Room {
        const event: Room = new Room();

        event.id = json['id'];
        event.name = json['name'];
        event.capacity = +json['capacity'];
        event.setup = json['setup'];

        return event;
    }
}
