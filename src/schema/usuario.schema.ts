import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({
      type:String,
      required:[
          true,
          'el nombre es obligatorio'
      ]
  })
  nombre: string;



  @Prop({
        type:String,
        required:[
            true,
            'el correo es obligatorio'
        ],
        unique:true
    })
    correo: string;

    @Prop({
        type:String,
        required:[
            true,
            'el password es obligatorio'
        ]
    })
    password: string;

    @Prop({
        type:String,
    })
    img: string;

    @Prop({
        type:String,
        required:[
            true,
            'el rol es obligatorio'
        ]
    })
    rol: string;

    @Prop({
        type:Boolean,
        default:true
    })
    estado: boolean;


    @Prop({
        type:Boolean,
        default:false
    })
    google: boolean;


  
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);