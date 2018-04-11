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
        speaker.bioAsHtml = json['bioAsHtml'];
        speaker.firstName = Speaker.cleanIdentity(json['firstName']);
        speaker.lastName = Speaker.cleanIdentity(json['lastName']);
        speaker.avatarURL = this.forceHttps(json['avatarURL']);
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
                    talkType: talk['talkType']
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

    public static forceHttps(url: string): string {
        
        let https = url;
        if (url === 'http://centromere.free.fr/me.png')
            console.log(https);

        if (url) {
            https = https.replace(/^http:/, 'https:');
            if (url === 'http://centromere.free.fr/me.png')
            console.log(https);
        }

        return https;
    }
}

interface AcceptedTalk {
    talkType: string;
    track: string;
    id: string;
    title: string;
}
