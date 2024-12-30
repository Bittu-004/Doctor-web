document.addEventListener('DOMContentLoaded',()=>{
    const recommendBtn = document.getElementById('recommend-btn');

    const resultDiv = document.getElementById('result');

    const medicineRecommendations = {
        headache:"Paracetamol or Ibuprofen",
        fever:"Paracetamol or Aspirin",
        cough:"Cough Syrup (like Dextromethorphan)",
        cold:"Antihistamines(like Cetirizine)",
        stomachache:"Antacids or Buscopan",
    };
    recommendBtn.addEventListener('click',()=>{
        const problem = document.getElementById('problem').value.toLowerCase().trim();

        if(problem ===""){
            resultDiv.textContent = "Please enter a health problem.";
            resultDiv.style.color = "red";
            return;
        }

        const recommendation = medicineRecommendations[problem];

        if(recommendation){
            resultDiv.textContent = `Recommended Medicine: ${recommendation}`;
            resultDiv.style.color = "yellow";
        }else{
            resultDiv.textContent = "Sorry,no recommendation available for this problem.",
            resultDiv.style.color = "orange";
        }
    });
});