const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) ||[];
const removeAll = document.querySelector('.remove-all');
const checkAll = document.querySelector('.check-all');
const uncheckAll = document.querySelector('.uncheck-all');

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false,
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>`;
  }).join('');
}

function toogleDone(e) {
  const el = e.target;
  if (!el.matches('input')) return; // Skip this unless it's an input
  const { index } = el.dataset;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function removeAllItems() {
  items.length = 0;
  localStorage.removeItem('items');
  populateList(items, itemsList);
}

function checkAllItems() {
  setCheckValue(true);
}
function uncheckAllItems() {
  setCheckValue(false);
}

function setCheckValue(isChecked) {
  items.forEach(item => item.done = isChecked);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toogleDone);
removeAll.addEventListener('click', removeAllItems);
checkAll.addEventListener('click', checkAllItems);
uncheckAll.addEventListener('click', uncheckAllItems);


populateList(items, itemsList);