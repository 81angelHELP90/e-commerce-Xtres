const helperContext = {
    _addProducts(selectedProducts, newProduct){
        const findItem = (item) => item.id === newProduct.id
        
        let index = selectedProducts.findIndex(findItem)

        if(index === -1) {
            newProduct.Cant = 1 
            selectedProducts.push(newProduct)
        } else 
            selectedProducts[index].Cant += 1 

        return selectedProducts
    },

    _deleteProducts(selectedProducts, newProduct){
        const findItem = (item) => item.id === newProduct.id
        
        let index = selectedProducts.findIndex(findItem) 

        if(index > -1) (selectedProducts[index].Cant > 0) ? selectedProducts[index].Cant = selectedProducts[index].Cant - 1 : selectedProducts[index].Cant = 0

        return selectedProducts
        
    },

    _cartQtyHandler(selectedProducts){
        return selectedProducts.reduce((acum, item) => acum += item.Cant, 0)
    },
}

export default helperContext