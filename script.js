function calculateGrade() {
    var subject = document.getElementById("subject").value;
    var total = Number(document.getElementById("total").value);
    var obtained = Number(document.getElementById("obtained").value);
    var result = document.getElementById("result");

    if (total <= 0 || obtained < 0 || obtained > total) {
        result.innerHTML = "Please enter valid marks.";
        result.style.backgroundColor = "#4a2020";
        return;
    }

    var percentage = (obtained / total) * 100;
    var grade;

    if (percentage >= 85) {
        grade = "A";
    } else if (percentage >= 71) {
        grade = "B";
    } else if (percentage >= 61) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    if (subject.trim() === "") {
        subject = "Your Subject";
    }

    result.style.backgroundColor = "#123238";
    result.innerHTML = subject + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}
