export interface Pessoas {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    latitude: number;
    longitude: number;

}

export interface Photo {

    filepath: string;
    webviewPath: string;
    base64?: string;
}


