document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.textContent = '隐藏评论';
            } else {
                content.style.display = 'none';
                this.textContent = '显示评论';
            }
        });
    });
});
