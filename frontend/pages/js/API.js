const urlCiclistas = "http://localhost:7000/api/ciclistas";
const urlEquipos = "http://localhost:7000/api/equipos"
const urlPatrocinadores = "http://localhost:7000/api/patrocinadores"
const urlPodiums = "http://localhost:7000/api/podiums"

// ? ------------------------ CATEGORIAS API --------------------------------


export async function getAllCiclistas(){
    try {
        const ciclistas = await fetch(`${urlCiclistas}/all`)
        return ciclistas.json()
    } catch (error) {
        console.log(error);
        
    }
}

export async function insertCiclistas(data){
    try {
        const ciclistas = await fetch(`${urlCiclistas}/add`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await ciclistas.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function deleteCiclistas(id){
    try {
        const ciclistas = await fetch(`${urlCiclistas}/del/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });

        const response = await ciclistas.json();
        return response
            
    } catch (error) {
        console.log(error);
    }
}

export async function oneCiclistas(id){
    try {
        const ciclistas = await fetch(`${urlCiclistas}/one/${id}`);
        console.log(ciclistas);
        return ciclistas.json();
        
    } catch (error) {
        console.log(error);
    }
}


export async function updateCiclistas(id, data){
    try {
        const ciclistas = await fetch(`${urlCiclistas}/upd/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const response = await ciclistas.json();
        return response;
    } catch (error) {
        console.log(error);
        
    }

} 


// ? -------------------------ETAPAS API--------------------------



export async function getAllEquipos(){
    try {
        const equipos = await fetch(`${urlEquipos}/all`)
        return equipos.json()
    } catch (error) {
        console.log(error);
        
    }
}

export async function insertEquipos(data){
    try {
        const equipos = await fetch(`${urlEquipos}/add`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await equipos.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function deleteEquipos(id){
    try {
        const equipos = await fetch(`${urlEquipos}/del/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });

        const response = await equipos.json();
        return response
            
    } catch (error) {
        console.log(error);
    }
}

export async function oneEquipos(id){
    try {
        const equipos = await fetch(`${urlEquipos}/one/${id}`);
        console.log(equipos);
        return equipos.json();
        
    } catch (error) {
        console.log(error);
    }
}


export async function updateEquipos(id, data){
    try {
        const equipos = await fetch(`${urlEquipos}/upd/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const response = await equipos.json();
        return response;
    } catch (error) {
        console.log(error);
        
    }

} 


// ? -------------------------PATROCINADORES API--------------------




export async function getAllPatrocinadores(){
    try {
        const patrocinadores = await fetch(`${urlPatrocinadores}/all`)
        return patrocinadores.json()
    } catch (error) {
        console.log(error);
        
    }
}

export async function insertPatrocinadores(data){
    try {
        const patrocinadores = await fetch(`${urlPatrocinadores}/add`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await patrocinadores.json();
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function deletePatrocinadores(id){
    try {
        const patrocinadores = await fetch(`${urlPatrocinadores}/del/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });

        const response = await patrocinadores.json();
        return response
            
    } catch (error) {
        console.log(error);
    }
}

export async function onePatrocinadores(id){
    try {
        const patrocinadores = await fetch(`${urlPatrocinadores}/one/${id}`);
        console.log(patrocinadores);
        return patrocinadores.json();
        
    } catch (error) {
        console.log(error);
    }
}


export async function updatePatrocinadores(id, data){
    try {
        const patrocinadores = await fetch(`${urlPatrocinadores}/upd/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const response = await patrocinadores.json();
        return response;
    } catch (error) {
        console.log(error);
        
    }

} 

//?------------------------------------PODIUMS API------------------------


export async function getAllPodiums(){
    try {
        const podiums = await fetch(`${urlPodiums}/all`)
        return podiums.json();

    } catch (error) {
        console.log(error);
    }
}

export async function insertPodiums(data){
    try {
        const podiums= await fetch(`${urlPodiums}/add`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await podiums.json();
        return response
    } catch (error) {
        console.log();
    }
}

export async function deletePodiums(id){
    try {
        const podiums = await fetch(`${urlPodiums}/del/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });

        const response = await podiums.json();
        return response
            
    } catch (error) {
        console.log(error);
    }
}


export async function onePodiums(id){
    try {
        const podiums = await fetch(`${urlPodiums}/one/${id}`);
        console.log(podiums);
        return podiums.json();
        
    } catch (error) {
        console.log(error);
    }
}


export async function updatePodiums(id, data){
    try {
        const podiums = await fetch(`${urlPodiums}/upd/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const response = await podiums.json();
        return response;
    } catch (error) {
        console.log(error);
        
    }

} 