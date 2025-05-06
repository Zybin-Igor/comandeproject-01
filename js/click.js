"use strict";
function showImage(src) {
	document.getElementById('mainImage').src = src;
}


const mainImage = document.getElementById('mainImage');
  const thumbnails = document.querySelectorAll('.thumbnails img');
  let currentSrc = mainImage.src;

  function showImage(src) {
    if (mainImage.src.includes(src)) {
      // Спрятать изображение
      mainImage.classList.add('hidden');
      currentSrc = "";

      // Удалить активность у всех миниатюр
      thumbnails.forEach(img => img.classList.remove('active'));
    } else {
      // Показать изображение с плавностью
      mainImage.classList.remove('hidden');
      mainImage.src = src;
      currentSrc = src;

      // Обновить активную миниатюру
      thumbnails.forEach(img => {
        img.classList.toggle('active', img.src.includes(src));
      });
    }
};

const cards = document.querySelectorAll('.reviews-list-strate');

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	});
}, {
	threshold: 0.1
});

cards.forEach(card => {
	observer.observe(card);
});
