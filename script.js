 // Main Application Object
        const ToyLand = {
            // Data - увеличенное количество товаров с ценами в сомах
            products: [
                {
                    id: 1,
                    name: "Обучающий робот-игрушка",
                    category: "toys",
                    price: 2499,
                    oldPrice: 2999,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hUekozCB-IrVcaeS9Ab1o47e5zq6rkr1Ag&s",
                    rating: 4.5,
                    description: "Интерактивный обучающий робот, который учит основам программирования детей от 6 лет. С голосовыми командами и программируемыми движениями.",
                    sizes: ["Маленький", "Средний", "Большой"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166"]
                },
                {
                    id: 2,
                    name: "Цветные строительные блоки",
                    category: "toys",
                    price: 1299,
                    oldPrice: 1599,
                    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                    rating: 4.8,
                    description: "Набор из 200 строительных блоков различных форм и цветов. Развивает творческие способности и мелкую моторику.",
                    sizes: ["100 деталей", "200 деталей", "300 деталей"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166", "#2A2D43"]
                },
                {
                    id: 3,
                    name: "Детская футболка из хлопка",
                    category: "clothing",
                    price: 899,
                    oldPrice: 1199,
                    image: "https://img-edg.joomcdn.net/16240b78fa96439b3fc321213449a3ec19ebfca4_original.jpeg",
                    rating: 4.3,
                    description: "Футболка из 100% хлопка с веселыми принтами. Мягкая, дышащая ткань, идеальная для повседневной носки. Доступна в нескольких цветах.",
                    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166", "#2A2D43", "#FFFFFF"]
                },
                {
                    id: 4,
                    name: "Детская зимняя куртка",
                    category: "clothing",
                    price: 3499,
                    oldPrice: 4299,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQWTdEBMUISGSob0auu-r9jymsXMT6hZeyA&s",
                    rating: 4.7,
                    description: "Теплая зимняя куртка с водонепроницаемым покрытием. Сохраняет детей в тепле в холодную погоду. Съемный капюшон и несколько карманов.",
                    sizes: ["3-4 года", "5-6 лет", "7-8 лет"],
                    colors: ["#2A2D43", "#4ECDC4", "#FF6B8B"]
                },
                {
                    id: 5,
                    name: "Детские кроссовки для бега",
                    category: "shoes",
                    price: 1999,
                    oldPrice: 2499,
                    image: "https://image.made-in-china.com/155f0j00OHDoWhEPvYpL/Girls-Sports-Shoes-New-Customized-Logo-Kids-Running-Shoes-Children-Sneaker.webp",
                    rating: 4.6,
                    description: "Легкие кроссовки для бега с дополнительной амортизацией. Идеально подходят для активных детей. Нескользящая подошва и дышащий материал.",
                    sizes: ["28", "29", "30", "31", "32", "33"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166", "#2A2D43"]
                },
                {
                    id: 6,
                    name: "Детские сандалии",
                    category: "shoes",
                    price: 1499,
                    oldPrice: 1899,
                    image: "https://tse1.mm.bing.net/th/id/OIP.OjPD4A97N94Qi5gSlTBLaQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                    rating: 4.4,
                    description: "Удобные сандалии для лета. Регулируемые ремни для идеальной посадки. Водостойкие и легко моются.",
                    sizes: ["26", "27", "28", "29", "30"],
                    colors: ["#FFD166", "#4ECDC4", "#2A2D43"]
                },
                {
                    id: 7,
                    name: "Набор плюшевых животных",
                    category: "toys",
                    price: 1799,
                    oldPrice: 2199,
                    image: "https://avatars.mds.yandex.net/get-mpic/14067069/2a00000196d989aa1cb79519ec248d5c9259/orig",
                    rating: 4.9,
                    description: "Набор из 5 мягких плюшевых животных: медведь, кролик, слон, лев и жираф. Гипоаллергенные материалы, безопасны для малышей.",
                    sizes: ["Маленький", "Средний", "Большой"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166"]
                },
                {
                    id: 8,
                    name: "Детские джинсы",
                    category: "clothing",
                    price: 1599,
                    oldPrice: 1999,
                    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80",
                    rating: 4.5,
                    description: "Прочные джинсы с эластичным поясом для комфорта. Усиленные колени для большей долговечности во время игр.",
                    sizes: ["3-4 года", "5-6 лет", "7-8 лет", "9-10 лет"],
                    colors: ["#2A2D43", "#4ECDC4"]
                },
                {
                    id: 9,
                    name: "Конструктор Lego",
                    category: "toys",
                    price: 3299,
                    oldPrice: 3899,
                    image: "https://th.bing.com/th/id/OIP.cWXnUTleEZtn7RRY0o6utQHaF4?w=225&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
                    rating: 4.9,
                    description: "Набор Lego из 850 деталей для сборки пожарной станции. Развивает логическое мышление и моторику рук.",
                    sizes: ["Маленький", "Средний", "Большой"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166"]
                },
                {
                    id: 10,
                    name: "Детский спортивный костюм",
                    category: "clothing",
                    price: 2299,
                    oldPrice: 2799,
                    image: "data:image/webp;base64,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",
                    rating: 4.6,
                    description: "Спортивный костюм из мягкого, дышащего материала. Идеален для активного отдыха и занятий спортом.",
                    sizes: ["4-5 лет", "6-7 лет", "8-9 лет", "10-11 лет"],
                    colors: ["#2A2D43", "#4ECDC4", "#FF6B8B", "#FFD166"]
                },
                {
                    id: 11,
                    name: "Детские зимние сапоги",
                    category: "shoes",
                    price: 2799,
                    oldPrice: 3299,
                    image: "https://tse2.mm.bing.net/th/id/OIP.-2O7tJtb5mVOFhWuHG5TFQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                    rating: 4.7,
                    description: "Теплые зимние сапоги с меховой подкладкой. Водонепроницаемые, с противоскользящей подошвой.",
                    sizes: ["28", "29", "30", "31", "32", "33"],
                    colors: ["#2A2D43", "#4ECDC4", "#FF6B8B"]
                },
                {
                    id: 12,
                    name: "Набор для творчества",
                    category: "toys",
                    price: 1899,
                    oldPrice: 2299,
                    image: "data:image/webp;base64,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",
                    rating: 4.8,
                    description: "Большой набор для творчества с красками, кистями, карандашами и бумагой. Развивает художественные способности ребенка.",
                    sizes: ["Базовый", "Расширенный", "Профессиональный"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166", "#2A2D43"]
                },
                {
                    id: 13,
                    name: "Детская пижама",
                    category: "clothing",
                    price: 1299,
                    oldPrice: 1599,
                    image: "https://th.bing.com/th/id/OIP.GYNGzNHLM-2p1PbsnNPoSgHaJ4?w=199&h=265&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
                    rating: 4.4,
                    description: "Мягкая пижама из 100% хлопка с веселым принтом. Обеспечивает комфортный сон всю ночь.",
                    sizes: ["2-3 года", "4-5 лет", "6-7 лет", "8-9 лет"],
                    colors: ["#FF6B8B", "#4ECDC4", "#2A2D43"]
                },
                {
                    id: 14,
                    name: "Детские тапочки",
                    category: "shoes",
                    price: 899,
                    oldPrice: 1199,
                    image: "data:image/webp;base64,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",
                    rating: 4.5,
                    description: "Мягкие домашние тапочки с противоскользящей подошвой. Теплые и удобные для дома.",
                    sizes: ["26", "27", "28", "29", "30"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166"]
                },
                {
                    id: 15,
                    name: "Детский пазл 100 деталей",
                    category: "toys",
                    price: 699,
                    oldPrice: 899,
                    image: "data:image/webp;base64,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",
                    rating: 4.7,
                    description: "Пазл из 100 деталей с изображением животных. Развивает логическое мышление и внимание.",
                    sizes: ["100 деталей", "200 деталей", "300 деталей"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166"]
                },
                {
                    id: 16,
                    name: "Детское платье",
                    category: "clothing",
                    price: 1899,
                    oldPrice: 2299,
                    image: "data:image/webp;base64,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",
                    rating: 4.8,
                    description: "Нарядное платье для девочек из мягкой ткани. Идеально для праздников и особых случаев.",
                    sizes: ["3-4 года", "5-6 лет", "7-8 лет"],
                    colors: ["#FF6B8B", "#4ECDC4", "#FFD166", "#FFFFFF"]
                }
            ],
            
            cart: [],
            currentPage: 'home',
            
            // Initialize the application
            init: function() {
                this.loadCart();
                this.setupEventListeners();
                this.renderFeaturedProducts();
                this.renderCatalogProducts();
                this.renderSalesProducts();
                this.setupCountdownTimer();
                this.setupScrollAnimations();
                this.updateCartCount();
            },
            
            // Cart Management
            loadCart: function() {
                const savedCart = localStorage.getItem('toyland_cart');
                if (savedCart) {
                    this.cart = JSON.parse(savedCart);
                }
            },
            
            saveCart: function() {
                localStorage.setItem('toyland_cart', JSON.stringify(this.cart));
                this.updateCartCount();
            },
            
            updateCartCount: function() {
                const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
                document.getElementById('cart-count').textContent = totalItems;
            },
            
            addToCart: function(productId, quantity = 1, size = null, color = null) {
                const product = this.products.find(p => p.id === productId);
                if (!product) return;
                
                const existingItem = this.cart.find(item => 
                    item.id === productId && 
                    item.size === size && 
                    item.color === color
                );
                
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    this.cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: quantity,
                        size: size,
                        color: color
                    });
                }
                
                this.saveCart();
                this.showNotification('Товар добавлен в корзину!');
            },
            
            removeFromCart: function(itemIndex) {
                this.cart.splice(itemIndex, 1);
                this.saveCart();
                this.renderCartItems();
            },
            
            updateCartItemQuantity: function(itemIndex, newQuantity) {
                if (newQuantity < 1) {
                    this.removeFromCart(itemIndex);
                    return;
                }
                
                this.cart[itemIndex].quantity = newQuantity;
                this.saveCart();
                this.renderCartItems();
            },
            
            clearCart: function() {
                this.cart = [];
                this.saveCart();
                this.renderCartItems();
            },
            
            getCartTotal: function() {
                return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            },
            
            // Rendering Functions
            renderFeaturedProducts: function() {
                const container = document.getElementById('featured-products');
                if (!container) return;
                
                // Get 4 random products as featured
                const featuredProducts = [...this.products].sort(() => 0.5 - Math.random()).slice(0, 4);
                
                container.innerHTML = featuredProducts.map(product => `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <span class="product-category">${this.translateCategory(product.category)}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <div class="product-price">${product.price} сом ${product.oldPrice ? `<span>${product.oldPrice} сом</span>` : ''}</div>
                            <div class="product-rating">
                                ${this.generateStarRating(product.rating)}
                            </div>
                            <button class="add-to-cart-btn" data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i> В корзину
                            </button>
                        </div>
                    </div>
                `).join('');
                
                // Add event listeners to add-to-cart buttons
                container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                        this.addToCart(productId);
                    });
                });
            },
            
            renderCatalogProducts: function(filter = 'all') {
                const container = document.getElementById('catalog-products');
                if (!container) return;
                
                let filteredProducts = this.products;
                if (filter !== 'all') {
                    filteredProducts = this.products.filter(product => product.category === filter);
                }
                
                container.innerHTML = filteredProducts.map(product => `
                    <div class="product-card" data-id="${product.id}">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <span class="product-category">${this.translateCategory(product.category)}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <div class="product-price">${product.price} сом ${product.oldPrice ? `<span>${product.oldPrice} сом</span>` : ''}</div>
                            <div class="product-rating">
                                ${this.generateStarRating(product.rating)}
                            </div>
                            <button class="add-to-cart-btn" data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i> В корзину
                            </button>
                            <button class="btn btn-small btn-accent view-details-btn" data-id="${product.id}" style="margin-top: 10px; width: 100%;">
                                Подробнее
                            </button>
                        </div>
                    </div>
                `).join('');
                
                // Add event listeners
                container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                        this.addToCart(productId);
                    });
                });
                
                container.querySelectorAll('.view-details-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                        this.showProductDetails(productId);
                    });
                });
                
                // Make entire card clickable for product details
                container.querySelectorAll('.product-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        if (!e.target.classList.contains('add-to-cart-btn') && 
                            !e.target.classList.contains('view-details-btn') &&
                            !e.target.closest('.add-to-cart-btn') &&
                            !e.target.closest('.view-details-btn')) {
                            const productId = parseInt(card.getAttribute('data-id'));
                            this.showProductDetails(productId);
                        }
                    });
                });
            },
            
            renderSalesProducts: function() {
                const container = document.getElementById('sales-products');
                if (!container) return;
                
                // Get products with oldPrice (discounted)
                const salesProducts = this.products.filter(product => product.oldPrice);
                
                container.innerHTML = salesProducts.map(product => `
                    <div class="product-card" data-id="${product.id}">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-info">
                            <span class="product-category">${this.translateCategory(product.category)}</span>
                            <h3 class="product-title">${product.name}</h3>
                            <div class="product-price">${product.price} сом <span>${product.oldPrice} сом</span></div>
                            <div class="product-rating">
                                ${this.generateStarRating(product.rating)}
                            </div>
                            <button class="add-to-cart-btn" data-id="${product.id}">
                                <i class="fas fa-cart-plus"></i> В корзину
                            </button>
                        </div>
                    </div>
                `).join('');
                
                // Add event listeners
                container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const productId = parseInt(e.currentTarget.getAttribute('data-id'));
                        this.addToCart(productId);
                    });
                });
            },
            
            renderProductDetails: function(productId) {
                const container = document.getElementById('product-detail-container');
                if (!container) return;
                
                const product = this.products.find(p => p.id === productId);
                if (!product) return;
                
                container.innerHTML = `
                    <div class="product-gallery">
                        <div class="main-product-image">
                            <img src="${product.image}" alt="${product.name}" id="main-product-img">
                        </div>
                        <div class="product-thumbnails">
                            <div class="thumbnail active" data-image="${product.image}">
                                <img src="${product.image}" alt="${product.name}">
                            </div>
                            <div class="thumbnail" data-image="https://images.unsplash.com/photo-1587654780298-8c6d6b2c8b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1030&q=80">
                                <img src="https://images.unsplash.com/photo-1587654780298-8c6d6b2c8b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1030&q=80" alt="${product.name}">
                            </div>
                            <div class="thumbnail" data-image="https://images.unsplash.com/photo-1587654780298-8c6d6b2c8b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1030&q=80">
                                <img src="https://images.unsplash.com/photo-1587654780298-8c6d6b2c8b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1030&q=80" alt="${product.name}">
                            </div>
                        </div>
                    </div>
                    <div class="product-info-detail">
                        <h1>${product.name}</h1>
                        <div class="product-rating-large">
                            <div class="stars">
                                ${this.generateStarRating(product.rating)}
                            </div>
                            <span>${product.rating}/5</span>
                        </div>
                        <div class="product-price-large">${product.price} сом ${product.oldPrice ? `<span style="font-size: 1.5rem; color: #777; text-decoration: line-through;">${product.oldPrice} сом</span>` : ''}</div>
                        <p class="product-description">${product.description}</p>
                        
                        ${product.sizes ? `
                        <div class="product-options">
                            <div class="option-title">Размер:</div>
                            <div class="size-options">
                                ${product.sizes.map((size, index) => `
                                    <div class="size-option ${index === 0 ? 'active' : ''}" data-size="${size}">${size}</div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        ${product.colors ? `
                        <div class="product-options">
                            <div class="option-title">Цвет:</div>
                            <div class="color-options">
                                ${product.colors.map((color, index) => `
                                    <div class="color-option ${index === 0 ? 'active' : ''}" data-color="${color}" style="background-color: ${color};"></div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        <div class="product-options">
                            <div class="option-title">Количество:</div>
                            <div class="quantity-selector">
                                <button id="decrease-qty">-</button>
                                <span id="product-quantity">1</span>
                                <button id="increase-qty">+</button>
                            </div>
                        </div>
                        
                        <button class="btn" id="add-to-cart-detail" data-id="${product.id}" style="width: 100%; padding: 18px; font-size: 1.2rem;">
                            <i class="fas fa-cart-plus"></i> Добавить в корзину
                        </button>
                    </div>
                `;
                
                // Add event listeners for product details page
                // Thumbnail selection
                container.querySelectorAll('.thumbnail').forEach(thumb => {
                    thumb.addEventListener('click', () => {
                        container.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                        document.getElementById('main-product-img').src = thumb.getAttribute('data-image');
                    });
                });
                
                // Size selection
                container.querySelectorAll('.size-option').forEach(option => {
                    option.addEventListener('click', () => {
                        container.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
                        option.classList.add('active');
                    });
                });
                
                // Color selection
                container.querySelectorAll('.color-option').forEach(option => {
                    option.addEventListener('click', () => {
                        container.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
                        option.classList.add('active');
                    });
                });
                
                // Quantity controls
                const quantityElement = document.getElementById('product-quantity');
                let quantity = 1;
                
                document.getElementById('decrease-qty').addEventListener('click', () => {
                    if (quantity > 1) {
                        quantity--;
                        quantityElement.textContent = quantity;
                    }
                });
                
                document.getElementById('increase-qty').addEventListener('click', () => {
                    quantity++;
                    quantityElement.textContent = quantity;
                });
                
                // Add to cart button
                document.getElementById('add-to-cart-detail').addEventListener('click', () => {
                    const selectedSize = container.querySelector('.size-option.active')?.getAttribute('data-size') || null;
                    const selectedColor = container.querySelector('.color-option.active')?.getAttribute('data-color') || null;
                    
                    this.addToCart(product.id, quantity, selectedSize, selectedColor);
                });
            },
            
            renderCartItems: function() {
                const container = document.getElementById('cart-items');
                const emptyMessage = document.getElementById('empty-cart-message');
                const cartTotal = document.getElementById('cart-total-price');
                
                if (!container) return;
                
                if (this.cart.length === 0) {
                    container.innerHTML = '<div class="empty-cart-message"><p>Ваша корзина пуста</p></div>';
                    cartTotal.textContent = '0 сом';
                    return;
                }
                
                container.innerHTML = this.cart.map((item, index) => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${item.price} сом</div>
                            ${item.size ? `<div class="cart-item-size">Размер: ${item.size}</div>` : ''}
                            ${item.color ? `<div class="cart-item-color">Цвет: <span style="display: inline-block; width: 15px; height: 15px; border-radius: 50%; background-color: ${item.color};"></span></div>` : ''}
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-btn decrease-quantity" data-index="${index}">-</div>
                            <div class="cart-item-quantity">${item.quantity}</div>
                            <div class="quantity-btn increase-quantity" data-index="${index}">+</div>
                            <button class="remove-item" data-index="${index}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `).join('');
                
                // Update total
                cartTotal.textContent = `${this.getCartTotal()} сом`;
                
                // Add event listeners for cart items
                container.querySelectorAll('.decrease-quantity').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const index = parseInt(e.currentTarget.getAttribute('data-index'));
                        this.updateCartItemQuantity(index, this.cart[index].quantity - 1);
                    });
                });
                
                container.querySelectorAll('.increase-quantity').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const index = parseInt(e.currentTarget.getAttribute('data-index'));
                        this.updateCartItemQuantity(index, this.cart[index].quantity + 1);
                    });
                });
                
                container.querySelectorAll('.remove-item').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const index = parseInt(e.currentTarget.getAttribute('data-index'));
                        this.removeFromCart(index);
                    });
                });
            },
            
            renderCheckoutItems: function() {
                const container = document.getElementById('checkout-items');
                const orderTotal = document.getElementById('order-total-price');
                
                if (!container) return;
                
                container.innerHTML = this.cart.map(item => `
                    <div class="order-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>${item.price * item.quantity} сом</span>
                    </div>
                `).join('');
                
                orderTotal.textContent = `${this.getCartTotal()} сом`;
            },
            
            // Navigation
            navigateToPage: function(pageId) {
                // Hide all pages
                document.querySelectorAll('.page').forEach(page => {
                    page.classList.remove('active');
                });
                
                // Show target page
                const targetPage = document.getElementById(`${pageId}-page`);
                if (targetPage) {
                    targetPage.classList.add('active');
                    this.currentPage = pageId;
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-page') === pageId) {
                            link.classList.add('active');
                        }
                    });
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                    
                    // Render page-specific content
                    if (pageId === 'catalog') {
                        this.renderCatalogProducts();
                    } else if (pageId === 'checkout') {
                        this.renderCheckoutItems();
                    }
                }
            },
            
            showProductDetails: function(productId) {
                this.renderProductDetails(productId);
                this.navigateToPage('product');
            },
            
            // Helper Functions
            generateStarRating: function(rating) {
                let stars = '';
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;
                
                for (let i = 1; i <= 5; i++) {
                    if (i <= fullStars) {
                        stars += '<i class="fas fa-star"></i>';
                    } else if (i === fullStars + 1 && hasHalfStar) {
                        stars += '<i class="fas fa-star-half-alt"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                }
                
                return stars;
            },
            
            translateCategory: function(category) {
                const categories = {
                    'toys': 'Игрушки',
                    'clothing': 'Одежда',
                    'shoes': 'Обувь'
                };
                return categories[category] || category;
            },
            
            showNotification: function(message) {
                // Create notification element
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.innerHTML = `
                    <div style="position: fixed; top: 100px; right: 20px; background-color: var(--success); color: white; padding: 15px 25px; border-radius: 10px; box-shadow: var(--shadow); z-index: 2000; animation: slideInRight 0.3s ease;">
                        <i class="fas fa-check-circle"></i> ${message}
                    </div>
                `;
                
                document.body.appendChild(notification);
                
                // Remove after 3 seconds
                setTimeout(() => {
                    notification.remove();
                }, 3000);
            },
            
            // Setup Functions
            setupEventListeners: function() {
                // Navigation
                document.querySelectorAll('.nav-link, .logo, .footer-links a').forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const page = e.currentTarget.getAttribute('data-page');
                        if (page) {
                            this.navigateToPage(page);
                        }
                        
                        // Close mobile menu if open
                        document.getElementById('main-nav').classList.remove('active');
                    });
                });
                
                // Mobile menu toggle
                document.getElementById('mobile-menu-btn').addEventListener('click', () => {
                    document.getElementById('main-nav').classList.toggle('active');
                });
                
                // Category cards
                document.querySelectorAll('.category-card .btn-small').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        const page = btn.getAttribute('data-page');
                        const filter = btn.getAttribute('data-filter');
                        
                        if (page) {
                            this.navigateToPage(page);
                            
                            // Set active filter
                            if (filter) {
                                setTimeout(() => {
                                    document.querySelectorAll('.filter-btn').forEach(fb => {
                                        fb.classList.remove('active');
                                        if (fb.getAttribute('data-filter') === filter) {
                                            fb.classList.add('active');
                                        }
                                    });
                                    this.renderCatalogProducts(filter);
                                }, 100);
                            }
                        }
                    });
                });
                
                // Filter buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        
                        const filter = btn.getAttribute('data-filter');
                        this.renderCatalogProducts(filter);
                    });
                });
                
                // Cart icon
                document.getElementById('cart-icon').addEventListener('click', () => {
                    this.openCart();
                });
                
                // Close cart
                document.getElementById('close-cart').addEventListener('click', () => {
                    this.closeCart();
                });
                
                document.getElementById('overlay').addEventListener('click', () => {
                    this.closeCart();
                });
                
                // Clear cart button
                document.getElementById('clear-cart').addEventListener('click', () => {
                    if (this.cart.length > 0) {
                        if (confirm('Вы уверены, что хотите очистить корзину?')) {
                            this.clearCart();
                        }
                    }
                });
                
                // Checkout button in cart
                document.getElementById('checkout-btn').addEventListener('click', () => {
                    if (this.cart.length > 0) {
                        this.closeCart();
                        this.navigateToPage('checkout');
                    } else {
                        alert('Ваша корзина пуста. Добавьте товары сначала!');
                    }
                });
                
                // Payment method selection
                document.querySelectorAll('.payment-method').forEach(method => {
                    method.addEventListener('click', () => {
                        document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
                        method.classList.add('active');
                        
                        const paymentMethod = method.getAttribute('data-method');
                        document.getElementById('payment-method').value = paymentMethod;
                        
                        // Show/hide card details
                        const cardDetails = document.getElementById('card-details');
                        if (cardDetails) {
                            cardDetails.style.display = paymentMethod === 'card' ? 'block' : 'none';
                        }
                    });
                });
                
                // Checkout form submission
                const checkoutForm = document.getElementById('checkout-form');
                if (checkoutForm) {
                    checkoutForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        
                        // Validate form
                        const name = document.getElementById('full-name').value;
                        const email = document.getElementById('email').value;
                        const phone = document.getElementById('phone').value;
                        const address = document.getElementById('address').value;
                        const paymentMethod = document.getElementById('payment-method').value;
                        
                        if (!name || !email || !phone || !address) {
                            alert('Пожалуйста, заполните все обязательные поля.');
                            return;
                        }
                        
                        if (paymentMethod === 'card') {
                            const cardNumber = document.getElementById('card-number').value;
                            const cardExpiry = document.getElementById('card-expiry').value;
                            const cardCvc = document.getElementById('card-cvc').value;
                            
                            if (!cardNumber || !cardExpiry || !cardCvc) {
                                alert('Пожалуйста, заполните все данные карты.');
                                return;
                            }
                            
                            // Simple card validation
                            if (!this.validateCardNumber(cardNumber)) {
                                alert('Пожалуйста, введите корректный номер карты.');
                                return;
                            }
                            
                            if (!this.validateCardExpiry(cardExpiry)) {
                                alert('Пожалуйста, введите корректный срок действия карты (ММ/ГГ).');
                                return;
                            }
                            
                            if (!this.validateCardCvc(cardCvc)) {
                                alert('Пожалуйста, введите корректный CVC код (3 цифры).');
                                return;
                            }
                        }
                        
                        // Generate order ID
                        const orderId = Math.floor(10000 + Math.random() * 90000);
                        document.getElementById('order-id').textContent = orderId;
                        
                        // Clear cart
                        this.clearCart();
                        
                        // Show success page
                        this.navigateToPage('order-success');
                    });
                }
                
                // Review form submission
                const reviewForm = document.getElementById('review-form');
                if (reviewForm) {
                    reviewForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        
                        const name = document.getElementById('reviewer-name').value;
                        const rating = document.getElementById('rating-value').value;
                        const text = document.getElementById('review-text').value;
                        
                        if (!name || !text) {
                            alert('Пожалуйста, заполните все обязательные поля.');
                            return;
                        }
                        
                        // Create new review element
                        const reviewsContainer = document.querySelector('.reviews-container');
                        const newReview = document.createElement('div');
                        newReview.className = 'review-card fade-in';
                        newReview.innerHTML = `
                            <div class="review-header">
                                <div class="reviewer">
                                    <div class="reviewer-avatar">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="reviewer-info">
                                        <h4>${name}</h4>
                                        <div class="product-rating">
                                            ${this.generateStarRating(parseInt(rating))}
                                        </div>
                                    </div>
                                </div>
                                <div class="review-date">${new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                            </div>
                            <div class="review-content">
                                <p>${text}</p>
                            </div>
                        `;
                        
                        // Insert before the form
                        reviewsContainer.insertBefore(newReview, reviewForm);
                        
                        // Reset form
                        reviewForm.reset();
                        document.getElementById('rating-value').value = '5';
                        
                        // Reset stars to default
                        document.querySelectorAll('#rating-stars i').forEach((star, index) => {
                            if (index < 5) {
                                star.classList.add('active');
                            }
                        });
                        
                        alert('Спасибо за ваш отзыв!');
                    });
                }
                
                // Rating stars
                document.querySelectorAll('#rating-stars i').forEach(star => {
                    star.addEventListener('click', () => {
                        const rating = parseInt(star.getAttribute('data-rating'));
                        document.getElementById('rating-value').value = rating;
                        
                        // Update star display
                        document.querySelectorAll('#rating-stars i').forEach((s, index) => {
                            if (index < rating) {
                                s.classList.add('active');
                            } else {
                                s.classList.remove('active');
                            }
                        });
                    });
                });
                
                // Contact form
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                    contactForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        
                        const name = document.getElementById('contact-name').value;
                        const email = document.getElementById('contact-email').value;
                        const message = document.getElementById('contact-message').value;
                        
                        if (!name || !email || !message) {
                            alert('Пожалуйста, заполните все обязательные поля.');
                            return;
                        }
                        
                        // In a real app, this would send the data to a server
                        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
                        contactForm.reset();
                    });
                }
                
                // Header scroll effect
                window.addEventListener('scroll', () => {
                    const header = document.getElementById('main-header');
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
            },
            
            setupCountdownTimer: function() {
                // Set countdown to 7 days from now
                const countdownDate = new Date();
                countdownDate.setDate(countdownDate.getDate() + 7);
                
                function updateCountdown() {
                    const now = new Date().getTime();
                    const distance = countdownDate - now;
                    
                    // Calculate days, hours, minutes, seconds
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                    // Update display
                    document.getElementById('days').textContent = days.toString().padStart(2, '0');
                    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
                    
                    // If the countdown is over
                    if (distance < 0) {
                        clearInterval(countdownTimer);
                        document.getElementById('countdown-timer').innerHTML = "<h3>Распродажа завершена!</h3>";
                    }
                }
                
                // Update immediately and then every second
                updateCountdown();
                const countdownTimer = setInterval(updateCountdown, 1000);
            },
            
            setupScrollAnimations: function() {
                // Add animation classes to elements when they come into view
                const observerOptions = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.1
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('fade-in');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                
                // Observe elements that should animate on scroll
                document.querySelectorAll('.category-card, .product-card, .review-card').forEach(el => {
                    observer.observe(el);
                });
            },
            
            // Cart Modal
            openCart: function() {
                this.renderCartItems();
                document.getElementById('cart-modal').classList.add('open');
                document.getElementById('overlay').classList.add('active');
                document.body.style.overflow = 'hidden';
            },
            
            closeCart: function() {
                document.getElementById('cart-modal').classList.remove('open');
                document.getElementById('overlay').classList.remove('active');
                document.body.style.overflow = 'auto';
            },
            
            // Validation functions
            validateCardNumber: function(number) {
                // Simple validation - just check if it's 16 digits
                const cleaned = number.replace(/\s/g, '');
                return /^\d{16}$/.test(cleaned);
            },
            
            validateCardExpiry: function(expiry) {
                // Check format MM/YY
                if (!/^\d{2}\/\d{2}$/.test(expiry)) return false;
                
                const [month, year] = expiry.split('/').map(num => parseInt(num, 10));
                const now = new Date();
                const currentYear = now.getFullYear() % 100;
                const currentMonth = now.getMonth() + 1;
                
                if (month < 1 || month > 12) return false;
                if (year < currentYear) return false;
                if (year === currentYear && month < currentMonth) return false;
                
                return true;
            },
            
            validateCardCvc: function(cvc) {
                return /^\d{3}$/.test(cvc);
            }
        };
        
        // Initialize the application when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            ToyLand.init();
        });
