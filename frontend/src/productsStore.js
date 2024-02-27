// Coffee:-price_1OoSYmSGUjaabFiBTzMtZfFW
// sunglasses:-price_1OoSZqSGUjaabFiB3pZdxLSW
// Camera:- price_1OoSb5SGUjaabFiBSWMxAc5a
const productsArray = [
    {
        id: "price_1OoSYmSGUjaabFiBTzMtZfFW",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1OoSZqSGUjaabFiB3pZdxLSW",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1OoSb5SGUjaabFiBSWMxAc5a",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
