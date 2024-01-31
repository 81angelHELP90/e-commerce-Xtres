import listProducts from "../mock/productosOffline.json"

const servicesProducts = {
    getSrvProducs() {
        return listProducts

        /*VER PORQUE NO FUNCIONA
        const urlProd = "https://api.escuelajs.co/api/v1/products";
        
        fetch(urlProd)
            .then(response => {
                if(response.ok) 
                    return response.json();
                else 
                    throw new Error("Error fetch");
            })
            .then(data => {
                return data
            })
            .catch(error => {
                console.log(error);
            })
        */
    },

    getUniqueCategories() {
        const categorias = []

        listProducts.forEach(item => {
            if(!categorias.includes(item.category.id)) 
                categorias.push(item.category)
            
        })

        //Limpio el array con categorias unicas
        return [...new Set(categorias.map(JSON.stringify))].map(JSON.parse);

    },
    /**
     * 
     * @param {*} id valor a buscar
     * @param {*} searchCriteria true: por id producto - false: id categoria
     * @returns 
     */
    getById(id, searchCriteria) {
        const categorias = []

        if(searchCriteria)
            listProducts.forEach(item => {
                if(item.id == id) 
                    categorias.push(item)
                
            })
        else    
            listProducts.forEach(item => {
                if(item.category.id == id) 
                    categorias.push(item)
                
            })

        return categorias
    }


}

export default servicesProducts