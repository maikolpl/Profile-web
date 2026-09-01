import asincronismo from '../assets/certificados/asincronismoConJs.jpg'
import basicoJS from '../assets/certificados/basico-javascript.jpg'
import basicoProgramacion from '../assets/certificados/basico-programacion.jpg'
import python from '../assets/certificados/cursoPython.jpg'
import webPack from '../assets/certificados/diploma-webpack_pages-to-jpg-0001.jpg'
import ecmaScript from '../assets/certificados/ecmascript-6.jpg'
import fundamentosJs from '../assets/certificados/fundamentos-javascript.jpg'
import gitHub  from '../assets/certificados/gitgithub.jpg'
import desarrolloBackEnd from '../assets/certificados/introduccionAlDesarroloBackEnd.jpg'
import jsPractico from '../assets/certificados/javascript-practico.jpg'
import nextJs from '../assets/certificados/nextjs-practico.jpg'
import npm from '../assets/certificados/npm-gestionDePaquetes.jpg'
import nextProfesional from '../assets/certificados/profesional-nextjs.jpg'
import react from '../assets/certificados/react-webpack-sass.jpg'
import terminal from '../assets/certificados/terminal.jpg'




export type Certificado = {
    id:number,
    title:string,
    img:string,
}

export const certificados: Certificado[]=[
    {
        id:1,
        title:'Curso Asincronismo Con Js',
        img: asincronismo
    },
    {
        id:2,
        title:'Curso Basico de Js',
        img: basicoJS
    },
    {
        id:3,
        title:'Curso Programacion Basica',
        img: basicoProgramacion
    },
    {
        id:4,
        title:'Curso Introduccion a la Programacion con Python',
        img: python
    },
    {
        id:5,
        title:'Curso de WebPack',
        img: webPack
    },
    {
        id:6,
        title:'curso ECMASCRIPT: Historia y Versiones de JS',
        img: ecmaScript
    },
    {
        id:7,
        title:'Curso Fundamentos De JS',
        img: fundamentosJs
    },
    {
        id:8,
        title:'Curso Git y GitHub',
        img: gitHub
    },
    {
        id:9,
        title:'Introduccion Al Desarrollo BackEnd',
        img: desarrolloBackEnd
    },
    {
        id:10,
        title:'Curso Practico De JS',
        img: jsPractico
    },
    {
        id:11,
        title:'Curso Practico De Next.Js',
        img: nextJs
    },
    {
        id:12,
        title:'NPM: Gestión De Paquetes Y Dependencias De JS',
        img: npm
    },
    {
        id:13,
        title:'Curso Profesional De Next.Js',
        img: nextProfesional
    },
    {
        id:14,
        title:'Curso Practico de React.Js',
        img: react
    },
    {
        id:15,
        title:'Introduccion A La Terminal Y Linea De Comandos',
        img: terminal
    }

]

