import { Speaker } from './speaker';

export class Talk {

    talkType: string;
    track: string;
    summaryAsHtml: string;
    id: string;
    title: string;
    lang: string;
    summary: string;
    speakers: string[];

    private constructor() {}

    public static fromJson(json: any): Talk {
        const talk: Talk = new Talk();

        talk.talkType = json['talkType'];
        talk.track = json['track'];
        talk.summaryAsHtml = json['summaryAsHtml'];
        talk.id = json['id'];
        talk.title = json['title'];
        talk.lang = json['lang'];
        talk.summary = json['summary'];
        talk.speakers = [];

        return talk;
    }
}
