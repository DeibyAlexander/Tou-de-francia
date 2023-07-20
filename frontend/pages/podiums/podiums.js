import { getAllPodiums, insertPodiums, deletePodiums, onePodiums, updatePodiums  } from "../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    showPodiums();
})


async function showPodiums(){
    const data = await getAllPodiums();
    const bodyCard = document.getElementById('container');
    data.forEach((podiums,index) => {
        const {_id,carrera,año,primer_lugar, segundo_lugar, tercer_lugar}= podiums;
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
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">${carrera}</a>
                            <br>
                            <br>

                            <p class="card-text">Año: ${año}</p>
                            <p class="card-text">Primer lugar: ${primer_lugar}</p>
                            <p class="card-text">Segundo lugar: ${segundo_lugar}</p>
                            <p class="card-text">Tercer lugar: ${tercer_lugar}</p>
                            <p class="text-muted"></p>

                            <div class="modal-footer">
                                <button class="btn fas fa-trash text-dark eliminar " id="${_id}" style="font-size:20px;"></button>
                                <button type="button" class="btn fas fa-pen text-dark editar" id="${_id}" data-bs-toggle="modal" data-bs-target="#editarPodiumModal" data-bs-whatever="@getbootstrap" style="font-size:20px;"></button>
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
    const agregarPodiumForm = document.querySelector('#agregarPodiumForm');
    const nombreCarrera = document.querySelector('#nombreCarrera');
    const añoPodium = document.querySelector('#añoPodium');
    const primerLugar = document.querySelector('#primerLugar')
    const segundoLugar = document.querySelector('#segundoLugar')
    const tercerLugar = document.querySelector('#tercerLugar')



    agregarPodiumForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = {
            carrera : nombreCarrera.value,
            año : añoPodium.value,
            primer_lugar : primerLugar.value,
            segundo_lugar : segundoLugar.value,
            tercer_lugar : tercerLugar.value

        }

        if (insertPodiums(data)) {
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location = 'podiums.html';

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
                        deletePodiums(eliminar.id);
                        window.location = 'podiums.html';
                    });

                }else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }

            });
        })
        
    });
}



function showEdit(){
    const editarPodiumForm = document.querySelector('#editarPodiumForm');
    const nombreCarreraEdit = document.querySelector('#nombreCarreraEdit');
    const añoPodiumEdit = document.querySelector('#añoPodiumEdit');
    const primerLugarEdit = document.querySelector('#primerLugarEdit');
    const segundoLugarEdit = document.querySelector('#segundoLugarEdit')
    const tercerLugarEdit = document.querySelector('#tercerLugarEdit')


    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach((editar) => {

        editar.addEventListener('click', async ()=>{
            const id = editar.id;
            const podium = await onePodiums(id);
            console.log(podium);

            nombreCarreraEdit.value= podium.carrera;
            añoPodiumEdit.value= podium.año;
            primerLugarEdit.value= podium.primer_lugar;
            segundoLugarEdit.value= podium.segundo_lugar;
            tercerLugarEdit.value= podium.tercer_lugar;


            editarPodiumForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const newObject= {
                    carrera: nombreCarreraEdit.value,
                    año: añoPodiumEdit.value,
                    primer_lugar: primerLugarEdit.value,
                    segundo_lugar: segundoLugarEdit.value,
                    tercer_lugar: tercerLugarEdit.value
                };
                console.log(newObject);

                if (await updatePodiums(id,newObject)) {
                    swal("Datos Actualizados satisfactoriamente","Enviado","success");
                    setTimeout(()=>{
                        window.location = 'podiums.html'
                    },1500);
                    
                }
            })

        });
        
    });


}   