//--------------------------ATRIBUTOS--------------------------
//dicionario con los usuarios
//var dicUsrs: { [key: string]: number; } = {};
var dicUsrs = new Map<string, number>();
var amigos: any[] = [];
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
                //INICIALIZA LOS AMIGOS
                for (var am of data.mundo1.amigos) {
                    cargarAmigos(am);

                }
                console.log(amigos);
            }
            catch (err) {
                console.log('Error parsing JSON', err);
                console.log("sammeeeeeeeeeeeeeeeeeeeeeeeefffffff")
            }
        }

    });

}

//carga los amigos en una lista, TO_DO VOLVERLO HASH
function cargarAmigos(am: any[]) {
    // amigos:any[];
    amigos.push(am);
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
                fs.writeFile('./src/per.json', JSON.stringify(data), function (err: any) {
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



function mostrarMuro(userp: string) {
    let amigosUserp: string[] = [];
    for (var amTemp of amigos) {
        //console.log(ky[0]);
        //console.log(ky[1]);
        if (amTemp[0] === userp)
            amigosUserp = amTemp[1];
        console.log(amigosUserp);

    }
    console.log('aasdfasdf',amigos);
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

//DEMO DE MOSTRAR MURO
mostrarMuro('user1');

