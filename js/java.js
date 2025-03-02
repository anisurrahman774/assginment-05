
document.addEventListener("DOMContentLoaded", function () {
    const completedButtons = document.querySelectorAll(".completed-btn");
    const taskCounter = document.querySelector("#taskCounter");
    const headerCounter = document.querySelector("#headerCounter");
    const activityContainer = document.querySelector("#activityContainer");
    const clearHistoryBtn = document.querySelector("#clearHistory");

    completedButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const taskName = this.parentElement.parentElement.querySelector("h2").innerText;
            const now = new Date();
            const timeString = now.toLocaleTimeString();

            localStorage.setItem(`task_${taskId}_lastClicked`, now.getTime());
            alert("Board updated successfully!");

            this.style.backgroundColor = "gray";
            this.innerText = "Completed";
            this.disabled = true;

            let currentTaskCount = parseInt(taskCounter.innerText);
            if (currentTaskCount > 0) {
                taskCounter.innerText = currentTaskCount - 1;
            }

            let currentHeaderCount = parseInt(headerCounter.innerText);
            headerCounter.innerText = currentHeaderCount + 1;

            const logEntry = document.createElement("p");
            logEntry.classList.add("text-sm", "text-gray-700", "bg-white", "p-2", "rounded-lg", "shadow-sm", "mt-2");
            logEntry.innerHTML = `✅ You have completed the task '<b>${taskName}</b>' at <b>${timeString}</b>`;
            activityContainer.prepend(logEntry);

            // **Check if all tasks are completed**
            const remainingTasks = document.querySelectorAll(".completed-btn:not([disabled])");
            if (remainingTasks.length === 0) {
                setTimeout(() => {
                    alert("🎉 Congrats!!! You have completed all the current tasks.");
                }, 500); 
            }
        });
    });

    clearHistoryBtn.addEventListener("click", function () {
        activityContainer.innerHTML = "";
    });
});


// background color change----------------------------

document.getElementById("changeBgDiv").addEventListener("click", function () {
    // র্যান্ডম রঙের জন্য HEX কালার জেনারেট করা
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // বডির ব্যাকগ্রাউন্ড কালার পরিবর্তন
    document.body.style.backgroundColor = randomColor;
});


// real time date -------------------------------------------------
function updateDate() {
    // বর্তমান তারিখ পাওয়ার জন্য JavaScript Date অবজেক্ট ব্যবহার
    const today = new Date();

    // দিন, মাস ও বছর বের করা
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options); // ইংরেজি ফরম্যাটে তারিখ

    // HTML-এ তারিখ সেট করা
    document.getElementById("currentDate").innerText = formattedDate;
}

// পেজ লোড হলে তারিখ আপডেট হবে
updateDate();






