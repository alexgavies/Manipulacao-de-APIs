   //Esse exercicio tem como proposito a o uso dos metodos async / await em funções

//async é usado quanto uma função precisa esperar obter uma deterninada informação para poder seguir com seu fluxo de execução. Asincrona é algo que não acontece ao mesmo tempo.

// await é a informação que será esperado pela função acync.


        // PRIMEIRO EXEMPLO DE USO DE ASINC AWAIT

        /*unction primeirafunc() {
            return new Promise((resolve)=>{ //promese de resolve depois de executar a arron-func 
                setTimeout(() => {
                    console.log('Esperou esse tempo') // execuçãode resolve
                    resolve()
                }, 2000); // arron-func passa 2000milesegundos ou 2 segundos antes de executar o resolve
            })
        }


        async function segundafunc() {
            console.log('Iniciou');

            await primeirafunc() //await faz com que a segundafunc espere a primerirafunc antes de executar o restante, definindo a ordem de execução descrita

            console.log('Terminou');
            
        }  segundafunc()*/



// SEGUNDO EXEMPLO DO USO DE ASYNC AWAIT, COM API.

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)// fetch faz solicitação na api atravz do HTPPS
    .then(data => data.json()) // .then() e .catch() metodo para converte apos receber as informações 
    .catch(err =>console.log(err)); //retorna o uqe fazer em caso de erro
}


async function showUserName(id) {
    try {                          //try catch serve para tramento de erro assi commo then catch na func a cima 
        const user= await getUser(id)

    console.log(`O nome do usuario é: ${user.data.first_name}`)
    } catch (err) {
        console.log(`Erro ${err}`);
    }
    
}  showUserName(3)