import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO } from 'src/common/dtoUtil/loginDto';
import { ValidateLoginDto } from 'src/common/dtoUtil/validateLoginDto';
import { SECRETORPRIVATEKEY } from 'src/environments';
import { Usuario, UsuarioDocument } from '../../schema/usuario.schema';

@Injectable()
export class AuthdosService {
    
     constructor(
        @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
         private jwtService: JwtService
     ){}



    async login(correo:string, password:string):Promise<LoginDTO>{

                //console.log('login2');
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
                
                //console.log('usuariologin2', usuario);
                
                const token = this.jwtService.sign({user:usuario._id});
                
                //console.log('token', token);
                //validar password 
                
                // const validPassWord = bcryptjs.compareSync(password,usuario.password);
                
                // if(!validPassWord){
                //     loginDto.msg = 'Su password no es correcto';
                //     loginDto.status = 'NOK'
                //     return loginDto;
                // }
                
                
                
                
                
                
                //const token = await this.generateJWT(usuario._id);
                
                loginDto.userAuth = usuario;
                loginDto.msg = 'exito'
                loginDto.token = token;
                loginDto.status = 'OK'
                
                return loginDto;



    }



    async validateToken(token:string):Promise<ValidateLoginDto>{
            console.log('valiodtoken',token);

            const {user} = this.jwtService.verify(token,{secret:SECRETORPRIVATEKEY});
            const usuario =   await this.usuarioModel.findById(user);
            console.log('userfind',usuario);
            const validLogin = new ValidateLoginDto('ok','exitoso',usuario);
            return validLogin;
    }

}
