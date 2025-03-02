
// ==================================================================================

document.addEventListener("DOMContentLoaded", function () {
    const completedButtons = document.querySelectorAll(".completed-btn");
    const taskCounter = document.querySelector("#taskCounter"); // Task Assigned (06)
    const headerCounter = document.querySelector("#headerCounter"); // Header Counter (23)
    const activityContainer = document.querySelector("#activityContainer"); // Activity Log Container
    const clearHistoryBtn = document.querySelector("#clearHistory"); // Clear History Button

    completedButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const taskName = this.parentElement.parentElement.querySelector("h2").innerText; // Task Name
            const now = new Date();
            const timeString = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

            // Store in LocalStorage
            localStorage.setItem(`task_${taskId}_lastClicked`, now.getTime());
            alert("Board updated successfully!");

            // Change button color
            this.style.backgroundColor = "gray";
            this.innerText = "Completed";
            this.disabled = true;

            // Update Task Assigned count
            let currentTaskCount = parseInt(taskCounter.innerText);
            if (currentTaskCount > 0) {
                taskCounter.innerText = currentTaskCount - 1;
            }

            // Update Header Counter count
            let currentHeaderCount = parseInt(headerCounter.innerText);
            headerCounter.innerText = currentHeaderCount + 1;

            // ✅ Add Activity Log Entry
            const logEntry = document.createElement("p");
            logEntry.classList.add("text-sm", "text-gray-700", "bg-white", "p-2", "rounded-lg", "shadow-sm", "mt-2");
            logEntry.innerHTML = `✅ You have completed the task '<b>${taskName}</b>' at <b>${timeString}</b>`;
            activityContainer.prepend(logEntry);
        });
    });

    // ✅ Clear History Button Functionality
    clearHistoryBtn.addEventListener("click", function () {
        activityContainer.innerHTML = ""; // Clear the log
    });
});




