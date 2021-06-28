import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as jsonwebtoken from 'jsonwebtoken';
import { Model } from 'mongoose';
import { SECRETORPRIVATEKEY } from 'src/environments';
import { Usuario, UsuarioDocument } from '../../schema/usuario.schema';
import { LoginDTO } from '../../common/dtoUtil/loginDto';

import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {


    constructor(
        @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>
        ){}

    generateJWT(uid:string): Promise<string> {
        return new Promise((resolve, reject) => {
            const payload = { uid };
            jsonwebtoken.sign(payload, SECRETORPRIVATEKEY, {
                expiresIn:'4h'
            },(err,token) => {
                if( err ){
                    console.log(err);
                    reject('No se pudo generar el token');
                }else{
                    resolve(token);
                }
    
            });
        })
      }


      async login(correo:string, password:string):Promise<LoginDTO>{
                let loginDto = new LoginDTO('ok','en busqueda', null,'');
                
                const usuario = await this.usuarioModel.findOne({correo});
                
                if(!usuario){
                    loginDto.msg = 'No existe el usuario';
                    loginDto.status = 'NOK'
                    return loginDto;
                }
        
                if(!usuario.estado){
                    loginDto.msg = 'Su estado no es correcto';
                    loginDto.status = 'NOK'
                    return loginDto;
                }


                //validar password 

                const validPassWord = bcryptjs.compareSync(password,usuario.password);

                if(!validPassWord){
                    loginDto.msg = 'Su password no es correcto';
                    loginDto.status = 'NOK'
                    return loginDto;
                }






                const token = await this.generateJWT(usuario._id);

                loginDto.userAuth = usuario;
                loginDto.msg = 'exito'
                loginDto.token = token;
                loginDto.status = 'OK'

                return loginDto;



      }


}
