//--------------------------ATRIBUTOS--------------------------
//dicionario con los usuarios
//var dicUsrs: { [key: string]: number; } = {};
var dicUsrs = new Map<string, number>();
var amigos: User[];
//TO_DO Cambiar la clase de number a post
var posts: number[];
//TO_DO Cambiar la clase de number a comentario
var comentarios: number[];

// carga los usuarios existentes
function cargarMundo(): void {
    const fs = require('fs');

    fs.readFile('./src/per.json', 'utf-8', (err: any, jsonString: any) => {
        if (err) {
            console.log(err);
        } else {
            try {
                const data = JSON.parse(jsonString);
                //INICIALIZAR LOS USUARIOS
                for (var ky of data.mundo1.usersKeys) {
                    //console.log(ky[0]);
                    //console.log(ky[1]);
                    crearUsr(ky[0], ky[1]);

                }
            }
            catch (err) {
                console.log('Error parsing JSON', err);
                console.log("sammeeeeeeeeeeeeeeeeeeeeeeeefffffff")
            }
        }

    });

}

//crea un usuario en el diccionario volatil
function crearUsr(nomUs: string, keyUs: number) {
    dicUsrs.set(nomUs, keyUs);
}

//guarda el usuario en el JSON
function saveUsr(nomUs: string, keyUs: number) {
    const fs = require('fs');

    fs.readFile('./src/per.json', 'utf-8', (err: any, jsonString: any) => {
        if (err) {
            console.log(err);
        } else {
            try {
                const data = JSON.parse(jsonString);
                
                //METE EL NOMBRE Y LA CLAVE
                data.mundo1.usersKeys.push([nomUs, keyUs]);
                //METE UNA LISTA DE AMIGOS VACIA
                data.mundo1.amigos.push([nomUs, []]);
                fs.writeFile ('./src/per.json', JSON.stringify(data), function(err:any) {
                    if (err) throw err;
                    console.log('complete');
                    }
                );
              
            }
            catch (err) {
                console.log('Error parsing JSON', err);
                console.log("sammeeeeeeeeeeeeeeeeeeeeeeeefffffff")
            }
        }

    });

}



function mostrarMuro(userP: User) {
    return userP;
}

function main(): void {
    cargarMundo();
    // for (let [key, value] of dicUsrs) {
    //     console.log(key, value);            
    // }
}

main();

//DEMO DE INGRESAR UN USUARIO
//saveUsr('user6',6);
//crearUsr('user6',6);

