const randomImage = document.getElementById('randomImage');
const getRandomImageBtn = document.getElementById('getRandomImage');

// Função para carregar uma imagem aleatória
function loadRandomImage() {
    const randomImageId = Math.floor(Math.random() * 1000); // Gere um número aleatório como ID da imagem
    randomImage.src = `https://picsum.photos/id/${randomImageId}/500/500`; // Use a API do Lorem Picsum para obter a imagem
}

// Carregar uma imagem aleatória quando o botão for clicado
getRandomImageBtn.addEventListener('click', loadRandomImage);

// Carregar uma imagem aleatória inicial ao carregar a página
loadRandomImage();
