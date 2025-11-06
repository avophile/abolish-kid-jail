/**
 * Letter Generator
 * Creates the manifestation determination demand letter based on form data
 */

/**
 * Main function to generate the complete letter
 */
function generateLetter(data) {
    const sections = {
        header: generateHeader(data),
        recipient: generateRecipient(data),
        subject: generateSubject(data),
        greeting: generateGreeting(data),
        facts: generateFactsSection(data),
        legal: generateLegalRequirement(),
        demand: generateDemand(),
        records: generateRecordsRequest(),
        timeline: generateTimeline(data),
        rights: generateRightsPreservation(),
        closing: generateClosing(data)
    };

    return sections;
}

/**
 * Generate letter header (parent information)
 */
function generateHeader(data) {
    return {
        parentName: data.parentName,
        parentAddress: data.parentAddress,
        parentPhone: data.parentPhone,
        parentEmail: data.parentEmail,
        date: data.currentDate
    };
}

/**
 * Generate recipient information
 */
function generateRecipient(data) {
    const recipients = [];

    // Principal
    recipients.push({
        name: data.principalName,
        title: 'Principal',
        organization: data.schoolName,
        address: data.schoolAddress
    });

    // Special Education Director (if provided)
    if (data.spedDirectorName && data.spedDirectorName !== '') {
        recipients.push({
            name: data.spedDirectorName,
            title: 'Special Education Director',
            organization: data.districtName,
            address: data.schoolAddress // Could be different, but using school address for now
        });
    }

    return recipients;
}

/**
 * Generate subject line
 */
function generateSubject(data) {
    return `${data.studentName} - Demand for Manifestation Determination Review`;
}

/**
 * Generate greeting
 */
function generateGreeting(data) {
    const names = [data.principalName];
    if (data.spedDirectorName && data.spedDirectorName !== '') {
        names.push(data.spedDirectorName);
    }

    if (names.length === 1) {
        return `Dear ${names[0]}:`;
    } else {
        return `Dear ${names.join(' and ')}:`;
    }
}

/**
 * Generate statement of facts section
 */
function generateFactsSection(data) {
    let factsText = `I am writing to formally demand that the school district conduct a manifestation determination review for my child, ${data.studentName}, who is a student with a disability receiving special education services under an Individualized Education Program (IEP)`;

    // Add IEP date if provided
    if (data.iepDate) {
        const iepDateFormatted = formatInputDate(data.iepDate);
        factsText += ` dated ${iepDateFormatted}`;
    }

    factsText += '.\n\n';

    // Statement of Facts heading
    factsText += 'Statement of Facts:\n\n';

    // Format the incident date
    const incidentDateFormatted = formatInputDate(data.incidentDate);

    // Describe the disciplinary action
    let actionText = `On ${incidentDateFormatted}, my child was ${data.disciplineType}`;

    if (data.disciplineType === 'suspended' || data.disciplineType === 'removed from school') {
        actionText += ` for ${data.suspensionDays} days`;
    }

    actionText += ` for the following: ${data.incidentDescription}`;

    factsText += actionText + '\n\n';

    // Explain why this constitutes a change of placement
    if (data.suspensionType === 'cumulative') {
        factsText += `My child has now been suspended for a total of ${data.suspensionDays} days during this school year, which exceeds the 10-day threshold requiring a manifestation determination review. `;
    }

    factsText += 'This disciplinary action constitutes a change in placement as defined under the Individuals with Disabilities Education Act (IDEA), 34 CFR § 300.530.';

    // Add IEP implementation concerns if provided
    if (data.iepConcerns && data.iepConcerns !== '') {
        factsText += '\n\nAdditionally, I have concerns regarding the implementation of my child\'s IEP: ' + data.iepConcerns;
    }

    return factsText;
}

/**
 * Generate legal requirement section
 */
function generateLegalRequirement() {
    return 'Legal Requirement:\n\n' +
           'Under IDEA regulations at 34 CFR § 300.530(e), when a student with an IEP is subject to a disciplinary removal that constitutes a change in placement, the school district must conduct a manifestation determination review. This review must occur within 10 school days of the decision to take disciplinary action.';
}

/**
 * Generate demand section
 */
function generateDemand() {
    return 'Demand:\n\n' +
           'I hereby demand that the school district immediately schedule a manifestation determination meeting to:\n\n' +
           '1. Determine whether my child\'s conduct was caused by, or had a direct and substantial relationship to, my child\'s disability; and\n\n' +
           '2. Determine whether my child\'s conduct was the direct result of the school district\'s failure to implement my child\'s IEP.';
}

/**
 * Generate required information/records request section
 */
function generateRecordsRequest() {
    return 'Required Information:\n\n' +
           'In preparation for this meeting, I request that the school district provide me with copies of all relevant educational records, including but not limited to:\n\n' +
           '- All disciplinary records for the current school year\n' +
           '- My child\'s current IEP and all evaluations\n' +
           '- All teacher observations and incident reports related to the disciplinary action\n' +
           '- Documentation of IEP implementation\n' +
           '- Any behavior intervention plan (BIP) or functional behavioral assessment (FBA)\n' +
           '- All communications regarding this incident';
}

/**
 * Generate timeline section
 */
function generateTimeline(data) {
    const days = data.responseTimeline || '5';

    return 'Timeline:\n\n' +
           `IDEA requires that this manifestation determination meeting occur within 10 school days of the decision to change my child's placement. I expect to receive notice of the scheduled meeting date, time, and location within ${days} business days.`;
}

/**
 * Generate rights preservation section
 */
function generateRightsPreservation() {
    return 'Preservation of Rights:\n\n' +
           'This letter serves to preserve all of my rights and my child\'s rights under IDEA, Section 504 of the Rehabilitation Act, the Americans with Disabilities Act, and any applicable state laws. My child should remain in their current educational placement (stay-put) pending the outcome of the manifestation determination review, unless we agree otherwise in writing.';
}

/**
 * Generate closing section
 */
function generateClosing(data) {
    return `I can be reached at ${data.parentPhone} or ${data.parentEmail} to schedule this meeting. I expect prompt action on this matter.\n\n` +
           'Sincerely,\n\n\n' +
           data.parentName;
}

/**
 * Helper function to format date strings from form inputs
 */
function formatInputDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Generate plain text version of letter (for preview)
 */
function generatePlainTextLetter(data) {
    const letter = generateLetter(data);

    let text = '';

    // Header
    text += `${letter.header.parentName}\n`;
    text += `${letter.header.parentAddress}\n`;
    text += `${letter.header.parentPhone}\n`;
    text += `${letter.header.parentEmail}\n\n`;
    text += `${letter.header.date}\n\n`;

    // Recipients
    letter.recipient.forEach(recipient => {
        text += `${recipient.name}\n`;
        text += `${recipient.title}, ${recipient.organization}\n`;
        text += `${recipient.address}\n\n`;
    });

    // Subject
    text += `RE: ${letter.subject}\n\n`;

    // Greeting
    text += `${letter.greeting}\n\n`;

    // Body sections
    text += `${letter.facts}\n\n`;
    text += `${letter.legal}\n\n`;
    text += `${letter.demand}\n\n`;
    text += `${letter.records}\n\n`;
    text += `${letter.timeline}\n\n`;
    text += `${letter.rights}\n\n`;
    text += `${letter.closing}\n`;

    return text;
}
