function calculate() {
  
    let n = document.getElementById('numSubjects').value;
    let totalMarks = 0;
    
    
    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i));
        
        
        if (!isNaN(marks)) {
            totalMarks += marks;
        }
    }

   
    let average = totalMarks / n;

    
    let grade = "";
    if (average >= 90) { grade = "A+"; }
    else if (average >= 75) { grade = "A"; }
    else if (average >= 60) { grade = "B"; }
    else if (average >= 50) { grade = "C"; }
    else { grade = "F"; }

    
    let passFail = (average >= 50) ? "PASS" : "FAIL";

    
    document.getElementById('resultOutput').innerHTML = `
        <div>Total Marks: ${totalMarks}</div>
        <div>Average Marks: ${average.toFixed(2)}</div>
        <div>Grade: ${grade}</div>
        <div>Result: ${passFail}</div>
    `;
}