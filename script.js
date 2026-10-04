/**
 * THE ONE WITH THE WEBSITE
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Data Sources
    // ----------------------------------------------------
    const characters = [
        { id: 'rachel', name: 'Rachel Green', color: '#8C6A9E', role: 'Fashion Executive', trait: 'Stylish', quote: 'No uterus, no opinion.', bio: 'Started as a runaway bride, ended up a fashion executive. She loves fashion, her friends, and occasionally traditional English trifles made with beef.', location: 'Monica\'s Apartment' },
        { id: 'monica', name: 'Monica Geller', color: '#C44536', role: 'Head Chef', trait: 'Organized', quote: 'I KNOW!', bio: 'The "mother" of the group. Highly competitive, incredibly organized, and an amazing chef. Her apartment is the central hub for the gang.', location: 'Kitchen' },
        { id: 'phoebe', name: 'Phoebe Buffay', color: '#E3B448', role: 'Masseuse / Musician', trait: 'Eccentric', quote: 'Smelly cat, smelly cat, what are they feeding you?', bio: 'Quirky, spiritual, and always uniquely herself. She plays guitar at Central Perk and has a colorful past.', location: 'Central Perk' },
        { id: 'joey', name: 'Joey Tribbiani', color: '#4F8699', role: 'Actor', trait: 'Loyal', quote: 'How you doin\'?', bio: 'A struggling (and sometimes successful) actor with a huge heart and an even bigger appetite. He never shares food.', location: 'Joey & Chandler\'s' },
        { id: 'chandler', name: 'Chandler Bing', color: '#6C7A58', role: 'IT Procurement / Copywriter', trait: 'Sarcastic', quote: 'Hi, I\'m Chandler. I make jokes when I\'m uncomfortable.', bio: 'Uses humor as a defense mechanism. He works in statistical analysis and data reconfiguration (nobody knows what that means).', location: 'Office' },
        { id: 'ross', name: 'Ross Geller', color: '#5A4B47', role: 'Paleontologist', trait: 'Academic', quote: 'WE WERE ON A BREAK!', bio: 'Monica\'s older brother. A passionate dinosaur enthusiast who has been married (and divorced) three times.', location: 'Museum' }
    ];

    const quizQuestions = [
        { q: 'How do you handle a stressful situation?', options: [
            { a: 'Go shopping.', char: 'rachel' },
            { a: 'Clean everything in sight.', char: 'monica' },
            { a: 'Play a song about it.', char: 'phoebe' },
            { a: 'Eat a sandwich.', char: 'joey' },
            { a: 'Make a sarcastic joke.', char: 'chandler' },
            { a: 'Correct someone\'s grammar.', char: 'ross' }
        ]},
        { q: 'What is your ideal weekend?', options: [
            { a: 'Organizing my closet.', char: 'monica' },
            { a: 'Watching Baywatch in a recliner.', char: 'joey' },
            { a: 'Going on a date.', char: 'rachel' },
            { a: 'Going to a museum.', char: 'ross' },
            { a: 'Taking a bubble bath.', char: 'chandler' },
            { a: 'Something completely random.', char: 'phoebe' }
        ]}
    ];

    const episodes = [
        { id: 1, title: 'The Pilot', season: 1, ep: 1, theme: 'relationships', desc: 'Rachel leaves Barry at the altar and moves in with Monica.', chars: ['Rachel', 'Monica'] },
        { id: 2, title: 'The One with the Blackout', season: 1, ep: 7, theme: 'relationships', desc: 'New York suffers a blackout, and Chandler gets stuck in an ATM vestibule.', chars: ['Chandler', 'Ross'] },
        { id: 3, title: 'The One Where Ross Finds Out', season: 2, ep: 7, theme: 'relationships', desc: 'Rachel leaves a drunken message on Ross\'s answering machine.', chars: ['Ross', 'Rachel'] },
        { id: 4, title: 'The One with the Prom Video', season: 2, ep: 14, theme: 'relationships', desc: 'The gang watches an old home video of Monica and Rachel getting ready for prom.', chars: ['Ross', 'Rachel', 'Monica'] },
        { id: 5, title: 'The One with the Embryos', season: 4, ep: 12, theme: 'chaos', desc: 'A high-stakes trivia game decides who gets the big apartment.', chars: ['Monica', 'Chandler', 'Joey', 'Rachel'] },
        { id: 6, title: 'The One with All the Thanksgivings', season: 5, ep: 8, theme: 'thanksgiving', desc: 'The gang shares their worst Thanksgiving memories.', chars: ['Monica', 'Chandler'] },
        { id: 7, title: 'The One Where Everybody Finds Out', season: 5, ep: 14, theme: 'relationships', desc: 'Phoebe and Rachel try to get Monica and Chandler to confess they are dating.', chars: ['Phoebe', 'Chandler', 'Monica'] },
        { id: 8, title: 'The One with the Cop', season: 5, ep: 16, theme: 'chaos', desc: 'Ross buys a couch and tries to move it up the stairs himself. PIVOT!', chars: ['Ross', 'Rachel', 'Chandler'] }
    ];

    const quotes = [
        { text: 'Pivot! Pivot! Pivot!', author: 'Ross Geller', color: '#5A4B47' },
        { text: 'Joey doesn\'t share food!', author: 'Joey Tribbiani', color: '#4F8699' },
        { text: 'I\'m not great at the advice. Can I interest you in a sarcastic comment?', author: 'Chandler Bing', color: '#6C7A58' },
        { text: 'They don\'t know that we know they know we know.', author: 'Phoebe Buffay', color: '#E3B448' },
        { text: 'I stepped up! She\'s my friend and she needed help. If I had to, I\'d pee on any one of you!', author: 'Joey Tribbiani', color: '#4F8699' }
    ];

    // ----------------------------------------------------
    // 2. Utility & Sanitization
    // ----------------------------------------------------
    const qs = (selector) => document.querySelector(selector);
    const qsa = (selector) => document.querySelectorAll(selector);
    const sanitizeHTML = (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    // ----------------------------------------------------
    // 3. Preloader
    // ----------------------------------------------------
    const preloader = qs('#preloader');
    const loadingBar = qs('#loading-bar');
    const loadingPercentage = qs('#loading-percentage');
    let loadProgress = 0;

    // Simulate loading progress
    const loadInterval = setInterval(() => {
        loadProgress += Math.floor(Math.random() * 15) + 5;
        if (loadProgress >= 100) {
            loadProgress = 100;
            clearInterval(loadInterval);
            setTimeout(hidePreloader, 500);
        }
        loadingBar.style.width = `${loadProgress}%`;
        loadingPercentage.textContent = `${loadProgress}%`;
    }, 200);

    // Fallback maximum timeout
    const fallbackTimeout = setTimeout(() => {
        clearInterval(loadInterval);
        hidePreloader();
    }, 5000);

    function hidePreloader() {
        clearTimeout(fallbackTimeout);
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scroll
        setTimeout(() => preloader.style.display = 'none', 500);
    }
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';


    // ----------------------------------------------------
    // 4. Custom Cursor
    // ----------------------------------------------------
    const cursor = qs('#custom-cursor');
    const cursorRing = qs('#custom-cursor-ring');
    
    // Check for reduced motion or touch device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (!prefersReducedMotion && !isTouchDevice) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            // Add slight delay to ring
            setTimeout(() => {
                cursorRing.style.left = `${e.clientX}px`;
                cursorRing.style.top = `${e.clientY}px`;
            }, 50);
        }, { passive: true });

        // Hover effects via delegation
        document.addEventListener('mouseover', (e) => {
            const interactiveElement = e.target.closest('a, button, input, textarea, select, .hotspot, .character-card, .episode-card');
            if (interactiveElement) {
                document.body.classList.add('cursor-hover');
            }
        });
        document.addEventListener('mouseout', (e) => {
            const interactiveElement = e.target.closest('a, button, input, textarea, select, .hotspot, .character-card, .episode-card');
            if (interactiveElement) {
                document.body.classList.remove('cursor-hover');
            }
        });
    } else {
        cursor.style.display = 'none';
        cursorRing.style.display = 'none';
    }


    // ----------------------------------------------------
    // 5. Navigation & Scroll
    // ----------------------------------------------------
    const header = qs('.main-header');
    const menuToggle = qs('#menu-toggle');
    const navLinks = qs('#nav-links');
    const scrollProgress = qs('#scroll-progress');
    const navAnchors = qsa('.nav-links a');

    // Scroll progress & sticky header
    document.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = `${scrollPercent}%`;

        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link highlighting
        let currentSection = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navAnchors.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu on link click or Escape
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        }
    });


    // ----------------------------------------------------
    // 6. Theme & Audio Management
    // ----------------------------------------------------
    const themeBtn = qs('#theme-toggle');
    const htmlEl = document.documentElement;
    
    // Initialize theme from local storage
    const savedTheme = localStorage.getItem('site-theme') || 'day';
    htmlEl.setAttribute('data-theme', savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'day' ? 'night' : 'day';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('site-theme', newTheme);
        
        const title = newTheme === 'day' ? 'Switch to New York Night theme' : 'Switch to Apartment Day theme';
        themeBtn.setAttribute('aria-label', title);
        themeBtn.setAttribute('title', title);
    });

    // Audio
    const audioBtn = qs('#audio-toggle');
    const soundMutedLine = qs('.sound-muted');
    const srAnnouncer = qs('#sr-announcer');
    let audioContext = null;
    let isPlaying = false;
    let userHasInteracted = false;

    // Optional audio element (create dynamically)
    const bgAudio = new Audio('assets/audio/coffee-shop-ambience.mp3');
    bgAudio.loop = true;
    bgAudio.volume = 0.3;

    const savedAudioState = localStorage.getItem('site-audio-muted');
    let isMuted = savedAudioState === 'true';
    
    function updateAudioIcon() {
        if (isMuted) {
            soundMutedLine.style.display = 'block';
            audioBtn.setAttribute('aria-label', 'Unmute ambient sound');
        } else {
            soundMutedLine.style.display = 'none';
            audioBtn.setAttribute('aria-label', 'Mute ambient sound');
        }
    }
    updateAudioIcon();

    audioBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        localStorage.setItem('site-audio-muted', isMuted);
        updateAudioIcon();
        
        if (isMuted) {
            bgAudio.pause();
            srAnnouncer.textContent = 'Audio muted.';
        } else {
            bgAudio.play().catch(e => console.log('Audio play failed', e));
            srAnnouncer.textContent = 'Audio playing.';
        }
    });

    // Try autoplay on first interaction
    const initAudio = () => {
        if (userHasInteracted) return;
        userHasInteracted = true;
        if (!isMuted) {
            bgAudio.play().catch(e => console.log('Autoplay prevented', e));
        }
        document.removeEventListener('click', initAudio);
        document.removeEventListener('keydown', initAudio);
    };
    document.addEventListener('click', initAudio);
    document.addEventListener('keydown', initAudio);


    // ----------------------------------------------------
    // 7. Meet the Six (Rendering Cards)
    // ----------------------------------------------------
    const charGrid = qs('#character-grid');
    if (charGrid) {
        characters.forEach(char => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.style.setProperty('--char-color', char.color);
            
            card.innerHTML = `
                <div class="character-image-wrap">
                    <span class="character-monogram" aria-hidden="true">${char.name.charAt(0)}</span>
                </div>
                <div class="character-content">
                    <h3 class="character-name">${sanitizeHTML(char.name)}</h3>
                    <p class="character-summary">${sanitizeHTML(char.role)} • ${sanitizeHTML(char.trait)}</p>
                    <p class="character-caption">"${sanitizeHTML(char.quote)}"</p>
                    <button class="btn btn-secondary btn-small view-profile-btn" data-id="${char.id}">View Profile</button>
                </div>
            `;
            charGrid.appendChild(card);
        });

        charGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-profile-btn')) {
                const charId = e.target.getAttribute('data-id');
                const char = characters.find(c => c.id === charId);
                if (char) {
                    openModal(`
                        <h2 style="color:${char.color}">${char.name}</h2>
                        <h3>${char.role}</h3>
                        <p><strong>Trait:</strong> ${char.trait}</p>
                        <p><strong>Bio:</strong> ${char.bio}</p>
                        <p><strong>Favorite Location:</strong> ${char.location}</p>
                        <blockquote>"${char.quote}"</blockquote>
                    `);
                }
            }
        });
    }

    // ----------------------------------------------------
    // 8. Quiz Logic
    // ----------------------------------------------------
    const quizApp = qs('#quiz-app');
    let currentQ = 0;
    let scores = { rachel: 0, monica: 0, phoebe: 0, joey: 0, chandler: 0, ross: 0 };
    
    function renderQuiz() {
        if (!quizApp) return;
        
        if (currentQ >= quizQuestions.length) {
            showQuizResult();
            return;
        }

        const q = quizQuestions[currentQ];
        let html = `
            <div class="quiz-progress">Question ${currentQ + 1} of ${quizQuestions.length}</div>
            <h3 class="quiz-question">${sanitizeHTML(q.q)}</h3>
            <div class="quiz-options">
        `;

        q.options.forEach((opt, idx) => {
            html += `<button class="btn btn-secondary quiz-option-btn" data-char="${opt.char}">${sanitizeHTML(opt.a)}</button>`;
        });

        html += `</div>`;
        if (currentQ > 0) {
            html += `<button class="btn btn-secondary btn-small quiz-prev-btn" style="margin-top: 1rem;">Previous</button>`;
        }
        
        quizApp.innerHTML = html;

        // Add event listeners
        qsa('.quiz-option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const char = e.target.getAttribute('data-char');
                scores[char]++;
                currentQ++;
                renderQuiz();
            });
        });

        const prevBtn = qs('.quiz-prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentQ--;
                // In a real app, we'd need to subtract the previous answer's score. 
                // For simplicity, we just reset scores if they go back.
                scores = { rachel: 0, monica: 0, phoebe: 0, joey: 0, chandler: 0, ross: 0 };
                currentQ = 0; // jump to start for simplicity in this demo
                renderQuiz();
            });
        }
    }

    function showQuizResult() {
        let maxScore = -1;
        let winner = 'rachel';
        for (const [char, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                winner = char;
            }
        }

        const charObj = characters.find(c => c.id === winner);
        
        quizApp.innerHTML = `
            <div class="quiz-result" style="text-align: center;">
                <h3 style="color:${charObj.color}">You are ${charObj.name}!</h3>
                <p>${charObj.trait} • ${charObj.role}</p>
                <p>${charObj.bio}</p>
                <button class="btn btn-primary quiz-restart-btn" style="margin-top:1rem;">Take It Again</button>
            </div>
        `;
        srAnnouncer.textContent = `Quiz completed. You are ${charObj.name}.`;

        qs('.quiz-restart-btn').addEventListener('click', () => {
            currentQ = 0;
            scores = { rachel: 0, monica: 0, phoebe: 0, joey: 0, chandler: 0, ross: 0 };
            renderQuiz();
        });
    }

    renderQuiz();


    // ----------------------------------------------------
    // 9. Connections Web (Simplified DOM nodes)
    // ----------------------------------------------------
    const connWeb = qs('#connections-web');
    const connList = qs('#connections-list');
    const resetConn = qs('#reset-connections');
    
    if (connWeb) {
        // Place character nodes in a circle
        const radius = 150;
        const centerX = 200; // rough estimation
        const centerY = 200;

        characters.forEach((char, index) => {
            const angle = (index / characters.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            const node = document.createElement('button');
            node.className = 'conn-node';
            node.textContent = char.name.split(' ')[0];
            node.style.position = 'absolute';
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            node.style.width = '60px';
            node.style.height = '60px';
            node.style.borderRadius = '50%';
            node.style.border = `2px solid ${char.color}`;
            node.style.backgroundColor = 'var(--color-surface)';
            node.style.color = 'var(--color-text)';
            node.style.cursor = 'pointer';
            node.style.transform = 'translate(-50%, -50%)';
            node.setAttribute('data-id', char.id);
            node.setAttribute('aria-label', `View connections for ${char.name}`);

            connWeb.appendChild(node);
        });

        connWeb.addEventListener('click', (e) => {
            if (e.target.classList.contains('conn-node')) {
                const charId = e.target.getAttribute('data-id');
                const char = characters.find(c => c.id === charId);
                qs('.panel-title').textContent = `${char.name}'s Connections`;
                qs('.panel-desc').textContent = `Showing known relationships for ${char.name}.`;
                
                // Dummy connections list
                connList.innerHTML = `
                    <li><strong>Friendship:</strong> Everyone</li>
                    <li><strong>Roommate:</strong> (Depends on season)</li>
                `;
                resetConn.style.display = 'inline-block';
                srAnnouncer.textContent = `Showing connections for ${char.name}.`;
            }
        });

        if (resetConn) {
            resetConn.addEventListener('click', () => {
                qs('.panel-title').textContent = `Select a character`;
                qs('.panel-desc').textContent = `Click on a node in the web to see how everyone is connected.`;
                connList.innerHTML = '';
                resetConn.style.display = 'none';
            });
        }
    }


    // ----------------------------------------------------
    // 10. Apartment Explorer
    // ----------------------------------------------------
    const tabs = qsa('.tab-btn');
    const panels = qsa('.tab-panel');
    const hotspotInfo = qs('#hotspot-info');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            panels.forEach(p => {
                p.classList.remove('active');
                p.hidden = true;
            });

            // Add active to clicked
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const targetId = tab.getAttribute('aria-controls');
            const targetPanel = qs(`#${targetId}`);
            targetPanel.classList.add('active');
            targetPanel.hidden = false;
            
            // Hide info panel on tab switch
            if (hotspotInfo) hotspotInfo.hidden = true;
        });
    });

    const hotspots = qsa('.hotspot');
    if (hotspots && hotspotInfo) {
        hotspots.forEach(spot => {
            const handler = () => {
                const item = spot.getAttribute('data-item');
                qs('#hotspot-title').textContent = item.toUpperCase();
                qs('#hotspot-desc').textContent = `You found the ${item}. A memorable object from the apartment.`;
                hotspotInfo.hidden = false;
                srAnnouncer.textContent = `Viewing details for ${item}.`;
            };
            spot.addEventListener('click', handler);
            spot.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handler();
                }
            });
        });

        const closeInfo = qs('.close-info');
        if (closeInfo) {
            closeInfo.addEventListener('click', () => {
                hotspotInfo.hidden = true;
            });
        }
    }


    // ----------------------------------------------------
    // 11. Episode Guide
    // ----------------------------------------------------
    const epGrid = qs('#episode-grid');
    const epCount = qs('#episode-count');
    const epSearch = qs('#episode-search');
    const seasonFilter = qs('#season-filter');
    const emptyState = qs('#episode-empty-state');
    const surpriseBtn = qs('#btn-surprise-episode');

    function renderEpisodes(epsToRender) {
        if (!epGrid) return;
        epGrid.innerHTML = '';
        
        if (epsToRender.length === 0) {
            emptyState.hidden = false;
        } else {
            emptyState.hidden = true;
            epsToRender.forEach(ep => {
                const card = document.createElement('div');
                card.className = 'episode-card';
                card.innerHTML = `
                    <p style="font-size: 0.8rem; color: var(--color-text-muted);">S${ep.season} E${ep.ep}</p>
                    <h4>${sanitizeHTML(ep.title)}</h4>
                    <p style="font-size: 0.9rem; margin: 0.5rem 0;">${sanitizeHTML(ep.desc)}</p>
                    <span style="display:inline-block; padding: 2px 6px; background:var(--color-primary); color:white; border-radius: 4px; font-size:0.7rem;">${ep.theme}</span>
                `;
                
                card.addEventListener('click', () => {
                    openModal(`
                        <h2>${ep.title}</h2>
                        <p><strong>Season ${ep.season}, Episode ${ep.ep}</strong></p>
                        <p>${ep.desc}</p>
                        <p><strong>Featured:</strong> ${ep.chars.join(', ')}</p>
                    `);
                });
                
                epGrid.appendChild(card);
            });
        }
        if (epCount) epCount.textContent = epsToRender.length;
    }

    function filterEpisodes() {
        if (!epGrid) return;
        const query = epSearch.value.toLowerCase();
        const season = seasonFilter.value;
        
        const filtered = episodes.filter(ep => {
            const matchesQuery = ep.title.toLowerCase().includes(query) || ep.desc.toLowerCase().includes(query);
            const matchesSeason = season === 'all' || ep.season.toString() === season;
            return matchesQuery && matchesSeason;
        });
        
        renderEpisodes(filtered);
    }

    if (epGrid) {
        renderEpisodes(episodes);
        if (epSearch) epSearch.addEventListener('input', filterEpisodes);
        if (seasonFilter) seasonFilter.addEventListener('change', filterEpisodes);
        if (surpriseBtn) surpriseBtn.addEventListener('click', () => {
            const randomEp = episodes[Math.floor(Math.random() * episodes.length)];
            renderEpisodes([randomEp]);
            epSearch.value = ''; // clear search
        });
    }

    // ----------------------------------------------------
    // 14. Quote Carousel
    // ----------------------------------------------------
    const carouselTrack = qs('#quote-track');
    const btnPrev = qs('#carousel-prev');
    const btnNext = qs('#carousel-next');
    const indicatorsWrap = qs('#carousel-indicators');
    let currentQuoteIndex = 0;
    let carouselInterval;

    function renderCarousel() {
        if (!carouselTrack) return;
        
        const q = quotes[currentQuoteIndex];
        carouselTrack.innerHTML = `
            <div class="carousel-item" style="text-align:center; padding: 2rem;">
                <h3 style="font-family: var(--font-display); font-size: 2rem; color: ${q.color}">"${q.text}"</h3>
                <p>— ${q.author}</p>
            </div>
        `;
        
        // Update indicators
        if (indicatorsWrap) {
            indicatorsWrap.innerHTML = quotes.map((_, i) => 
                `<span class="indicator ${i === currentQuoteIndex ? 'active' : ''}" style="display:inline-block; width:10px; height:10px; border-radius:50%; background: ${i === currentQuoteIndex ? 'var(--color-primary)' : 'rgba(0,0,0,0.2)'}; margin: 0 5px;"></span>`
            ).join('');
        }
    }

    function nextQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        renderCarousel();
    }

    function prevQuote() {
        currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
        renderCarousel();
    }

    if (carouselTrack) {
        renderCarousel();
        btnNext.addEventListener('click', () => { nextQuote(); resetCarouselInterval(); });
        btnPrev.addEventListener('click', () => { prevQuote(); resetCarouselInterval(); });
        
        function resetCarouselInterval() {
            clearInterval(carouselInterval);
            if (!prefersReducedMotion) {
                carouselInterval = setInterval(nextQuote, 5000);
            }
        }
        resetCarouselInterval();

        // Pause on hover
        const carouselContainer = qs('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => clearInterval(carouselInterval));
        carouselContainer.addEventListener('mouseleave', resetCarouselInterval);
    }


    // ----------------------------------------------------
    // 15. Leave a Note Form Validation
    // ----------------------------------------------------
    const noteForm = qs('#leave-note-form');
    const formStatus = qs('#form-status');

    if (noteForm) {
        noteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const name = qs('#note-name');
            const msg = qs('#note-message');
            
            qs('#name-error').textContent = '';
            qs('#message-error').textContent = '';
            
            if (!name.value.trim()) {
                qs('#name-error').textContent = 'Name is required.';
                isValid = false;
            }
            if (!msg.value.trim()) {
                qs('#message-error').textContent = 'Message is required.';
                isValid = false;
            }
            
            if (isValid) {
                // Simulate success
                noteForm.reset();
                formStatus.textContent = 'Your note has been pinned for this demonstration. No real message was sent.';
                formStatus.hidden = false;
                formStatus.style.color = 'var(--color-accent-green)';
                formStatus.style.marginTop = '1rem';
                srAnnouncer.textContent = formStatus.textContent;
                
                setTimeout(() => {
                    formStatus.hidden = true;
                }, 5000);
            } else {
                srAnnouncer.textContent = 'Form validation failed. Please correct the errors.';
            }
        });
    }

    // ----------------------------------------------------
    // 16. Global Modal
    // ----------------------------------------------------
    const globalModal = qs('#global-modal');
    const modalBody = qs('#modal-body');
    const modalCloseBtn = qs('.modal-close');
    let lastFocusedElement = null;

    function openModal(contentHTML) {
        if (!globalModal) return;
        lastFocusedElement = document.activeElement;
        
        modalBody.innerHTML = contentHTML;
        globalModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // lock scroll
        
        // Custom cursor z-index handling could be adjusted here if needed
        
        setTimeout(() => modalCloseBtn.focus(), 100);
    }

    function closeModal() {
        if (!globalModal) return;
        globalModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto'; // unlock scroll
        
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    if (globalModal) {
        modalCloseBtn.addEventListener('click', closeModal);
        globalModal.addEventListener('click', (e) => {
            if (e.target === globalModal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && globalModal.getAttribute('aria-hidden') === 'false') {
                closeModal();
            }
        });
    }

    // ----------------------------------------------------
    // 17. Initialization & Clean up
    // ----------------------------------------------------
    // Optional: Add scroll reveal observers for sections
    if ('IntersectionObserver' in window && !prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(sec => {
            sec.style.opacity = 0;
            sec.style.transform = 'translateY(20px)';
            sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(sec);
        });
    }
});
