/**
 * Form Handler
 * Manages form submission, validation, and data collection
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('letterForm');

    if (!form) {
        console.error('Form not found');
        return;
    }

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = collectFormData();

        // Validate required fields
        if (!validateFormData(formData)) {
            showMessage('Please fill out all required fields', 'error');
            return;
        }

        // Generate the letter
        try {
            const letterText = generateLetter(formData);

            // Generate and download PDF
            generatePDF(letterText, formData);

            showMessage('Your letter has been generated successfully! Check your downloads.', 'success');
        } catch (error) {
            console.error('Error generating letter:', error);
            showMessage('There was an error generating your letter. Please try again.', 'error');
        }
    });

    // Form reset handler
    form.addEventListener('reset', function() {
        // Clear any messages
        clearMessages();
    });
});

/**
 * Collect all form data into an object
 */
function collectFormData() {
    const form = document.getElementById('letterForm');
    const formData = new FormData(form);
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value.trim();
    }

    // Add current date
    data.currentDate = formatDate(new Date());

    return data;
}

/**
 * Validate that required fields are filled
 */
function validateFormData(data) {
    const requiredFields = [
        'parentName',
        'parentAddress',
        'parentPhone',
        'parentEmail',
        'studentName',
        'schoolName',
        'schoolAddress',
        'principalName',
        'districtName',
        'incidentDate',
        'disciplineType',
        'suspensionDays',
        'incidentDescription'
    ];

    for (let field of requiredFields) {
        if (!data[field] || data[field] === '') {
            console.warn(`Required field missing: ${field}`);
            return false;
        }
    }

    return true;
}

/**
 * Format date to readable string
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Format date from input (YYYY-MM-DD) to readable format
 */
function formatInputDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    return formatDate(date);
}

/**
 * Show success or error message
 */
function showMessage(message, type) {
    // Remove any existing messages
    clearMessages();

    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'error' ? 'error-message' : 'success-message';
    messageDiv.textContent = message;
    messageDiv.setAttribute('role', 'alert');

    const form = document.getElementById('letterForm');
    form.parentNode.insertBefore(messageDiv, form);

    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-remove success messages after 10 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.remove();
        }, 10000);
    }
}

/**
 * Clear all messages
 */
function clearMessages() {
    const messages = document.querySelectorAll('.success-message, .error-message');
    messages.forEach(msg => msg.remove());
}

/**
 * Get value or empty string
 */
function getValueOrEmpty(value) {
    return value && value !== '' ? value : '';
}

/**
 * Auto-save form data to localStorage (optional feature)
 */
function saveFormData(data) {
    try {
        localStorage.setItem('manifestationFormData', JSON.stringify(data));
    } catch (e) {
        console.warn('Could not save form data to localStorage:', e);
    }
}

/**
 * Load saved form data from localStorage (optional feature)
 */
function loadSavedFormData() {
    try {
        const saved = localStorage.getItem('manifestationFormData');
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) {
        console.warn('Could not load saved form data:', e);
    }
    return null;
}

/**
 * Clear saved form data
 */
function clearSavedFormData() {
    try {
        localStorage.removeItem('manifestationFormData');
    } catch (e) {
        console.warn('Could not clear saved form data:', e);
    }
}
