function generateGeneralSection() {
    return `
        <div class="space-y-8">
            <div class="flex items-center justify-between">
                <h2 class="text-2xl font-bold">AI Management</h2>
                <div class="flex gap-2">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Chatbot Stylist Section -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-semibold">Stylist Chatbot</h3>
                        <div class="relative inline-flex">
                            <input type="checkbox" id="stylist-toggle" 
                                   class="sr-only peer"
                                   checked
                                   onclick="toggleChatbot('stylist')">
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all cursor-pointer"></div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="text-sm text-gray-600 space-y-1">
                            <p><i class="fas fa-info-circle mr-2"></i>Write instructions for the stylist chatbot to:</p>
                            <p class="ml-6">• Help users find the perfect outfit</p>
                            <p class="ml-6">• Provide fashion advice and recommendations</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <label for="stylist-prompt" class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-robot mr-2"></i>Instructions
                            </label>
                            <textarea id="stylist-prompt" 
                                placeholder="Enter instructions for stylist chatbot..."
                                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                                rows="4"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Chatbot Assistance Section -->
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-semibold">Support Chatbot</h3>
                        <div class="relative inline-flex">
                            <input type="checkbox" id="product-assistance-toggle" 
                                   class="sr-only peer"
                                   checked
                                   onclick="toggleChatbot('support')">
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all cursor-pointer"></div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="text-sm text-gray-600 space-y-1">
                            <p><i class="fas fa-info-circle mr-2"></i>Write instructions for the support chatbot to:</p>
                            <p class="ml-6">• Answer customer service questions</p>
                            <p class="ml-6">• Provide product information and assistance</p>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <label for="assistance-prompt" class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-comments mr-2"></i>Instructions
                            </label>
                            <textarea id="assistance-prompt" 
                                placeholder="Enter instructions for support chatbot..."
                                class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                                rows="4"></textarea>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <label class="block text-sm font-medium text-gray-700 mb-3">
                                <i class="fas fa-book mr-2"></i>Knowledge Base
                            </label>
                            <div class="flex flex-col space-y-3">
                                <button id="upload-pdf" class="flex items-center justify-center space-x-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-all">
                                    <i class="fas fa-upload text-gray-600"></i>
                                    <span>Upload PDF Document</span>
                                </button>
                                <p class="text-xs text-gray-500 text-center">
                                    Upload PDF files to enhance the chatbot's knowledge base
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateChatbotToggles() {
    return `
        <div class="space-y-4">
            <div class="flex items-center space-x-4">
                <input type="checkbox" id="product-assistance-toggle" 
                       class="w-4 h-4" 
                       ${appState.productAssistanceEnabled ? 'checked' : ''}>
                <label for="product-assistance-toggle">Enable product assistance chatbot for selected products</label>
            </div>
            <div class="flex items-center space-x-4">
                <input type="checkbox" id="stylist-toggle" 
                       class="w-4 h-4" 
                       ${appState.stylistEnabled ? 'checked' : ''}>
                <label for="stylist-toggle">Enable stylist chatbot for selected products</label>
            </div>
        </div>
    `;
}

function generateAssistanceSection() {
    return `
        <div class="space-y-4 mt-6">
            <h4 class="text-lg font-medium">Support Chatbot</h4>
            <div class="space-y-4">
                <textarea id="assistance-prompt" 
                    placeholder="Enter instructions for support"
                    class="w-full p-2 border rounded"
                    rows="2"></textarea>
                <button id="upload-pdf" class="flex items-center space-x-2 px-4 py-2 border rounded hover:bg-gray-50">
                    <i class="fas fa-upload"></i>
                    <span>Upload PDF for Knowledge Base</span>
                </button>
            </div>
        </div>
    `;
}

function initializeChatbotHandlers() {
    // Product Assistance Toggle
    const productAssistanceToggle = document.getElementById('product-assistance-toggle');
    if (productAssistanceToggle) {
        productAssistanceToggle.addEventListener('change', (e) => {
            appState.productAssistanceEnabled = e.target.checked;
            // Add API call here to save state
        });
    }

    // Stylist Toggle
    const stylistToggle = document.getElementById('stylist-toggle');
    if (stylistToggle) {
        stylistToggle.addEventListener('change', (e) => {
            appState.stylistEnabled = e.target.checked;
            // Add API call here to save state
        });
    }

    // Meta Prompts
    const stylistPrompt = document.getElementById('stylist-prompt');
    if (stylistPrompt) {
        stylistPrompt.value = appState.stylistPrompt;
        stylistPrompt.addEventListener('input', (e) => {
            appState.stylistPrompt = e.target.value;
            // Add API call here to save state
        });
    }

    const assistancePrompt = document.getElementById('assistance-prompt');
    if (assistancePrompt) {
        assistancePrompt.value = appState.assistancePrompt;
        assistancePrompt.addEventListener('input', (e) => {
            appState.assistancePrompt = e.target.value;
            // Add API call here to save state
        });
    }

    // Upload PDF handler
    const uploadPdfBtn = document.getElementById('upload-pdf');
    if (uploadPdfBtn) {
        uploadPdfBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pdf';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    // Add upload logic here
                    console.log(`Selected file: ${file.name}`);
                    // You would typically send this file to your server
                    // using FormData and fetch/axios
                }
            };
            input.click();
        });
    }
}
