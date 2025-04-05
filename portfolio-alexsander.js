// JavaScript para funcionalidade de navegação suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
                
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
                
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});
        
// Destacar seção atual no menu de navegação
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
            
    let current = '';
            
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
                
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
            
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
        
// Melhoria da experiência mobile para tooltips
if ('ontouchstart' in window) {
    document.querySelectorAll('.skill-tag').forEach(skill => {
        skill.addEventListener('click', function() {
            const wasActive = this.classList.contains('active');
            
            // Fechar todos os tooltips abertos
            document.querySelectorAll('.skill-tag').forEach(s => {
                s.classList.remove('active');
            });
            
            // Se não estava ativo, ativar este
            if (!wasActive) {
                this.classList.add('active');
            }
        });
    });
            
    // Fechar tooltips ao clicar em qualquer lugar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.skill-tag')) {
            document.querySelectorAll('.skill-tag').forEach(s => {
                s.classList.remove('active');
            });
        }
    });
}