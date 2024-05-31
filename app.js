const form = document.forms.task;
const taskList = document.getElementById("list");

//GET /tasks
form.addEventListener("submit", async () => {
  event.preventDefault();

  const formData = new FormData(form);
  const HOST = "http://localhost";

  const screenList = await fetch(`${HOST}/tasks`, {
    method: "GET",
  });
  const ListData = await screenList.json();

  taskList.innerHTML = "";

  ListData.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = `${task.title}`;
    list.append(li);
  });
});

//Get /task/{taskid}
/*form.addEventListener("submit", async () => {
  event.preventDefault();

  const formData = new FormData(form);
  const HOST = "http://localhost";

  const deepScreenList = await fetch(`${HOST}/task/taskid`, {
    method: "GET",
  });

  const ListDataId = await deepScreenList.json();

  taskList.innerHTML = "";
  ListDataId.forEach((task) => {
    const li = document.createElement("li");
    li.innerText = `${task.id}`;
    list.append(li);
  });
});*/
//POST /tasks
form.addEventListener("submit", async () => {
  event.preventDefault();

  const formData = new FormData(form);
  const HOST = "http://localhost";

  const addList = await fetch(`${HOST}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
});

//PUT /tasks
form.addEventListener("submit", async () => {
  event.preventDefault();

  const formData = new FormData(form);
  const HOST = "http://localhost";

  const updateList = await fetch(`${HOST}/tasks`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slide");
  const images = slider.querySelectorAll("img");
  let currentIndex = 0;

  slider.querySelector(".last").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateSlider();
  });

  slider.querySelector(".next").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex > images.length - 1) {
      currentIndex = 0;
    }
    updateSlider();
  });

  function updateSlider() {
    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
});
