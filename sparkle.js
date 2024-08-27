document.addEventListener('mousemove', function(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);

    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;

    
    const size = Math.random() * 10 + 5; 
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    
    const colors = ['#b8eabb', '#a0d468', '#8cc152', '#7cb342'];
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * 20;
    sparkle.style.transform = `translate(${radius * Math.cos(angle)}px, ${radius * Math.sin(angle)}px)`;

    setTimeout(() => {
        sparkle.remove();
    }, 1000); 
});