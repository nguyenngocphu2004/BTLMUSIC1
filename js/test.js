document.querySelector('.toggle-dark-mode').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Lưu trạng thái chế độ nền tối vào localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
});

// Kiểm tra trạng thái chế độ nền tối đã được lưu trong localStorage
document.addEventListener('DOMContentLoaded', function() {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (darkModeEnabled === 'true') {
        document.body.classList.add('dark-mode');
    }
});