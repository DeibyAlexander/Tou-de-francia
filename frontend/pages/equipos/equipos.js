import { getAllEquipos, insertEquipos, deleteEquipos, oneEquipos, updateEquipos  } from "../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    showEquipos();
})


async function showEquipos(){
    const data = await getAllEquipos();
    const bodyCard = document.getElementById('container');
    data.forEach((equipos,index) => {
        const {_id,equipo,país,patrocinador, director, ciclistas}= equipos;
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
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">${equipo}</a>
                            <br>
                            <br>

  
                            <p class="card-text">Pais: ${país}</p>
                            <p class="card-text">Patrocinador: ${patrocinador}</p>
                            <p class="card-text">Director: ${director}</p>
                            <p class="card-text">Ciclistas: ${ciclistas}</p>
                            <p class="text-muted"></p>

                            <div class="modal-footer">
                                <button class="btn  eliminar fas fa-trash text-dark" id="${_id}" style="font-size:20px;"></button>
                                <button type="button" class="btn  editar fas fa-pen text-dark" id="${_id}" data-bs-toggle="modal" data-bs-target="#editarEquipoModal" data-bs-whatever="@getbootstrap" style="font-size:20px;"></button>
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
    const agregarEquipoForm = document.querySelector('#agregarEquipoForm');
    const nombreEquipo = document.querySelector('#nombreEquipo');
    const paisEquipo = document.querySelector('#paisEquipo');
    const patrocinadorEquipo = document.querySelector('#patrocinadorEquipo')
    const directorEquipo = document.querySelector('#directorEquipo')
    const ciclitasEquipo = document.querySelector('#ciclitasEquipo')


    agregarEquipoForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = {
          equipo : nombreEquipo.value,
          país : paisEquipo.value,
          patrocinador : patrocinadorEquipo.value,
          director : directorEquipo.value,
          ciclistas : ciclitasEquipo.value

        }

        if (insertEquipos(data)) {
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location = 'equipos.html';

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
                        deleteEquipos(eliminar.id);
                        window.location = 'equipos.html';
                    });
                      
                }else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }

            });
        })
        
    });
}


function showEdit(){
    const editarEquipoForm = document.querySelector('#editarEquipoForm');
    const nombreEquipoEdit = document.querySelector('#nombreEquipoEdit');
    const paisEquipoEdit = document.querySelector('#paisEquipoEdit');
    const patrocinadorEquipoEdit = document.querySelector('#patrocinadorEquipoEdit');
    const directorEquipoEdit = document.querySelector('#directorEquipoEdit')
    const ciclitasEquipoEdit = document.querySelector('#ciclitasEquipoEdit');

    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach((editar) => {

        editar.addEventListener('click', async ()=>{
            const id = editar.id;
            const equipo = await oneEquipos(id);
            console.log(equipo);

            nombreEquipoEdit.value= equipo.equipo;
            paisEquipoEdit.value= equipo.país;
            patrocinadorEquipoEdit.value= equipo.patrocinador;
            directorEquipoEdit.value= equipo.director;
            ciclitasEquipoEdit.value= equipo.ciclistas;

            editarEquipoForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const newObject= {
                  equipo: nombreEquipoEdit.value,
                  país: paisEquipoEdit.value,
                  patrocinador: patrocinadorEquipoEdit.value,
                  director: directorEquipoEdit.value,
                  ciclistas: ciclitasEquipoEdit.value
                };
                console.log(newObject);

                if (await updateEquipos(id,newObject)) {
                    swal("Datos Actualizados satisfactoriamente","Enviado","success");
                    setTimeout(()=>{
                        window.location = 'equipos.html'
                    },1500);
                    
                }
            })

        });
        
    });


}   