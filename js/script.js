const setupCarousel = (root) => {
    const track = root.querySelector('[data-carousel-track]');
    const controls = root.querySelector('[data-carousel-controls]');
    const dotsBox = root.querySelector('[data-carousel-dots]');
    const prevBtn = root.querySelector('[data-carousel-prev]');
    const nextBtn = root.querySelector('[data-carousel-next]');
    const items = [...root.querySelectorAll('[data-carousel-item]')];

    if (!track || !controls || !dotsBox || !prevBtn || !nextBtn || items.length === 0) {
        return null;
    }

    const label = controls.dataset.carouselLabel || 'Slide';
    let scrollTimer;

    const metrics = () => {
        const width = items[0].offsetWidth;
        const step = items.length > 1 ? items[1].offsetLeft - items[0].offsetLeft : width;
        return { step, gap: Math.max(0, step - width) };
    };

    const perPage = () => {
        const { step, gap } = metrics();
        if (step <= 0) return 1;
        return Math.max(1, Math.round((track.clientWidth + gap) / step));
    };

    const pageCount = () => Math.ceil(items.length / perPage());

    const pageWidth = () => perPage() * metrics().step;

    const currentPage = () => {
        const width = pageWidth();
        return width > 0 ? Math.round(track.scrollLeft / width) : 0;
    };

    const goTo = (page) => {
        const target = Math.min(Math.max(page, 0), pageCount() - 1);
        track.scrollTo({ left: target * pageWidth(), behavior: 'smooth' });
    };

    const refreshState = () => {
        const page = currentPage();
        const total = pageCount();

        [...dotsBox.children].forEach((dot, index) => {
            dot.classList.toggle('is-active', index === page);
        });

        prevBtn.disabled = page <= 0;
        nextBtn.disabled = page >= total - 1;
    };

    const buildDots = () => {
        const total = pageCount();
        controls.hidden = total < 2;
        dotsBox.replaceChildren();

        for (let i = 0; i < total; i += 1) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'carousel-dots__dot';
            dot.setAttribute('aria-label', `${label} ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsBox.append(dot);
        }

        refreshState();
    };

    prevBtn.addEventListener('click', () => goTo(currentPage() - 1));
    nextBtn.addEventListener('click', () => goTo(currentPage() + 1));

    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(refreshState, 100);
    });

    buildDots();

    return buildDots;
};

const carousels = [...document.querySelectorAll('[data-carousel]')]
    .map(setupCarousel)
    .filter(Boolean);

let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        carousels.forEach((rebuild) => rebuild());
    }, 150);
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
