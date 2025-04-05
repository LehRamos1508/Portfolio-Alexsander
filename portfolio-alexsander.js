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
        
if ('ontouchstart' in window) {
    document.querySelectorAll('.skill-tag').forEach(skill => {
        skill.addEventListener('click', function() {
            const wasActive = this.classList.contains('active');
            
            document.querySelectorAll('.skill-tag').forEach(s => {
                s.classList.remove('active');
            });
            
            if (!wasActive) {
                this.classList.add('active');
            }
        });
    });
            
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.skill-tag')) {
            document.querySelectorAll('.skill-tag').forEach(s => {
                s.classList.remove('active');
            });
        }
    });
}
