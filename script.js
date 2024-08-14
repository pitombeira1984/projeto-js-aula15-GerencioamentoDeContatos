document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    addContact(name, phone, email);

    document.getElementById('contact-form').reset();
});

function addContact(name, phone, email) {
    const contactList = document.getElementById('contacts-list');

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${name} - ${phone} - ${email}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => editContact(li, name, phone, email));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => deleteContact(li));

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    contactList.appendChild(li);
}

function editContact(li, name, phone, email) {
    const newName = prompt('Editar nome:', name);
    const newPhone = prompt('Editar telefone:', phone);
    const newEmail = prompt('Editar email:', email);

    if (newName && newPhone && newEmail) {
        li.querySelector('span').textContent = `${newName} - ${newPhone}`;
    }
}

function deleteContact(li) {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
        li.remove();
    }
}
