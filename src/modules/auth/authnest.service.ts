import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO } from 'src/common/dtoUtil/loginDto';
import { Usuario, UsuarioDocument } from '../../schema/usuario.schema';

@Injectable()
export class AuthnestService {


    constructor(
                   @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
                    private jwtService: JwtService
                ){

    }



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
}
