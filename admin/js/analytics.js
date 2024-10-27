const analyticsData = {
    chatbot: {
        commonRequests: [
            "Size recommendations",
            "Style advice",
            "Product availability",
            "Return policy"
        ]
    },
    virtualTryOn: {
        topProducts: [
            "T-Shirt Basic",
            "Jeans Slim Fit",
            "Hoodie Classic",
            "Sneakers Pro"
        ]
    }
};

function generateAnalyticsCard(label, value, percentage = null) {
    const percentageHtml = percentage ? `
        <div class="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" style="width: ${percentage}%"></div>
        </div>
    ` : '';

    return `
        <div class="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-200">
            <p class="text-sm text-gray-500">${label}</p>
            <p class="text-2xl font-bold">${value}</p>
            ${percentageHtml}
        </div>
    `;
}

function generateCommonRequestsChart(requests) {
    return `
        <div class="mt-4">
            <h4 class="font-medium mb-3">Common Requests</h4>
            ${requests.map(request => `
                <div class="mb-2">
                    <div class="flex justify-between mb-1">
                        <span class="text-sm">${request.label}</span>
                        <span class="text-sm">${request.percentage}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-blue-600 h-2 rounded-full" style="width: ${request.percentage}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generatePopularProductsChart(products) {
    return `
        <div class="mt-4">
            <h4 class="font-medium mb-3">Popular Products</h4>
            ${products.map(product => `
                <div class="mb-2">
                    <div class="flex justify-between mb-1">
                        <span class="text-sm">${product.label}</span>
                        <span class="text-sm">${product.percentage}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-green-500 h-2 rounded-full" style="width: ${product.percentage}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function generateAnalyticsSection() {
    const chatbotMetrics = {
        totalInteractions: 2847,
        purchasedAfterChat: 428,
        directPurchases: 156,
        roi: 12460,
        conversionRate: 15
    };

    const virtualTryOnMetrics = {
        totalUsers: 3256,
        purchasedAfterTry: 521,
        directPurchases: 183,
        roi: 15780,
        conversionRate: 16
    };

    const commonRequests = [
        { label: "Special occasion outfits", value: 456, percentage: 32 },
        { label: "Casual combinations", value: 389, percentage: 27 },
        { label: "Business looks", value: 345, percentage: 24 },
        { label: "Seasonal outfits", value: 234, percentage: 16 },
        { label: "Sportswear looks", value: 167, percentage: 12 }
    ];

    const popularProducts = [
        { label: "T-Shirt Basic", value: 245, percentage: 28 },
        { label: "Jeans Slim Fit", value: 198, percentage: 23 },
        { label: "Hoodie Classic", value: 156, percentage: 18 },
        { label: "Sneakers Pro", value: 134, percentage: 15 },
        { label: "Summer Dress", value: 112, percentage: 13 }
    ];

    return `
        <div class="space-y-8">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold">Analytics Dashboard</h2>
                <div class="flex gap-2">
                    <button class="px-4 py-2 text-sm bg-white rounded-lg shadow hover:shadow-md">
                        <i class="fas fa-download mr-2"></i>Export Report
                    </button>
                    <select class="px-4 py-2 text-sm bg-white rounded-lg shadow hover:shadow-md">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 3 months</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-semibold">Chatbot Performance</h3>
                        <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            <i class="fas fa-arrow-up mr-1"></i>${chatbotMetrics.conversionRate}%
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        ${generateAnalyticsCard('Total Interactions', chatbotMetrics.totalInteractions)}
                        ${generateAnalyticsCard('Purchases After Chat', chatbotMetrics.purchasedAfterChat)}
                        ${generateAnalyticsCard('Direct Purchases', chatbotMetrics.directPurchases)}
                        ${generateAnalyticsCard('ROI', `€${chatbotMetrics.roi}`)}
                    </div>
                    ${generateCommonRequestsChart(commonRequests)}
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-semibold">Virtual Try-On Performance</h3>
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            <i class="fas fa-arrow-up mr-1"></i>${virtualTryOnMetrics.conversionRate}%
                        </span>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        ${generateAnalyticsCard('Total Users', virtualTryOnMetrics.totalUsers)}
                        ${generateAnalyticsCard('Purchases After Try', virtualTryOnMetrics.purchasedAfterTry)}
                        ${generateAnalyticsCard('Direct Purchases', virtualTryOnMetrics.directPurchases)}
                        ${generateAnalyticsCard('ROI', `€${virtualTryOnMetrics.roi}`)}
                    </div>
                    ${generatePopularProductsChart(popularProducts)}
                </div>
            </div>
        </div>
    `;
}

function generateTimelineChart() {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const values = [65, 45, 75, 58, 62, 80, 70];
    
    return days.map((day, index) => `
        <div class="flex flex-col items-center flex-1">
            <div class="w-full bg-blue-500 rounded-t-lg transition-all hover:bg-blue-600" 
                 style="height: ${values[index]}%"></div>
            <span class="mt-2 text-sm text-gray-600">${day}</span>
        </div>
    `).join('');
}

function generateDeviceChart() {
    const devices = [
        { name: 'Mobile', percentage: 65, color: 'blue' },
        { name: 'Desktop', percentage: 25, color: 'green' },
        { name: 'Tablet', percentage: 10, color: 'yellow' }
    ];

    return `
        <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
                <div>
                    ${devices.map(device => `
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full 
                                   text-${device.color}-600 bg-${device.color}-200 mr-2">
                            ${device.name} ${device.percentage}%
                        </span>
                    `).join('')}
                </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                ${devices.map(device => `
                    <div style="width: ${device.percentage}%" 
                         class="shadow-none flex flex-col text-center whitespace-nowrap 
                                text-white justify-center bg-${device.color}-500">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
