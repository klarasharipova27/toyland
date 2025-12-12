<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToyLand - Детский магазин игрушек, одежды и обуви</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="main-header">
        <div class="container header-container">
            <a href="#home" class="logo" data-page="home">
                <i class="fas fa-cube logo-icon"></i>
                <h1>ToyLand</h1>
            </a>
            <button class="mobile-menu-btn" id="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </button>
   <nav id="main-nav">
                <ul>
                    <li><a href="#home" class="nav-link active" data-page="home">Главная</a></li>
                    <li><a href="#catalog" class="nav-link" data-page="catalog">Каталог</a></li>
                    <li><a href="#sales" class="nav-link" data-page="sales">Акции</a></li>
                    <li><a href="#reviews" class="nav-link" data-page="reviews">Отзывы</a></li>
                    <li><a href="#contacts" class="nav-link" data-page="contacts">Контакты</a></li>
                </ul>
            </nav>     
            <div class="header-right">
                <div class="cart-icon" id="cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count" id="cart-count">0</span>
                </div>
            </div>
        </div>
    </header>   
    <!-- Cart Modal -->
    <div class="cart-modal" id="cart-modal">
        <div class="cart-header">
            <h3>Ваша корзина</h3>
            <button class="close-cart" id="close-cart">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="cart-items" id="cart-items">
            <!-- Cart items will be dynamically inserted here -->
            <div class="empty-cart-message" id="empty-cart-message">
                <p>Ваша корзина пуста</p>
            </div>
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Итого:</span>
                <span id="cart-total-price">0 сом</span>
            </div>
            <div class="cart-buttons">
                <button class="btn btn-secondary" id="clear-cart">Очистить корзину</button>
                <button class="btn" id="checkout-btn">Оформить заказ</button>
            </div>
        </div>
    </div>
    <div class="overlay" id="overlay"></div>
    <!-- Home Page -->
    <section class="page active" id="home-page">
        <div class="hero">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h2>Добро пожаловать в <span>ToyLand</span> - где мечты детей сбываются!</h2>
                        <p>Откройте для себя лучший выбор игрушек, одежды и обуви для ваших малышей. Качественные товары с веселым дизайном, которые обожают дети и которым доверяют родители.</p>
                        <a href="#catalog" class="btn" data-page="catalog">Купить сейчас</a>
                    </div>
                    <div class="hero-image">
                        <img src="Gemini_Generated_Image_d72xh7d72xh7d72x.png" alt="Дети играют с игрушками" class="hero-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <!-- Categories -->
            <section class="categories">
                <div class="section-title">
                    <h2>Категории товаров</h2>
                </div> 
                <div class="categories-grid">
                    <div class="category-card" data-category="toys">
                        <div class="category-icon">
                            <i class="fas fa-gamepad"></i>
                        </div>
                        <h3>Игрушки</h3>
                        <p>Развивающие, творческие и веселые игрушки для всех возрастов</p>
                        <a href="#catalog" class="btn btn-small" data-page="catalog" data-filter="toys">Смотреть игрушки</a>
                    </div>
                    <div class="category-card" data-category="clothing">
                        <div class="category-icon">
                            <i class="fas fa-tshirt"></i>
                        </div>
                        <h3>Одежда</h3>
                        <p>Удобная и стильная одежда для детей</p>
                        <a href="#catalog" class="btn btn-small" data-page="catalog" data-filter="clothing">Смотреть одежду</a>
                    </div>
                    <div class="category-card" data-category="shoes">
                        <div class="category-icon">
                            <i class="fas fa-shoe-prints"></i>
                        </div>
                        <h3>Обувь</h3>
                        <p>Прочная и удобная обувь для активных детей</p>
                        <a href="#catalog" class="btn btn-small" data-page="catalog" data-filter="shoes">Смотреть обувь</a>
                    </div>
                </div>
            </section>      
            <!-- Featured Products -->
            <section class="featured-products">
                <div class="section-title">
                    <h2>Хиты продаж</h2>
                </div> 
                <div class="products-grid" id="featured-products">
                    <!-- Featured products will be dynamically inserted here -->
                </div>
            </section>
        </div>
    </section> 
    <!-- Catalog Page -->
    <section class="page" id="catalog-page">
        <div class="container">
            <div class="section-title">
                <h2>Каталог товаров</h2>
            </div> 
            <div class="products-filter">
                <button class="filter-btn active" data-filter="all">Все товары</button>
                <button class="filter-btn" data-filter="toys">Игрушки</button>
                <button class="filter-btn" data-filter="clothing">Одежда</button>
                <button class="filter-btn" data-filter="shoes">Обувь</button>
            </div>   
            <div class="products-grid" id="catalog-products">
                <!-- Catalog products will be dynamically inserted here -->
            </div>
        </div>
    </section>
    <!-- Product Detail Page -->
    <section class="page" id="product-page">
        <div class="container">
            <div class="product-detail" id="product-detail-container">
                <!-- Product detail will be dynamically inserted here -->
            </div>
        </div>
    </section>
    <!-- Sales Page -->
    <section class="page" id="sales-page">
        <div class="container">
            <div class="sales-banner">
                <h2>Летняя распродажа!</h2>
                <p>Скидки до 50% на выбранные товары. Предложение ограничено по времени. Не упустите эти удивительные предложения для ваших детей!</p>
                <div class="countdown-timer" id="countdown-timer">
                    <div class="countdown-item">
                        <span class="countdown-number" id="days">00</span>
                        <span class="countdown-label">Дней</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="hours">00</span>
                        <span class="countdown-label">Часов</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="minutes">00</span>
                        <span class="countdown-label">Минут</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number" id="seconds">00</span>
                        <span class="countdown-label">Секунд</span>
                    </div>
                </div>
            </div>  
            <div class="section-title">
                <h2>Товары со скидкой</h2>
            </div>
            <div class="products-grid" id="sales-products">
                <!-- Sales products will be dynamically inserted here -->
            </div>
        </div>
    </section>
    <!-- Reviews Page -->
    <section class="page" id="reviews-page">
        <div class="container">
            <div class="section-title">
                <h2>Отзывы покупателей</h2>
            </div>
            <div class="reviews-container">
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer">
                            <div class="reviewer-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="reviewer-info">
                                <h4>Анна Петрова</h4>
                                <div class="product-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="review-date">15 июня 2023</div>
                    </div>
                    <div class="review-content">
                        <p>Моя дочь обожает плюшевую игрушку-единорога, которую мы купили здесь! Качество отличное, и она такая мягкая. Обязательно буду покупать здесь снова!</p>
                    </div>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer">
                            <div class="reviewer-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="reviewer-info">
                                <h4>Дмитрий Иванов</h4>
                                <div class="product-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <div class="review-date">28 мая 2023</div>
                    </div>
                    <div class="review-content">
                        <p>Отличная обувь для моего активного 5-летнего ребенка. Прослужила несколько месяцев бега и прыжков. Размер оказался идеальным!</p>
                    </div>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer">
                            <div class="reviewer-avatar">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="reviewer-info">
                                <h4>Ольга Смирнова</h4>
                                <div class="product-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div class="review-date">10 июля 2023</div>
                    </div>
                    <div class="review-content">
                        <p>Покупали детский зимний комбинезон. Качество на высоте, ребенок не мерзнет даже в сильные морозы. Доставка была быстрой, все пришло в целости.</p>
                    </div>
                </div>
                <div class="add-review-form">
                    <h3>Добавить отзыв</h3>
                    <form id="review-form">
                        <div class="form-group">
                            <label for="reviewer-name">Ваше имя</label>
                            <input type="text" id="reviewer-name" required>
                        </div>
                                              <div class="form-group">
                            <label>Рейтинг</label>
                            <div class="rating-input" id="rating-stars">
                                <i class="fas fa-star" data-rating="1"></i>
                                <i class="fas fa-star" data-rating="2"></i>
                                <i class="fas fa-star" data-rating="3"></i>
                                <i class="fas fa-star" data-rating="4"></i>
                                <i class="fas fa-star" data-rating="5"></i>
                            </div>
                            <input type="hidden" id="rating-value" value="5">
                        </div>
                        <div class="form-group">
                            <label for="review-text">Ваш отзыв</label>
                            <textarea id="review-text" required></textarea>
                        </div>    
                        <button type="submit" class="btn">Отправить отзыв</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Checkout Page -->
    <section class="page" id="checkout-page">
        <div class="container">
            <div class="section-title">
                <h2>Оформление заказа</h2>
            </div>
            <div class="checkout-container">
                <div class="checkout-form">
                    <h3>Информация о покупателе</h3>
                    <form id="checkout-form">
                        <div class="form-group">
                            <label for="full-name">ФИО *</label>
                            <input type="text" id="full-name" required>
                        </div>  
                        <div class="form-group">
                            <label for="email">Email адрес *</label>
                            <input type="email" id="email" required>
                        </div> 
                        <div class="form-group">
                            <label for="phone">Номер телефона *</label>
                            <input type="tel" id="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="address">Адрес доставки *</label>
                            <textarea id="address" required></textarea>
                        </div> 
                        <h3>Способ оплаты</h3>
                        <div class="payment-methods">
                            <div class="payment-method active" data-method="card">
                                <i class="fas fa-credit-card"></i>
                                <p>Банковская карта</p>
                            </div>
                            <div class="payment-method" data-method="cash">
                                <i class="fas fa-money-bill-wave"></i>
                                <p>Наличными при получении</p>
                            </div>
                        </div>
                        <input type="hidden" id="payment-method" value="card">     
                        <!-- Card details (shown when card is selected) -->
                        <div id="card-details">
                            <div class="form-group">
                                <label for="card-number">Номер карты</label>
                                <input type="text" id="card-number" placeholder="1234 5678 9012 3456">
                            </div>
                            <div class="form-group">
                                <label for="card-expiry">Срок действия</label>
                                <input type="text" id="card-expiry" placeholder="MM/ГГ">
                            </div>
                            <div class="form-group">
                                <label for="card-cvc">CVC код</label>
                                <input type="text" id="card-cvc" placeholder="123">
                            </div>
                        </div>  
                        <button type="submit" class="btn" id="place-order-btn">Оформить заказ</button>
                    </form>
                </div>
                <div class="order-summary">
                    <h3>Сумма заказа</h3>
                    <div class="order-items" id="checkout-items">
                        <!-- Order items will be dynamically inserted here -->
                    </div>
                    <div class="order-total">
                        <span>Итого:</span>
                        <span id="order-total-price">0 сом</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Order Success Page -->
    <section class="page" id="order-success-page">
        <div class="container">
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h2>Спасибо за ваш заказ!</h2>
                <p>Ваш заказ успешно оформлен. Мы отправим вам подтверждение на email с деталями заказа в ближайшее время.</p>
                <p>Номер заказа: <strong>#TL-<span id="order-id">12345</span></strong></p>
                <p>Примерная дата доставки: <strong>3-5 рабочих дней</strong></p>
                <div style="margin-top: 40px;">
                    <a href="#home" class="btn" data-page="home">Продолжить покупки</a>
                </div>
            </div>
        </div>
    </section>
    <!-- Contacts Page -->
    <section class="page" id="contacts-page">
        <div class="container">
            <div class="section-title">
                <h2>Контакты</h2>
            </div>
            <div class="contacts-container">
                <div class="contact-info">
                    <h3>Свяжитесь с нами</h3>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Наш магазин</h4>
                            <p>ул. Той 123, Бишкек, Кыргызстан</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Номер телефона</h4>
                            <p>+996 (555) 123-456</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Email адрес</h4>
                            <p>info@toyland.kg</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="contact-text">
                            <h4>Часы работы</h4>
                            <p>Пн - Пт: 9:00 - 20:00</p>
                            <p>Сб - Вс: 10:00 - 18:00</p>
                        </div>
                    </div>
                </div>
                <div class="contact-form">
                    <h3>Отправить сообщение</h3>
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="contact-name">Ваше имя</label>
                            <input type="text" id="contact-name" required>
                        </div>       
                        <div class="form-group">
                            <label for="contact-email">Ваш Email</label>
                            <input type="email" id="contact-email" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-message">Ваше сообщение</label>
                            <textarea id="contact-message" required></textarea>
                        </div>    
                        <button type="submit" class="btn">Отправить сообщение</button>
                    </form>
                    <div class="map-container">
                        <div class="map-placeholder">
                            <i class="fas fa-map-marked-alt"></i>
                            <p>Карта расположения магазина</p>
                            <p>ул. Той 123, Бишкек</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>ToyLand</h3>
                    <p>Лучший интернет-магазин детских игрушек, одежды и обуви. Качественные товары с заботой и любовью для ваших детей.</p>
                </div>
                <div class="footer-column">
                    <h3>Быстрые ссылки</h3>
                    <ul class="footer-links">
                        <li><a href="#home" data-page="home">Главная</a></li>
                        <li><a href="#catalog" data-page="catalog">Каталог</a></li>
                        <li><a href="#sales" data-page="sales">Акции</a></li>
                        <li><a href="#reviews" data-page="reviews">Отзывы</a></li>
                        <li><a href="#contacts" data-page="contacts">Контакты</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Категории</h3>
                    <ul class="footer-links">
                        <li><a href="#catalog" data-page="catalog" data-filter="toys">Игрушки</a></li>
                        <li><a href="#catalog" data-page="catalog" data-filter="clothing">Одежда</a></li>
                        <li><a href="#catalog" data-page="catalog" data-filter="shoes">Обувь</a></li>
                        <li><a href="#catalog" data-page="catalog" data-filter="all">Все товары</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Контактная информация</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> ул. Той 123, Бишкек</li>
                        <li><i class="fas fa-phone"></i> +996 (555) 123-456</li>
                        <li><i class="fas fa-envelope"></i> info@toyland.kg</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 ToyLand. Все права защищены. | Сделано с <i class="fas fa-heart" style="color: var(--primary);"></i> для детей</p>
            </div>
        </div>
    </footer>
    <script src="script.js">    
    </script>
</body>
</html>
