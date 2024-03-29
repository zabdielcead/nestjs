import * as dotenv from 'dotenv';
dotenv.config();


// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// author
const AUTHOR: string = process.env.AUTHOR || 'CEAD'

// application
const DOMAIN: string = process.env.DOMAIN || 'localhost';
const PORT: number = +process.env.PORT || 14047;
const END_POINT: string = process.env.END_POINT || 'graphql';
const VOYAGER: string = process.env.VOYAGER || 'voyager';
const FE_URL: string = process.env.FE_URL || 'xxx';
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000;

const URLMONGO: string = process.env.URLMONGO || 'mongodb+srv://user_node_cafe:zabdiel1@mycluster.iafyy.mongodb.net/cafeDB';


const URLMYSQL: string = process.env.URLMYSQL || 'https://www.db4free.net';
const PORTMYSQL: number = 3306;
const USERMYSQL: string = process.env.USERMYSQL || 'zabdielcead';
const PASSMYSQL: string = process.env.PASSMYSQL || 'zabdieldidier07';
const DBNAME: string = process.env.DBNAME || 'cineapp';

const SECRETORPRIVATEKEY:string =process.env.SECRETORPRIVATEKEY || 'S3CRET0';


export {
	NODE_ENV,
	AUTHOR,
	DOMAIN,
	PORT,
	END_POINT,
	VOYAGER,
	FE_URL,
	RATE_LIMIT_MAX,
	URLMONGO,
	URLMYSQL,
	PORTMYSQL,
	USERMYSQL,
	PASSMYSQL,
	DBNAME,
	SECRETORPRIVATEKEY

}