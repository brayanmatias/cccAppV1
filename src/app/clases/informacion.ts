export class Informacion {
    public areas: Area[] = [];
    public dias: Dia[] = [];

    constructor() {

    }
}

export class Area {
    public id: number;
    public area: string;

    constructor() {}
}

export class Dia {
    public id: number;
    public dia: string;

    constructor() {}
}