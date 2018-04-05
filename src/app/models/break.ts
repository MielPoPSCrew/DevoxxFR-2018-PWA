import { Room } from './room';

export class Break {

    id: string;
    nameEN: string;
    nameFR: string;

    private constructor() {}

    public static fromJson(json: any): Break {
        const event: Break = new Break();

        event.id = json['id'];
        event.nameEN = json['nameEN'];
        event.nameFR = json['nameFR'];

        return event;
    }
}
