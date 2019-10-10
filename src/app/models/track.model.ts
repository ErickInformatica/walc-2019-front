export class Track{
    constructor(
        public _id: String,
        public titulo:String,
        public descripcion: [],
        public temasTrack: [],
        public objetivosTrack: [],
        public objetivoGeneral:String,
        public dirigidoA:String,
        public preRequisito: [],
        public materiales: String,
        public metodologia: string,
        public nombresInstructores: [],
        public cupo: string,
        public duracion: string,
        public imagen: String,
        public icon: String,
        public agenda: []
    ){}
}

