const grid = document.querySelector('#menuGrid');
const filters = document.querySelector('#menuFilters');
const categories = ['All', ...new Set(window.PAMANA_MENU.map(item => item.category))];
let activeCategory = 'All';

function imageFor(item){
  return item.image || './assets/images/menu/menu-placeholder.jpg';
}

function renderFilters(){
  filters.innerHTML = categories.map(category => `
    <button class="filter-btn ${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');
}

function renderMenu(){
  const items = window.PAMANA_MENU.filter(item => item.available !== false && (activeCategory === 'All' || item.category === activeCategory));
  grid.innerHTML = items.map(item => `
    <article class="menu-card">
      <img src="${imageFor(item)}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80'" />
      <div class="menu-card-body">
        <div class="menu-top">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.description}</p>
        ${item.featured ? '<span class="badge">Pam Favorite</span>' : ''}
      </div>
    </article>
  `).join('');
}

filters.addEventListener('click', event => {
  const button = event.target.closest('button[data-category]');
  if(!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderMenu();
});

document.querySelector('.nav-toggle').addEventListener('click', event => {
  const nav = document.querySelector('.nav-links');
  const isOpen = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(isOpen));
});

renderFilters();
renderMenu();
