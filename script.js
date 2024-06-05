const images = [
    'https://th.bing.com/th/id/OIP.K0HoI1Jfux7S0eOHHq6S1gHaJL?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.o4bSEf5EOPzPPv_MUFeSNAHaH_?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.lPHUDoljesNp5fhJiYbNzgHaFj?w=2732&h=2048&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.8uOEWZIw41yyK1tqFDwVbgAAAA?w=289&h=400&rs=1&pid=ImgDetMain',
    'https://koala.sh/api/image/v2-56fvy-retcd.jpg?width=1216&height=832&dream',
    'https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1523136002/vendor/5398/catalog/product/2/0/20180407021403_file_5ac8d22b93ebf.jpg'
    // Add more image paths as needed
];

let currentIndex = 0;

const currentImage = document.getElementById('current-image');

function showImage(index) {
    currentIndex = index;
    currentImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Initialize with the first image
showImage(currentIndex);
