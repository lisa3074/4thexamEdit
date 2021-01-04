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

export function editTaskValidation(id) {
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  if ($(".editContainer#" + id + " .title input").value === "") {
    $(".editContainer#" + id + " form > div:nth-child(1) > p").classList.remove("hide");
  } else {
    $(".editContainer#" + id + " form > div:nth-child(1) > p").classList.add("hide");
  }
  if ($('.editContainer .collaborators[data-chosen="false"]')) {
    $a(".editContainer form > div:nth-child(2) > p").forEach((p) => {
      p.classList.remove("hide");
    });
  } else {
    $a(".editContainer form > div:nth-child(2) > p").forEach((p) => {
      p.classList.add("hide");
    });
  }
}

export function hideError() {
  document.querySelectorAll(".error").forEach((error) => {
    error.classList.add("hide");
  });
}
