const products = [
    {
        productId: 1,
        model: 'Air Max 1',
        size: 9,
        condition: 'DS'
    },
    {
        productId: 2,
        model: 'Adidas Top Ten',
        size: 12,
        condition: 'DS'
    },
    {
        productId: 3,
        model: 'Air Jordan 4',
        size: 14,
        condition: 'DS'
    },
    {
        productId: 4,
        model: 'Puma X',
        size: 10,
        condition: 'DS'
    }
]

export function getProducts() {
    return products;
}

export function getProduct(id) {
    return products.find(p => p.productId === id);
}