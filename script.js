const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  });
});

const tabs = document.querySelectorAll('.category-tabs button');
const dishes = document.querySelectorAll('.dish-card');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    dishes.forEach((dish) => {
      dish.classList.toggle('hidden', filter !== 'all' && dish.dataset.category !== filter);
    });
  });
});
