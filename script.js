// Application State
const AppState = {
    currentSection: 'home',
    selectedSubject: 'All',
    selectedYear: 'All',
    theme: localStorage.getItem('theme') || 'dark'
};

// Data
const subjects = [
    { name: "Physics", papers: 8, color: "#3b82f6" },
    { name: "Chemistry", papers: 8, color: "#10b981" },
    { name: "Mathematics", papers: 8, color: "#8b5cf6" },
    { name: "Computer Science", papers: 8, color: "#f97316" },
    { name: "English", papers: 8, color: "#ec4899" },
    { name: "Biology", papers: 8, color: "#14b8a6" }
];

const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const specimenPapers = [
    {
        subject: "Physics",
        title: "ISC Physics Specimen Paper 2025",
        duration: "3 hours",
        marks: "70 marks",
        difficulty: "High",
        topics: ["Mechanics", "Thermodynamics", "Waves", "Electricity"],
        featured: true
    },
    {
        subject: "Chemistry",
        title: "ISC Chemistry Specimen Paper 2025",
        duration: "3 hours",
        marks: "70 marks",
        difficulty: "Medium",
        topics: ["Organic Chemistry", "Physical Chemistry", "Inorganic Chemistry"],
        featured: true
    },
    {
        subject: "Mathematics",
        title: "ISC Mathematics Specimen Paper 2025",
        duration: "3 hours",
        marks: "100 marks",
        difficulty: "High",
        topics: ["Calculus", "Algebra", "Geometry", "Statistics"],
        featured: false
    },
    {
        subject: "Computer Science",
        title: "ISC Computer Science Specimen Paper 2025",
        duration: "3 hours",
        marks: "70 marks",
        difficulty: "Medium",
        topics: ["Programming", "Data Structures", "Database", "Networking"],
        featured: false
    },
    {
        subject: "English",
        title: "ISC English Specimen Paper 2025",
        duration: "3 hours",
        marks: "100 marks",
        difficulty: "Medium",
        topics: ["Literature", "Language", "Composition", "Comprehension"],
        featured: false
    },
    {
        subject: "Biology",
        title: "ISC Biology Specimen Paper 2025",
        duration: "3 hours",
        marks: "70 marks",
        difficulty: "Medium",
        topics: ["Botany", "Zoology", "Ecology", "Genetics"],
        featured: false
    }
];

const quizCategories = [
    {
        subject: "Physics",
        title: "Physics Mastery",
        icon: "zap",
        color: "#3b82f6",
        completed: 12,
        total: 20,
        progress: 60
    },
    {
        subject: "Chemistry",
        title: "Chemistry Explorer",
        icon: "flask-conical",
        color: "#10b981",
        completed: 8,
        total: 15,
        progress: 53
    },
    {
        subject: "Mathematics",
        title: "Math Genius",
        icon: "calculator",
        color: "#8b5cf6",
        completed: 15,
        total: 18,
        progress: 83
    },
    {
        subject: "Computer Science",
        title: "Code Master",
        icon: "code",
        color: "#f97316",
        completed: 10,
        total: 16,
        progress: 63
    },
    {
        subject: "English",
        title: "Literature Scholar",
        icon: "book-open",
        color: "#ec4899",
        completed: 7,
        total: 12,
        progress: 58
    },
    {
        subject: "Biology",
        title: "Life Sciences Pro",
        icon: "dna",
        color: "#14b8a6",
        completed: 9,
        total: 14,
        progress: 64
    }
];

// Utility Functions
function createElement(tag, className = '', innerHTML = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

function getDifficultyClass(difficulty) {
    switch (difficulty) {
        case "High":
            return "difficulty-high";
        case "Medium":
            return "difficulty-medium";
        case "Easy":
            return "difficulty-easy";
        default:
            return "";
    }
}

// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', AppState.theme);
    updateThemeIcon();
}

function toggleTheme() {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', AppState.theme);
    localStorage.setItem('theme', AppState.theme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.setAttribute('data-lucide', AppState.theme === 'dark' ? 'sun' : 'moon');
        lucide.createIcons();
    }
}

// Navigation Management
function initializeNavigation() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    // Study cards navigation
    document.querySelectorAll('.study-card').forEach(card => {
        card.addEventListener('click', () => {
            const section = card.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

function navigateToSection(sectionName) {
    // Update state
    AppState.currentSection = sectionName;

    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === sectionName);
    });

    // Show/hide sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.toggle('active', section.id === sectionName);
    });

    // Initialize section-specific content
    if (sectionName === 'previous-years') {
        renderSubjectsGrid();
    } else if (sectionName === 'specimen-papers') {
        renderSpecimenPapers();
    } else if (sectionName === 'quiz') {
        renderQuizCategories();
    }

    // Add fade-in animation
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        activeSection.classList.add('fade-in');
        setTimeout(() => activeSection.classList.remove('fade-in'), 300);
    }
}

// Previous Years Section
function initializePreviousYears() {
    // Subject filters
    document.querySelectorAll('[data-subject]').forEach(filter => {
        filter.addEventListener('click', () => {
            AppState.selectedSubject = filter.getAttribute('data-subject');
            updateSubjectFilters();
            renderSubjectsGrid();
        });
    });

    // Year filters
    document.querySelectorAll('[data-year]').forEach(filter => {
        filter.addEventListener('click', () => {
            AppState.selectedYear = filter.getAttribute('data-year');
            updateYearFilters();
            renderSubjectsGrid();
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderSubjectsGrid();
        });
    }
}

function updateSubjectFilters() {
    document.querySelectorAll('[data-subject]').forEach(filter => {
        filter.classList.toggle('active', 
            filter.getAttribute('data-subject') === AppState.selectedSubject);
    });
}

function updateYearFilters() {
    document.querySelectorAll('[data-year]').forEach(filter => {
        filter.classList.toggle('active', 
            filter.getAttribute('data-year') === AppState.selectedYear);
    });
}

function renderSubjectsGrid() {
    const grid = document.getElementById('subjectsGrid');
    if (!grid) return;

    const searchQuery = document.getElementById('searchInput')?.value.toLowerCase() || '';
    
    let filteredSubjects = subjects;
    
    if (AppState.selectedSubject !== 'All') {
        filteredSubjects = subjects.filter(subject => 
            subject.name === AppState.selectedSubject);
    }

    if (searchQuery) {
        filteredSubjects = filteredSubjects.filter(subject =>
            subject.name.toLowerCase().includes(searchQuery));
    }

    grid.innerHTML = '';

    filteredSubjects.forEach(subject => {
        const subjectCard = createElement('div', 'subject-card');
        
        subjectCard.innerHTML = `
            <div class="subject-header">
                <div class="subject-info">
                    <div class="subject-color" style="background-color: ${subject.color}"></div>
                    <h3 class="subject-name">${subject.name}</h3>
                </div>
                <span class="subject-count">${subject.papers} papers</span>
            </div>
            
            <div class="paper-list">
                ${years.slice(0, 3).map(year => `
                    <div class="paper-item">
                        <div class="paper-info">
                            <i data-lucide="book-open" class="paper-icon"></i>
                            <span class="paper-name">${subject.name} ${year}</span>
                        </div>
                        <div class="paper-actions">
                            <button class="action-btn" title="View">
                                <i data-lucide="eye"></i>
                            </button>
                            <button class="action-btn" title="Download">
                                <i data-lucide="download"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <button class="view-all-btn">View All ${subject.name} Papers</button>
        `;

        grid.appendChild(subjectCard);
    });

    lucide.createIcons();
}

// Specimen Papers Section
function renderSpecimenPapers() {
    renderFeaturedPapers();
    renderAllPapers();
}

function renderFeaturedPapers() {
    const grid = document.getElementById('featuredPapers');
    if (!grid) return;

    const featuredPapers = specimenPapers.filter(paper => paper.featured);
    grid.innerHTML = '';

    featuredPapers.forEach(paper => {
        const paperCard = createElement('div', 'featured-paper');
        
        paperCard.innerHTML = `
            <div class="paper-header">
                <div>
                    <div class="paper-badge">${paper.subject}</div>
                    <h4 class="paper-title">${paper.title}</h4>
                </div>
                <div style="display: flex; gap: 0.25rem;">
                    <button class="action-btn" title="View">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="action-btn" title="Download">
                        <i data-lucide="download"></i>
                    </button>
                </div>
            </div>
            
            <div class="paper-meta">
                <div class="meta-item">
                    <i data-lucide="clock"></i>
                    <span>${paper.duration}</span>
                </div>
                <div class="meta-item">
                    <i data-lucide="file-text"></i>
                    <span>${paper.marks}</span>
                </div>
            </div>
            
            <div class="paper-details">
                <div class="difficulty-badge ${getDifficultyClass(paper.difficulty)}">
                    ${paper.difficulty} Level
                </div>
                <div class="topic-tags">
                    ${paper.topics.map(topic => `
                        <span class="topic-tag">${topic}</span>
                    `).join('')}
                </div>
            </div>
            
            <button class="start-practice-btn">Start Practice</button>
        `;

        grid.appendChild(paperCard);
    });

    lucide.createIcons();
}

function renderAllPapers() {
    const grid = document.getElementById('allPapers');
    if (!grid) return;

    grid.innerHTML = '';

    specimenPapers.forEach(paper => {
        const paperCard = createElement('div', 'paper-card');
        
        paperCard.innerHTML = `
            <div class="paper-card-header">
                <div class="subject-badge">${paper.subject}</div>
                <div class="difficulty-badge ${getDifficultyClass(paper.difficulty)}">
                    ${paper.difficulty}
                </div>
            </div>
            
            <div class="paper-card-content">
                <h4 class="paper-card-title">${paper.title}</h4>
                <div class="paper-card-meta">
                    <span>${paper.duration}</span>
                    <span>${paper.marks}</span>
                </div>
            </div>
            
            <div class="paper-card-actions">
                <button class="practice-btn">Practice</button>
                <div style="display: flex; gap: 0.25rem;">
                    <button class="action-btn" title="View">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="action-btn" title="Download">
                        <i data-lucide="download"></i>
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(paperCard);
    });

    lucide.createIcons();
}

// Quiz Section
function renderQuizCategories() {
    const grid = document.getElementById('quizCategories');
    if (!grid) return;

    grid.innerHTML = '';

    quizCategories.forEach(category => {
        const categoryCard = createElement('div', 'quiz-category');
        
        categoryCard.innerHTML = `
            <div class="category-header">
                <div class="category-icon" style="background-color: ${category.color}20; color: ${category.color};">
                    <i data-lucide="${category.icon}"></i>
                </div>
                <h3 class="category-title">${category.title}</h3>
            </div>
            
            <div class="category-progress">
                <div class="progress-bar" style="width: ${category.progress}%"></div>
            </div>
            
            <div class="category-stats">
                <span>${category.completed}/${category.total} completed</span>
                <span>${category.progress}% progress</span>
            </div>
            
            <button class="start-quiz-btn" style="background-color: ${category.color}; border-color: ${category.color};">
                Start Quiz
            </button>
        `;

        grid.appendChild(categoryCard);
    });

    lucide.createIcons();
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });
    }
}

// Initialize Application
function initializeApp() {
    // Initialize theme
    initializeTheme();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize previous years section
    initializePreviousYears();
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set initial state
    navigateToSection('home');
    
    console.log('ISC Study Hub initialized successfully!');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);