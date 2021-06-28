import {  ForbiddenException, Injectable } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CursoDto } from './dto/cursoDto';
import { Model } from 'mongoose';
import { convertArray, convertObjToArray, forceCastArray } from '../../utils/class-cast-util';
import { ResponseDto } from './dto/responseDto';
import { AlumnoDto } from './dto/alumnoDto';
import { TokenDto } from '../auth/dto/TokenDto';
import { AuthService } from '../auth/auth.service';
import { LoginDTO } from 'src/common/dtoUtil/loginDto';
import { UsuarioDto } from '../prueba/dto/usuarioDto';
// import { LoginDTO } from 'src/common/dtoUtil/loginDto';
// import { UsuarioDto } from '../prueba/dto/usuarioDto';




@Injectable()
export class PruebaMysqlService {

   

    constructor(private readonly sequelize:Sequelize, private authService: AuthService){

    }

    async consultaCurso(): Promise<CursoDto[]> {

        

       let cursosResp: CursoDto[] = [];
       await   this.sequelize.query('SELECT * FROM `cursos`', { type: QueryTypes.SELECT})
        .then(cursos => {
          // We don't need spread here, since only the results will be returned for select queries
          console.log('cursos', cursos);
          //console.log('id');
          
          cursos.forEach(val  => {
              
              const cursito = new CursoDto(val['id'],val['create_at'],val['nombre'] );
              console.log('cursito', cursito);
              cursosResp.push(cursito);
          });

          
        })
        .catch(()=>{
            throw new ForbiddenException('errrrroororororor');
        });

        return cursosResp;

       // const curso = new CursoDto(1,'19/06/1987', 'fsdhfusdhf');
        //cursosResp.push(curso);
        
    }



    async consultaCursoProc(): Promise<CursoDto[]> {



    

        

        let cursosResp: CursoDto[] = [];
        await   this.sequelize.query('CALL `checkCursoByNombre` (:materia)', {  replacements:{ materia: 'historia'}})
         .then(cursos => {
           // We don't need spread here, since only the results will be returned for select queries
           console.log('cursos', cursos);
           //console.log('id');
           
           cursos.forEach(val  => {
               
               const cursito = new CursoDto(val['id'],val['create_at'],val['nombre'] );
               console.log('cursito', cursito);
               cursosResp.push(cursito);
           });
 
           
         })
         .catch(()=>{
             throw new ForbiddenException('errrrroororororor');
         });
 
         return cursosResp;
 
        // const curso = new CursoDto(1,'19/06/1987', 'fsdhfusdhf');
         //cursosResp.push(curso);
         
     }


     async consultaCursoProcMultiple(): Promise<ResponseDto> {



    

        

        let cursosResp: CursoDto[] = [];
        let resp:ResponseDto;
        await   this.sequelize.query('CALL `checkMultiplesTablas` (:materia)', { raw:true , type:QueryTypes.SELECT, replacements:{ materia: 'historia'} })
         //.then(respuesta => respuesta.json())
         .then(cursos => {
           // We don't need spread here, since only the results will be returned for select queries
           //console.log(cursos);
                
        console.log('entro');
        //    let sp = JSON.stringify(cursos);
           
        //    sp.replace('TextRow','');


        //   let cursoJSON = JSON.parse(sp);

        let cursoJSON = convertObjToArray(cursos);

           console.log('cursoJSON', cursoJSON);

           

            //  let primer = Object.entries(cursos[0]);
            //   let segundo = Object.entries(cursos[1]);


            let primer = forceCastArray(cursoJSON[0]) as Array<CursoDto>;
            let segundo = forceCastArray(cursoJSON[1]) as Array<AlumnoDto>;
          
            
            //  console.log('primer', typeof primer);
            //  console.log('segundo', typeof segundo);
            
            //  let finalArray = convertArray(primer);
            //  let finalArrayDos = convertArray(segundo);

            //  let finalArray = new Array();
            //  for(let k in segundo){
            //      finalArray.push(segundo[k]);
            //  }


             console.log(primer);
             console.log(segundo);

               resp =new ResponseDto(primer,segundo,'ok');
              

                //   console.log(forceCastArray(primer));
                //   console.log(forceCastArray(segundo));

            // console.log('')
            
        //    let resultOne = [];
        //    let resultDos = [];


        //    let llaveUno = Object.keys(primer);
        //    let llaveDos = Object.keys(segundo);

        //    llaveUno.forEach(function(key){
        //     resultOne.push(key)
        //    })

        //    llaveDos.forEach(function(key){
        //     resultDos.push(key)
        //    })


        //    console.log('llaveUno',llaveUno);
        //    console.log('llaveDos',llaveDos);







           //console.log('primer', primer);
           //console.log('segundo', segundo);
            
            

           //console.log('id');
           
        //    cursos.forEach(val  => {
               
        //        const cursito = new CursoDto(val['id'],val['create_at'],val['nombre'] );
        //        console.log('cursito', cursito);
        //        cursosResp.push(cursito);
        //    });
 
           
         })
         .catch(()=>{
             throw new ForbiddenException('errrrroororororor');
         });
         return resp;
         
 
        // const curso = new CursoDto(1,'19/06/1987', 'fsdhfusdhf');
         //cursosResp.push(curso);
         
     }


     async consultaToken(): Promise<TokenDto> {


        const token = new TokenDto(await this.authService.generateJWT('1234')); 

        
        
        return token;

     }



     async login(data: UsuarioDto): Promise<LoginDTO> {


        const user = await this.authService.login(data.correo, data.password);

        
        
        return user;

     }




}
