import { getAllPatrocinadores, insertPatrocinadores, deletePatrocinadores, onePatrocinadores, updatePatrocinadores  } from "../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    showPatrocinadore();
})


async function showPatrocinadore(){
    const data = await getAllPatrocinadores();
    const bodyCard = document.getElementById('container');
    data.forEach((patrocinadores,index) => {
        const {_id,industria,país,año_fundación, patrocinador}= patrocinadores;
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
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">${patrocinador}</a>
                            <br>
                            <br>

                            <p class="card-text">Industria: ${industria}</p>
                            <p class="card-text">Pais: ${país}</p>
                            <p class="card-text">Año Fundacion: ${año_fundación}</p>
                            <p class="text-muted"></p>

                            <div class="modal-footer">
                                <button class="btn fas fa-trash text-dark eliminar " id="${_id}" style="font-size:20px;"></button>
                                <button type="button" class="btn  editar fas fa-pen text-dark" id="${_id}" data-bs-toggle="modal" data-bs-target="#editarPatrocinadorModal" data-bs-whatever="@getbootstrap" style="font-size:20px;"></button>
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
    const agregarPatrocinadorForm = document.querySelector('#agregarPatrocinadorForm');
    const nombrePatrocinador = document.querySelector('#nombrePatrocinador');
    const industriaPatrocinador = document.querySelector('#industriaPatrocinador');
    const paisPatrocinador = document.querySelector('#paisPatrocinador')
    const añoFundacionPatrocinador = document.querySelector('#añoFundacionPatrocinador')



    agregarPatrocinadorForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        const data = {
            patrocinador : nombrePatrocinador.value,
            industria : industriaPatrocinador.value,
            país : paisPatrocinador.value,
            año_fundación : añoFundacionPatrocinador.value

        }

        if (insertPatrocinadores(data)) {
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location = 'patrocinadores.html';

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
                        deletePatrocinadores(eliminar.id);
                        window.location = 'patrocinadores.html';
                    });

                }else {
                    swal("Cancelado", "No has eliminado tu data", "error");
                }

            });
        })
        
    });
}



function showEdit(){
    const editarPatrocinadorForm = document.querySelector('#editarPatrocinadorForm');
    const nombrePatrocinadorEdit = document.querySelector('#nombrePatrocinadorEdit');
    const industriaPatrocinadorEdit = document.querySelector('#industriaPatrocinadorEdit');
    const paisPatrocinadorEdit = document.querySelector('#paisPatrocinadorEdit');
    const añoFundacionPatrocinadorEdit = document.querySelector('#añoFundacionPatrocinadorEdit')


    const botonEditar = document.querySelectorAll('.editar');

    botonEditar.forEach((editar) => {

        editar.addEventListener('click', async ()=>{
            const id = editar.id;
            const patrocinador = await onePatrocinadores(id);
            console.log(patrocinador);

            nombrePatrocinadorEdit.value= patrocinador.patrocinador;
            industriaPatrocinadorEdit.value= patrocinador.industria;
            paisPatrocinadorEdit.value= patrocinador.país;
            añoFundacionPatrocinadorEdit.value= patrocinador.año_fundación;


            editarPatrocinadorForm.addEventListener('submit',async (e)=>{
                e.preventDefault();
                const newObject= {
                    patrocinador: nombrePatrocinadorEdit.value,
                    industria: industriaPatrocinadorEdit.value,
                    país: paisPatrocinadorEdit.value,
                    año_fundación: añoFundacionPatrocinadorEdit.value
                };
                console.log(newObject);

                if (await updatePatrocinadores(id,newObject)) {
                    swal("Datos Actualizados satisfactoriamente","Enviado","success");
                    setTimeout(()=>{
                        window.location = 'patrocinadores.html'
                    },1500);
                    
                }
            })

        });
        
    });


}   