// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // ============ Menu Mobile ============
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // ============ Dados dos Artistas ============
    const artists = [
        {
            id: "alex-silva",
            name: "Alex Silva",
            specialty: "Realismo",
            bio: "Especialista em retratos e tatuagens realistas com mais de 10 anos de experiência.",
            image: "images/artists/alex-silva.jpg",
            social: {
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
                twitter: "https://twitter.com"
            },
            about: "Alex começou sua jornanda no mundo da tatuagem em 2010, após se formar em Belas Artes. Seu trabalho é reconhecido internacionalmente, tendo participado de convenções em todo o mundo. Especializado em retratos hiper-realistas e tatuagens que contam histórias pessoais.",
            years: "12+ anos de experiência",
            style: "Realismo, Retratos, Preto e Cinza",
            quote: "Cada tatuagem é uma página do livro da sua vida",
            works: [
                "images/works/alex-1.jpg",
                "images/works/alex-2.jpg",
                "images/works/alex-3.jpg",
                "images/works/alex-4.jpg"
            ],
            awards: [
                "Melhor Realismo - Convenção Internacional de Tatuagem (2020)",
                "Artista Revelação - Tattoo Week (2015)",
                "Prêmio Excelência em Detalhe - Ink Master (2018)"
            ]
        },
        {
            id: "maya-tanaka",
            name: "Maya Tanaka",
            specialty: "Aquarela",
            bio: "Mestra em tatuagens no estilo aquarela, trazendo cores vibrantes e designs únicos.",
            image: "images/artists/maya-tanaka.jpg",
            social: {
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
                twitter: "https://twitter.com"
            },
            about: "Maya trouxe sua formação em pintura tradicional para o mundo da tatuagem, criando peças que parecem verdadeiras aquarelas sobre a pele. Seu trabalho delicado e colorido conquistou clientes em todo o mundo.",
            years: "8+ anos de experiência",
            style: "Aquarela, Colorido, Estilo Livre",
            quote: "A pele é minha tela, a tinta minha paixão",
            works: [
                "images/works/maya-1.jpg",
                "images/works/maya-2.jpg",
                "images/works/maya-3.jpg",
                "images/works/maya-4.jpg"
            ],
            awards: [
                "Melhor Uso de Cor - Tattoo Expo (2021)",
                "Inovação em Tatuagem - Art Ink Festival (2019)"
            ]
        },
        {
            id: "carlos-ribeiro",
            name: "Carlos Ribeiro",
            specialty: "Old School",
            bio: "Tradicionalista com um toque moderno, especializado em Old School e Neo-Tradicional.",
            image: "images/artists/carlos-ribeiro.jpg",
            social: {
                instagram: "https://instagram.com",
                facebook: "https://facebook.com",
                twitter: "https://twitter.com"
            },
            about: "Carlos mantém viva a tradição da tatuagem old school enquanto incorpora técnicas modernas. Seu trabalho é uma homenagem aos mestres da tatuagem tradicional com um toque contemporâneo.",
            years: "15+ anos de experiência",
            style: "Old School, Neo-Tradicional, Bold Lines",
            quote: "Respeitando o passado, inovando no presente",
            works: [
                "images/works/carlos-1.jpg",
                "images/works/carlos-2.jpg",
                "images/works/carlos-3.jpg",
                "images/works/carlos-4.jpg"
            ],
            awards: [
                "Mestre do Old School - Traditional Tattoo Fest (2017, 2019, 2022)",
                "Contribuição à Cultura da Tatuagem - Ink Awards (2020)"
            ]
        }
    ];

    // ============ Renderizar Artistas ============
    const artistContainer = document.getElementById('artistContainer');
    
    if (artistContainer) {
        artists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            artistCard.setAttribute('data-artist-id', artist.id);

            artistCard.innerHTML = `
                <div class="artist-img">
                    <img src="${artist.image}" alt="${artist.name}" loading="lazy">
                </div>
                <div class="artist-overlay">
                    <h4>${artist.name}</h4>
                    <p class="specialty">${artist.specialty}</p>
                    <p>${artist.bio}</p>
                    <a href="artists/${artist.id}.html" class="view-profile">Ver Perfil</a>
                </div>
                <div class="artist-info">
                    <h4>${artist.name}</h4>
                    <p class="specialty">${artist.specialty}</p>
                </div>
            `;

            artistContainer.appendChild(artistCard);
        });
    }

    // ============ Página Individual do Artista ============
    if (document.querySelector('.artist-page')) {
        const urlParams = new URLSearchParams(window.location.search);
        const artistId = window.location.pathname.split('/').pop().replace('.html', '');
        
        const artist = artists.find(a => a.id === artistId);
        
        if (artist) {
            // Preencher os dados do artista
            document.querySelector('.artist-hero img').src = `../${artist.image}`;
            document.querySelector('.artist-hero h1').textContent = artist.name;
            document.querySelector('.artist-hero .specialty').textContent = artist.specialty;
            document.querySelector('.artist-hero .quote').textContent = `"${artist.quote}"`;
            
            // Social links
            document.querySelector('.artist-hero .social-links a[href*="instagram"]').href = artist.social.instagram;
            document.querySelector('.artist-hero .social-links a[href*="facebook"]').href = artist.social.facebook;
            document.querySelector('.artist-hero .social-links a[href*="twitter"]').href = artist.social.twitter;
            
            // Sobre o artista
            document.querySelector('.artist-about').innerHTML = `
                <h2>Sobre o Artista</h2>
                <p>${artist.about}</p>
            `;
            
            // Estatísticas
            document.querySelector('.artist-stats').innerHTML = `
                <h2>Especialidades</h2>
                <div class="stat-item">
                    <span>Estilo Principal:</span> ${artist.style}
                </div>
                <div class="stat-item">
                    <span>Experiência:</span> ${artist.years}
                </div>
                <div class="stat-item">
                    <span>Técnicas:</span> ${artist.specialty}
                </div>
                ${artist.awards.length ? `
                <div class="stat-item">
                    <span>Prêmios:</span> 
                    <ul class="awards-list">
                        ${artist.awards.map(award => `<li>${award}</li>`).join('')}
                    </ul>
                </div>` : ''}
            `;
            
            // Galeria de trabalhos
            const galleryGrid = document.querySelector('.gallery-grid');
            galleryGrid.innerHTML = artist.works.map(work => `
                <div class="gallery-item">
                    <img src="../${work}" alt="Trabalho de ${artist.name}" loading="lazy">
                </div>
            `).join('');
        }
    }

    // ============ Smooth Scrolling ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Atualizar URL sem recarregar a página
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });

    // ============ Efeito de Carregamento ============
    function animateOnScroll() {
        const elements = document.querySelectorAll('.artist-card, .section-title, .style-tags');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configurar observadores de interseção para animação
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.artist-card, .section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Animação inicial
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        animateOnScroll();
    });
    
    window.addEventListener('scroll', animateOnScroll);

    // ============ Lightbox para Galeria ============
    if (document.querySelector('.gallery-item')) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.innerHTML = `
                    <div class="lightbox-content">
                        <span class="close-lightbox">&times;</span>
                        <img src="${imgSrc}" alt="Trabalho do artista">
                    </div>
                `;
                
                document.body.appendChild(lightbox);
                
                lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
                    lightbox.remove();
                });
                
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) {
                        lightbox.remove();
                    }
                });
            });
        });
    }
});