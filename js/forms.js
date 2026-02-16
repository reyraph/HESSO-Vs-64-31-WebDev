// Fonctions de validation pour le formulaire d'inscription

// Valide un email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Valide le mot de passe (minimum 8 caractères, au moins une majuscule, un chiffre et un caractère spécial)
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Valide que le nom n'est pas vide et contient au moins 2 caractères
function validateNom(nom) {
    return nom.trim().length >= 2;
}

// Affiche un message d'erreur pour un champ
function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    let errorDiv = document.getElementById(`error-${fieldName}`);

    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = `error-${fieldName}`;
        errorDiv.className = 'error-message';
        field.parentElement.appendChild(errorDiv);
    }

    errorDiv.textContent = message;
    field.classList.add('error');
}

// Supprime le message d'erreur pour un champ
function clearError(fieldName) {
    const field = document.getElementById(fieldName);
    const errorDiv = document.getElementById(`error-${fieldName}`);

    if (errorDiv) {
        errorDiv.remove();
    }

    field.classList.remove('error');
}

// Valide le formulaire entier
function validateForm(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    let isValid = true;

    // Validation du nom
    if (!validateNom(nom)) {
        showError('nom', 'Le nom doit contenir au moins 2 caractères');
        isValid = false;
    } else {
        clearError('nom');
    }

    // Validation de l'email
    if (!email) {
        showError('email', 'L\'email est obligatoire');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Veuillez entrer une adresse email valide');
        isValid = false;
    } else {
        clearError('email');
    }

    // Validation du mot de passe
    if (!password) {
        showError('password', 'Le mot de passe est obligatoire');
        isValid = false;
    } else if (!validatePassword(password)) {
        showError('password', 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial (@$!%*?&)');
        isValid = false;
    } else {
        clearError('password');
    }

    // Validation de la confirmation du mot de passe
    if (!confirmPassword) {
        showError('confirm_password', 'Veuillez confirmer votre mot de passe');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirm_password', 'Les mots de passe ne correspondent pas');
        isValid = false;
    } else {
        clearError('confirm_password');
    }

    // Si le formulaire est valide, afficher un message de succès
    if (isValid) {
        alert('Formulaire valide! Données prêtes à être envoyées.');
        // Vous pouvez décommenter la ligne suivante pour soumettre réellement le formulaire
        // event.target.submit();
    }

    return false;
}

// Initialise le formulaire quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});
