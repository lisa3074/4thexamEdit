export function taskValidation() {
  const $ = document.querySelector.bind(document);

  if ($(".addForm .title input").value === "") {
    $(".addForm div.input-wrapper > p").classList.remove("hide");
  } else {
    $(".addForm div.input-wrapper > p").classList.add("hide");
  }
  if ($('.addForm .collaborators[data-chosen="false"]')) {
    $(".addForm > div:nth-child(3) > p").classList.remove("hide");
  } else {
    $(".addForm > div:nth-child(3) > p").classList.add("hide");
  }
  if ($(".addForm .list input").value === "") {
    $(".addForm > div:nth-child(5) > p").classList.remove("hide");
  } else {
    $(".addForm > div:nth-child(5) > p").classList.add("hide");
  }
  if ($(".addForm .category input").value === "") {
    $(".addForm > div:nth-child(7) > p").classList.remove("hide");
  } else {
    $(".addForm > div:nth-child(7) > p").classList.add("hide");
  }
}

export function editTaskValidation() {
  const $ = document.querySelector.bind(document);

  if ($(".editContainer .title input").value === "") {
    console.log("title");
    $(".editContainer form > div:nth-child(1) > p").classList.remove("hide");
  } else {
    $(".editContainer form > div:nth-child(1) > p").classList.add("hide");
  }
  if ($('.editContainer .collaborators[data-chosen="false"]')) {
    $(".editContainer form > div:nth-child(2) > p").classList.remove("hide");
  } else {
    $(".editContainer form > div:nth-child(2) > p").classList.add("hide");
  }
  if ($(".editContainer .list input").value === "") {
    $(".editContainer form > div:nth-child(4) > p").classList.remove("hide");
  } else {
    $(".editContainer form > div:nth-child(4) > p").classList.add("hide");
  }
  if ($(".editContainer .category input").value === "") {
    $(".editContainer form > div:nth-child(6) > p").classList.remove("hide");
  } else {
    $(".editContainer form > div:nth-child(6) > p").classList.add("hide");
  }
}

export function hideError() {
  document.querySelectorAll(".error").forEach((error) => {
    error.classList.add("hide");
  });
}
