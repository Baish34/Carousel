const galleryContainer = document.querySelector('.gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items) {
        this.carouselContainer = container;
        this.carouselArray = [...items];
        this.initEvents();
    }

    updateGallery() {
        this.carouselArray.forEach((el) => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction === 'previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else if (direction === 'next') {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    initEvents() {
        // Handle keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') {
                this.setCurrentState('previous');
            } else if (e.key === 'ArrowDown') {
                this.setCurrentState('next');
            }
        });

        // Handle mouse scroll events
        this.carouselContainer.addEventListener('wheel', (e) => {
            if (e.deltaY < 0) {
                this.setCurrentState('previous');
            } else if (e.deltaY > 0) {
                this.setCurrentState('next');
            }
        });
    }
}

// Initialize the carousel
const exampleCarousel = new Carousel(galleryContainer, galleryItems);
