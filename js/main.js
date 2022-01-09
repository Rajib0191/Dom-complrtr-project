const milestonesData = data.data;
// console.log(milestonesData);


// load course milestones data
function loadMilestones() {
    const milestones = document.querySelector('.milestones');
    console.log(milestones);
    milestones.innerHTML = `${milestonesData.map(function (milestone) {
        return `<div class="milestone border-b" id="${milestone._id}">
                    <div class="flex">
                        <div class="checkbox"><input type="checkbox" onclick = "markMileStone(this,${milestone._id})"/></div>
                        <div onclick="openMilestone(this,${milestone._id})">
                            <p>
                                ${milestone.name}
                                <span><i class="fas fa-chevron-down"></i></span>
                            </p>
                        </div>
                    </div>
                    <div class="hidden_panel">
                        ${milestone.modules.map(function (module) {
            return `<div class="module border-b">
                                        <p>${module.name}</p>
                                    </div>`;
        }).join("")}
                                    </div>
                    </div>`;
    }).join("")}`;
}

loadMilestones();

function openMilestone(milestoneElement, id) {
    const currentPanel = milestoneElement.parentNode.nextElementSibling;
    // const currentPanel1 = milestoneElement.parentNode;
    // console.log(currentPanel1);
    const showPanel = document.querySelector(".show");
    if (showPanel && !currentPanel.classList.contains("show")) {
        showPanel.classList.remove("show");
    }
    currentPanel.classList.toggle("show");

    //Do Bold When Click 
    const active = document.querySelector(".active")
    if (active && !milestoneElement.classList.contains("active")) {
        active.classList.remove("active");
    }
    milestoneElement.classList.toggle("active");

    //When Click Milestone It will Show it's banner pic 
    showMileStone(id);
}

function showMileStone(id) {
    const milestoneImage = document.querySelector(".milestoneImage");
    const title = document.querySelector(".title");
    const description = document.querySelector(".details");

    milestoneImage.src = milestonesData[id].image;
    title.innerText = milestonesData[id].name;
    description.innerText = milestonesData[id].description;
    milestoneImage.style.opacity = '0';
    // console.log(id)
}

const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function () {
    this.style.opacity = '1';
}

function markMileStone(checkbox, id) {
    const milestonesList = document.querySelector(".milestones");
    const doneList = document.querySelector(".doneList");
    const item = document.getElementById(id);
    if (checkbox.checked) {
        milestonesList.removeChild(item);
        doneList.appendChild(item);
    } else {
        doneList.removeChild(item);
        milestonesList.appendChild(item);
    }
}