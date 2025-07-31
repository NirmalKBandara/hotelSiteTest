        // Preloader
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Image slider
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slider-image');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            const sliderImages = document.getElementById('slider-images');
            currentSlideIndex = index;
            
            if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
            if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
            
            sliderImages.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlideIndex);
            });
        }

        function nextSlide() {
            showSlide(currentSlideIndex + 1);
        }

        function prevSlide() {
            showSlide(currentSlideIndex - 1);
        }

        function currentSlide(index) {
            showSlide(index - 1);
        }

        // Auto-advance slider
        setInterval(nextSlide, 4000);

        // Modal functions
        function openBookingModal(hotelName) {
            document.getElementById('hotelName').textContent = `Book Your Stay - ${hotelName}`;
            document.getElementById('bookingModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function openOfferModal(offerName) {
            document.getElementById('offerTitle').textContent = offerName;
            
            const offerDetails = {
                'Art of Staycation': `
                    <h4>Package Includes:</h4>
                    <ul style="text-align: left; margin: 1rem 0;">
                        <li>Luxury accommodation with ocean view</li>
                        <li>Complimentary breakfast for two</li>
                        <li>Access to swimming pool and fitness center</li>
                        <li>Late checkout (subject to availability)</li>
                        <li>Welcome drink on arrival</li>
                    </ul>
                    <p><strong>Validity:</strong> January 2025</p>
                    <p><strong>Starting from:</strong> LKR 18,500 per night</p>
                `,
                'Limited Period Escapes': `
                    <h4>Special Discount Package:</h4>
                    <ul style="text-align: left; margin: 1rem 0;">
                        <li>25% off on room rates</li>
                        <li>Complimentary Wi-Fi</li>
                        <li>Access to all hotel facilities</li>
                        <li>Free parking</li>
                    </ul>
                    <p><strong>Validity:</strong> January 10 - January 20, 2025</p>
                    <p><strong>Discount:</strong> 25% off regular rates</p>
                `,
                'Couple Goals Pro': `
                    <h4>Romantic Package Includes:</h4>
                    <ul style="text-align: left; margin: 1rem 0;">
                        <li>Luxury suite with private balcony</li>
                        <li>Candlelit dinner for two</li>
                        <li>Couples spa treatment</li>
                        <li>Champagne and chocolate on arrival</li>
                        <li>Late checkout until 2 PM</li>
                    </ul>
                    <p><strong>Perfect for:</strong> Honeymoons, Anniversaries</p>
                    <p><strong>Starting from:</strong> LKR 22,000 per night</p>
                `,
                'Family Retreat': `
                    <h4>Family Package Includes:</h4>
                    <ul style="text-align: left; margin: 1rem 0;">
                        <li>Family suite or connecting rooms</li>
                        <li>All meals included</li>
                        <li>Kids club activities</li>
                        <li>Beach equipment rental</li>
                        <li>Family game room access</li>
                    </ul>
                    <p><strong>Perfect for:</strong> Families with children</p>
                    <p><strong>Starting from:</strong> LKR 35,000 per night</p>
                `
            };
            
            document.getElementById('offerDetails').innerHTML = offerDetails[offerName] || '<p>Offer details not available.</p>';
            document.getElementById('offerModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            const bookingModal = document.getElementById('bookingModal');
            const offerModal = document.getElementById('offerModal');
            
            if (e.target === bookingModal) {
                closeModal('bookingModal');
            }
            if (e.target === offerModal) {
                closeModal('offerModal');
            }
        });

        // Form submission
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
            closeModal('bookingModal');
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Mobile menu toggle
        document.getElementById('mobile-toggle').addEventListener('click', () => {
            const navMenu = document.getElementById('nav-menu');
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        // Add some interactive hover effects
        document.querySelectorAll('.hotel-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add particle effect to hero section
        function createParticles() {
            const hero = document.querySelector('.hero');
            const particlesContainer = document.createElement('div');
            particlesContainer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
            `;
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
                    animation-delay: ${Math.random() * 5}s;
                `;
                particlesContainer.appendChild(particle);
            }
            
            hero.appendChild(particlesContainer);
        }

        // Initialize particles after page load
        window.addEventListener('load', createParticles);