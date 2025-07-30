document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    
    // Fade-in animation when the card loads
    const fadeInCard = () => {
        card.style.opacity = '0';
        requestAnimationFrame(() => {
            card.style.transition = 'opacity 1s ease-in-out';
            card.style.opacity = '1';
        });
    };
    
    // 3D hover effect
    const handle3DHover = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = -(x - centerX) / 20;
        
        requestAnimationFrame(() => {
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    };
    
    // Reset card position
    const resetCardPosition = () => {
        requestAnimationFrame(() => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    };

    // Initialize animations
    fadeInCard();
    
    // Event listeners
    card.addEventListener('mousemove', handle3DHover);
    card.addEventListener('mouseleave', resetCardPosition);
});
