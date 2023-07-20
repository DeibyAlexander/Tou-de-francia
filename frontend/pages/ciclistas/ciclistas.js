import { getAllCiclistas, insertCiclistas, deleteCiclistas, oneCiclistas, updateCiclistas  } from "../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    showCiclistas();
})


async function showCiclistas(){
    const data = await getAllCiclistas();
    const bodyCard = document.getElementById('container');
    data.forEach((ciclista,index) => {
        const {_id,nombre,edad,país, equipo, victorias}= ciclista;
        bodyCard.innerHTML+=`
        <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="../../assets/img/mountain-bike-g2568f8277_1280.jpg" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                           
                                <li class="text-muted text-right">${index+1}</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">${nombre}</a>
                            <br>
                            <br>

                            <p class="card-text">Edad: ${edad}</p>
                            <p class="card-text">Pais: ${país}</p>
                            <p class="card-text">Equipo: ${equipo}</p>
                            <p class="card-text">Victorias: ${victorias}</p>
                            <p class="text-muted"></p>

                            <div class="modal-footer">
                                <button class="btn  eliminar fas fa-trash text-dark" id="${_id}" style="font-size:20px;"></button>
                                <button type="button" class="btn  editar fas fa-pen text-dark" id="${_id}" data-bs-toggle="modal" data-bs-target="#editarCiclistaModal" data-bs-whatever="@getbootstrap" style="font-size:20px;"></button>
                            </div>
                        </div>


                        
                    </div>
                </div>
        `
        
    });

    // ? LLAMAR LAS FUNCIONES
    sendInfo();
    showDelete();
    showEdit(); 

}

async function sendInfo(){
    const agregarCiclistaForm = document.querySelector('#agregarCiclistaForm');
    const nombreCiclista = document.querySelector('#nombreCiclista');
    const edadCiclista = document.querySelector('#edadCiclista');
    const paisCiclista = document.querySelector('#paisCiclista')
    const equipoCiclista = document.querySelector('#equipoCiclista')
    const victoriasCiclista = document.querySelector('#victoriasCiclista')


    agregarCiclistaForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = {
            nombre : nombreCiclista.value,
            edad : edadCiclista.value,
            país : paisCiclista.value,
            equipo : equipoCiclista.value,
            victorias : victoriasCiclista.value

        }

        if (insertCiclistas(data)) {
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location = 'ciclistas.html';

            },2000)
            
        }
    })
}



async function showDelete(){
    const botonEliminar = document.querySelectorAll('.eliminar');
    botonEliminar.forEach((eliminar) => {
        eliminar.addEventListener('click', async()=>{
            const confirmar = swal({
                title: "Estas seguro?",
                text: "No podrás recuperar tus datos!",
                icon: "warning",
                buttons: [
                    'No, cancelar!',
                    'Sí, estoy segur@!'
                ],
                dangerMode: true,
            }).then(function(confirm){
                if (confirm) {
                    swal({
                        title: 'Eliminado Correctamente!',
                        text: 'Ya no puedes recuperar tus datos',
                        icon: 'success'
                    }).then(function () {
                        deleteCiclistas(eliminar.id);
                        window.location = 'ciclistas.html';
                    });
                      
                }else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }

            });
        })
        
    });
}

function showEdit(){
    const editarCiclistaForm = document.querySelector('#editarCiclistaForm');
    const nombreCiclistaEdit = document.querySelector('#nombreCiclistaEdit');
    const edadCiclistaEdit = document.querySelector('#edadCiclistaEdit');
    const paisCiclistaEdit = document.querySelector('#paisCiclistaEdit');
    const equipoCiclistaEdit = document.querySelector('#equipoCiclistaEdit')
    const victoriasCiclistaEdit = document.querySelector('#victoriasCiclistaEdit');

    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach((editar) => {

        editar.addEventListener('click', async ()=>{
            const id = editar.id;
            const ciclista = await oneCiclistas(id);
            console.log(ciclista);

            nombreCiclistaEdit.value= ciclista.nombre;
            edadCiclistaEdit.value= ciclista.edad;
            paisCiclistaEdit.value= ciclista.país;
            equipoCiclistaEdit.value= ciclista.equipo;
            victoriasCiclistaEdit.value= ciclista.victorias;

            editarCiclistaForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const newObject= {
                    nombre: nombreCiclistaEdit.value,
                    edad: edadCiclistaEdit.value,
                    país: paisCiclistaEdit.value,
                    equipo: equipoCiclistaEdit.value,
                    victorias: victoriasCiclistaEdit.value
                };
                console.log(newObject);

                if (await updateCiclistas(id,newObject)) {
                    swal("Datos Actualizados satisfactoriamente","Enviado","success");
                    setTimeout(()=>{
                        window.location = 'ciclistas.html'
                    },1500);
                    
                }
            })

        });
        
    });


}  