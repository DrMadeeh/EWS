function calculateGCS() {
    const eyeResponse = parseInt(document.getElementById('eye-response').value);
    const verbalResponse = parseInt(document.getElementById('verbal-response').value);
    const motorResponse = parseInt(document.getElementById('motor-response').value);

    const gcsScore = eyeResponse + verbalResponse + motorResponse;

    document.getElementById('gcs-result').innerText = `GCS Score: ${gcsScore}`;
}

function calculateEWS() {
    const heartRate = parseInt(document.getElementById('heart-rate').value);
    const bloodPressure = parseInt(document.getElementById('blood-pressure').value);
    const respiratoryRate = parseInt(document.getElementById('respiratory-rate').value);
    const oxygenSaturation = parseInt(document.getElementById('oxygen-saturation').value);
    const temperature = parseFloat(document.getElementById('temperature').value);
    const consciousness = document.getElementById('consciousness').value;

    let ewsScore = 0;

    // Example scoring logic
    if (heartRate < 50 || heartRate > 100) ewsScore++;
    if (bloodPressure < 90 || bloodPressure > 180) ewsScore++;
    if (respiratoryRate < 12 || respiratoryRate > 20) ewsScore++;
    if (oxygenSaturation < 95) ewsScore++;
    if (temperature < 36 || temperature > 38) ewsScore++;
    if (consciousness !== 'alert') ewsScore++;

    let ewsColor = 'green';
    if (ewsScore > 2) ewsColor = 'yellow';
    if (ewsScore > 4) ewsColor = 'red';

    document.getElementById('ews-result').innerHTML = `EWS Score: <span style="color:${ewsColor}">${ewsScore}</span>`;
}
