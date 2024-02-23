//import listProducts from "../mock/productosOffline.json"

const servicesProducts = {
    _listProducts: [],

    getUniqueCategories(oListProducts) {
        this._listProducts = oListProducts;
        const categorias = []

        oListProducts.forEach(item => {
            if(!categorias.includes(item.category.id)) {
                let index = categorias.findIndex(cat  => cat.id === item.category.id )

                if(index === -1)
                    categorias.push(item.category)
            }
        })
        
        return categorias;
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
            this._listProducts.forEach(item => {
                if(item.id == id) 
                    categorias.push(item)
                
            })
        else    
            this._listProducts.forEach(item => {
                if(item.category.id == id) 
                    categorias.push(item)
                
            })

        return categorias
    },

    getByProductName(name) {
        const categorias = []

        this._listProducts.forEach(item => {
            let titleUpperCase = item.title.toUpperCase()
            
            if(titleUpperCase.includes(name.toUpperCase())) 
                categorias.push(item)
            
        })

        return categorias
    },


}

export default servicesProducts