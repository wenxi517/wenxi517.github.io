// 移动端菜单切换
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 平滑滚动
const smoothScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // 减去导航栏高度
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        // 关闭移动端菜单
        mobileMenu.classList.add('hidden');
    }
};

// 为导航链接添加平滑滚动
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScroll(targetId);
    });
});

// 滚动时的渐入动画
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

// 观察所有需要渐入的section
const fadeElements = document.querySelectorAll('.section-fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});

// 表单验证
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');
        
        let isValid = true;
        
        // 简单验证
        if (!nameInput.value.trim()) {
            alert('请输入姓名');
            isValid = false;
        } else if (!emailInput.value.trim()) {
            alert('请输入邮箱');
            isValid = false;
        } else if (!messageInput.value.trim()) {
            alert('请输入消息内容');
            isValid = false;
        }
        
        if (isValid) {
            alert('消息发送成功！');
            contactForm.reset();
        }
    });
}

// 页面加载完成后的动画
window.addEventListener('load', () => {
    // 延迟显示页面内容，确保动画效果
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});