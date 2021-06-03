import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PruebitaDto } from './dto/pruebaDto';
import { Usuario, UsuarioDocument } from '../../schema/usuario.schema';
import { Model } from 'mongoose';
import { UsuarioDto } from './dto/usuarioDto';

@Injectable()
export class PruebaService {



    constructor(@InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>){}
    
     async add(data: PruebitaDto): Promise<PruebitaDto> {
        const cat = new PruebitaDto(data.id, data.name, data.weight);
        return cat;
    }

    async createUser(usuarioDto: UsuarioDto): Promise<Usuario> {

        const existeEmail = await this.usuarioModel.findOne({correo: usuarioDto.correo});

        if(existeEmail){
            throw new ForbiddenException('errrrroororororor ya existe el usuario');
        }


        
        const createUsuario = new this.usuarioModel(usuarioDto);
        return createUsuario.save();
      }

}
