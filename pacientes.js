document.addEventListener('DOMContentLoaded', function() {
    const addPatientButton = document.getElementById('add-patient');
    const patientTable = document.getElementById('patient-table').getElementsByTagName('tbody')[0];

    // Load patients from localStorage
    loadPatients();

    // Add patient event listener
    addPatientButton.addEventListener('click', function() {
        const name = document.getElementById('patient-name').value;
        const cid = document.getElementById('patient-cid').value;
        const dob = document.getElementById('patient-dob').value;
        const responsibleName = document.getElementById('responsible-name').value;
        const relationshipLevel = document.getElementById('relationship-level').value;
        const familyComposition = document.getElementById('family-composition').value;
        const bpc = document.getElementById('bpc').value;
        const familyExpenses = document.getElementById('family-expenses').value;
        const familyIncome = document.getElementById('family-income').value;
        const bolsaFamilia = document.getElementById('bolsa-familia').value;
        const residenceType = document.getElementById('residence-type').value;
        const isEnrolled = document.getElementById('is-enrolled').value;
        const educationType = document.getElementById('education-type').value;
        const grade = document.getElementById('grade').value;
        const shift = document.getElementById('shift').value;
        const whyNotStudying = document.getElementById('why-not-studying').value;
        const typeOfCare = document.getElementById('type-of-care').value;
        const

        // Validate that required fields are filled
        if (name && cid && dob && responsibleName) {
            const patients = JSON.parse(localStorage.getItem('patients')) || [];

            // Add the new patient to the array
            patients.push({
                name,
                cid,
                dob,
                responsibleName,
                relationshipLevel,
                familyComposition,
                bpc,
                familyExpenses,
                familyIncome,
                bolsaFamilia,
                residenceType,
                isEnrolled,
                educationType,
                grade,
                shift,
                whyNotStudying,
                typeOfCare
            });

            // Save the updated patient list to localStorage
            localStorage.setItem('patients', JSON.stringify(patients));

            // Clear the form fields
            document.getElementById('patient-name').value = '';
            document.getElementById('patient-cid').value = '';
            document.getElementById('patient-dob').value = '';
            document.getElementById('responsible-name').value = '';
            document.getElementById('relationship-level').value = '';
            document.getElementById('family-composition').value = '';
            document.getElementById('bpc').value = '';
            document.getElementById('family-expenses').value = '';
            document.getElementById('family-income').value = '';
            document.getElementById('bolsa-familia').value = '';
            document.getElementById('residence-type').value = '';
            document.getElementById('is-enrolled').value = '';
            document.getElementById('education-type').value = '';
            document.getElementById('grade').value = '';
            document.getElementById('shift').value = '';
            document.getElementById('why-not-studying').value = '';
            document.getElementById('type-of-care').value = '';

            // Reload the patient list
            loadPatients();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });

    function loadPatients() {
        const patients = JSON.parse(localStorage.getItem('patients')) || [];
        patientTable.innerHTML = '';

        patients.forEach((patient, index) => {
            const row = patientTable.insertRow();
            row.insertCell(0).innerText = patient.name;
            row.insertCell(1).innerText = patient.cid;
            row.insertCell(2).innerText = patient.dob;
            row.insertCell(3).innerText = patient.responsibleName;

            const actionsCell = row.insertCell(4);
            const editButton = document.createElement('button');
            editButton.innerText = 'Editar';
            editButton.addEventListener('click', function() {
                editPatient(index);
            });
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Excluir';
            deleteButton.addEventListener('click', function() {
                deletePatient(index);
            });
            actionsCell.appendChild(deleteButton);
        });

        console.log('Pacientes carregados:', patients); // Debugging
    }

    function editPatient(index) {
        const patients = JSON.parse(localStorage.getItem('patients')) || [];
        const patient = patients[index];
        
        // Prompt for new values
        const name = prompt('Editar Nome:', patient.name);
        const cid = prompt('Editar CID:', patient.cid);
        const dob = prompt('Editar Data de Nascimento:', patient.dob);
        const responsibleName = prompt('Editar Nome do Responsável:', patient.responsibleName);

        if (name && cid && dob && responsibleName) {
            patients[index] = {
                ...patient, // Spread operator to keep other fields
                name,
                cid,
                dob,
                responsibleName
            };
            localStorage.setItem('patients', JSON.stringify(patients));
            loadPatients();
        }
    }

    function deletePatient(index) {
        if (confirm('Tem certeza de que deseja excluir este paciente?')) {
            const patients = JSON.parse(localStorage.getItem('patients')) || [];
            patients.splice(index, 1);
            localStorage.setItem('patients', JSON.stringify(patients));
            loadPatients();
        }
    }
});
