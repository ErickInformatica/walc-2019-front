export class Conferencia{
    constructor(
        public _id: String,
        public nombreCharla:String,
        public descripcion: String,
        public comunicador: String,
        public salon: String,
        public numeroAsiento:Number,
        public fecha:String,
        public capacidad: Number,
        public image: String,
        public ocupados: string
    ){}
}