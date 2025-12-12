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
                    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
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
                    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
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
                    image: "https://images.unsplash.com/photo-1589874186480-ecd085096d68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1030&q=80",
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
                    image: "https://images.unsplash.com/photo-1587654780298-8c6d6b2c8b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1030&q=80",
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
                    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
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
                    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
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
                    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
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
                    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
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
                    image: "https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
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
                    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
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
                    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
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