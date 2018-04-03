export class Speaker {

    uuid: string;
    bio: string;
    bioAsHtml: string;
    firstName: string;
    lastName: string;
    avatarURL: string;
    company: string;
    blog: string;
    twitter: string;
    lang: string;
    acceptedTalks: string[];

    private constructor() {}

    public static fromJson(json: any): Speaker {
        const speaker: Speaker = new Speaker();

        speaker.uuid = json['uuid'];
        speaker.bio = json['bio'];
        speaker.bioAsHtml = json['bioAsHtml'];
        speaker.firstName = json['firstName'];
        speaker.lastName = json['lastName'];
        speaker.avatarURL = json['avatarURL'];
        speaker.company = json['company'];
        speaker.blog = json['blog'];
        speaker.twitter = json['twitter'];
        speaker.lang = json['lang'];
        speaker.acceptedTalks = json['acceptedTalks'];

        return speaker;
    }
}
