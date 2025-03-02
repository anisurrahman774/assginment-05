document.addEventListener("DOMContentLoaded", function () {
    let completedButtons = document.querySelectorAll(".completed-btn");
    let taskCountElement = document.getElementById("task-count");
    let headerCountElement = document.getElementById("header-count");
    let activityLog = document.getElementById("activity-log");
    let clearHistoryBtn = document.getElementById("clear-history");
    let completedToday = new Set();

    completedButtons.forEach(button => {
        button.addEventListener("click", function () {
            let taskId = this.dataset.taskId;
            
            if (completedToday.has(taskId)) {
                alert("আজকে এই টাস্ক আগেই কমপ্লিট করা হয়েছে!");
                return;
            }
            
            completedToday.add(taskId);
            alert("টাস্ক সফলভাবে সম্পন্ন হয়েছে!");
            
            this.style.backgroundColor = "#4CAF50"; // Green color
            this.disabled = true;

            // Task Count কমানো
            let currentTaskCount = parseInt(taskCountElement.textContent);
            taskCountElement.textContent = currentTaskCount - 1;

            // Header Count বাড়ানো
            let currentHeaderCount = parseInt(headerCountElement.textContent);
            headerCountElement.textContent = currentHeaderCount + 1;

            // সময় লগ করা
            let currentTime = new Date().toLocaleTimeString();
            let taskName = this.closest(".task-item").querySelector("h2").textContent;
            let logEntry = document.createElement("p");
            logEntry.innerHTML = `<strong>${taskName}</strong> - ${currentTime}`;
            activityLog.appendChild(logEntry);
        });
    });

    clearHistoryBtn.addEventListener("click", function () {
        activityLog.innerHTML = "";
        completedToday.clear();
    });
});
