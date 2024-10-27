// Dati di esempio per i prodotti
const products = [
    { 
        id: 1, 
        name: 'White Cardigan', 
        image: 'img/Cardigan white.png', 
        price: '€1,700',
        virtualTryOn: true, 
        knowledgeBase: true  // Changed to true
    },
    { 
        id: 2, 
        name: 'Black Jacket', 
        image: 'img/giacca black.png', 
        price: '€1,950',
        virtualTryOn: false,
        knowledgeBase: true  // Changed to true
    },
    { 
        id: 3, 
        name: 'Black T-Shirt', 
        image: 'img/tshirt black.png', 
        price: '€550',
        virtualTryOn: false,
        knowledgeBase: true  // Changed to true
    },
    { 
        id: 4, 
        name: 'Red T-Shirt', 
        image: 'img/tshirt rossa.png', 
        price: '€550',
        virtualTryOn: true, 
        knowledgeBase: false  // Remains false
    }
];

function generateProductsSection() {
    return `
        <div class="space-y-8">
            <h2 class="text-2xl font-bold">Product Management</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr class="bg-gray-800 text-white">
                            <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Product</th>  <!-- Changed text-left to text-center -->
                            <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Virtual Try On</th>
                            <th class="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">Add to Knowledge Base</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200" id="products-table-body">
                        ${generateProductRows()}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function generateProductRows() {
    return products.map(product => `
        <tr data-product-id="${product.id}" class="hover:bg-gray-50 transition-colors duration-200">
            <td class="px-6 py-4">
                <div class="flex items-center justify-center">
                    <div class="h-24 w-24 flex-shrink-0">
                        <img class="h-full w-full rounded-lg object-contain" src="${product.image}" alt="${product.name}">  <!-- Changed object-cover to object-contain -->
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900 text-center">${product.name}</div>
                        <div class="text-sm text-gray-500 text-center">${product.price}</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex justify-center items-center">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer virtual-try-on" ${product.virtualTryOn ? 'checked' : ''}>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="flex justify-center items-center">
                    <button class="knowledge-base-btn p-2 rounded-full hover:bg-gray-100 ${product.knowledgeBase ? 'active' : ''}">
                        <i class="fas fa-book text-xl ${product.knowledgeBase ? 'text-blue-600' : 'text-gray-400'}"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    document.getElementById('products-table-body').innerHTML = 
        filteredProducts.length > 0 ? 
        generateProductRows(filteredProducts) : 
        '<tr><td colspan="3" class="px-6 py-4 text-center">Nessun prodotto trovato</td></tr>';
}

function initializeProductHandlers() {
    // Virtual Try On toggle handler
    document.querySelectorAll('.virtual-try-on').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const productId = e.target.closest('tr').dataset.productId;
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                product.virtualTryOn = e.target.checked;
            }
        });
    });

    // Knowledge Base toggle handler
    document.querySelectorAll('.knowledge-base-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.closest('tr').dataset.productId;
            const product = products.find(p => p.id === parseInt(productId));
            if (product) {
                product.knowledgeBase = !product.knowledgeBase;
                const icon = btn.querySelector('i');
                icon.classList.toggle('text-gray-400');
                icon.classList.toggle('text-blue-600');
                btn.classList.toggle('active');
            }
        });
    });
}
