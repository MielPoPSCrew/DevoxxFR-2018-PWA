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
    acceptedTalks: AcceptedTalk[];

    private constructor() {}

    public static fromJson(json: any): Speaker {
        const speaker: Speaker = new Speaker();

        speaker.uuid = json['uuid'];
        speaker.bio = json['bio'];
        speaker.firstName = json['firstName'];
        speaker.lastName = json['lastName'];
        speaker.avatarURL = json['avatarURL'];
        speaker.company = json['company'];
        speaker.blog = json['blog'];
        speaker.twitter = json['twitter'];
        speaker.lang = json['lang'];
        speaker.acceptedTalks = [];

        json['acceptedTalks'].map(
            talk => {
                speaker.acceptedTalks.push({
                    id: talk['id'],
                    track: talk['track'],
                    title: talk['title'],
                    talkType: talk['title']
                });
            }
        );

        return speaker;
    }

    public static cleanIdentity(identity: string): string {
        return identity
            .toLowerCase()
            .split(' ')
            .map(word => word[0].toUpperCase() + word.substr(1))
            .join(' ');
    }
}

interface AcceptedTalk {
    talkType: string;
    track: string;
    id: string;
    title: string;
}
