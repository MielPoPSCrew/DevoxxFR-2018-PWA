import { Speaker } from './speaker';

export class Talk {

    talkType: string;
    track: string;
    id: string;
    title: string;
    lang: string;
    summary: string;
    speakers: SpeakerSummary[];

    private constructor() {}

    public static fromJson(json: any): Talk {
        const talk: Talk = new Talk();

        talk.talkType = json['talkType'];
        talk.track = json['track'];
        talk.id = json['id'];
        talk.title = json['title'];
        talk.lang = json['lang'];
        talk.summary = json['summary'];
        talk.speakers = [];

        json['speakers'].map(item => {
            talk.speakers.push({
                id: item['link']['href'].substr(item['link']['href'].lastIndexOf('/') + 1),
                identity: Speaker.cleanIdentity(item['name'])
            });
        });


        return talk;
    }
}

interface SpeakerSummary {
    id: string;
    identity: string;
}
