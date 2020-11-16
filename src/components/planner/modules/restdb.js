const restDB = "https://frontend-22d4.restdb.io/rest/yakapp";
const apiKey = "5e9581a6436377171a0c234f";

/* export function getCards(callback) {
  fetch(restDB, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
} */

export async function getCards(callback) {
  let response = await fetch(restDB, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
    },
  });
  let data = await response.json();
  const sortedData = data.sort((a, b) => a.timeStamp - b.timeStamp);
  console.log(sortedData);
  callback(sortedData);
}
export async function postCard(callback, data, cards) {
  console.log("submitted db1", data);
  const postData = JSON.stringify(data);
  console.log(postData);
  let response = await fetch(restDB, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
    },
    body: postData,
  });
  data = await response.json();
  console.log(data);
  callback(cards.concat(data));
}

export async function deleteCard(_id) {
  await fetch(`${restDB}/${_id}`, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
  });
}

export async function moveCard(payload, _id) {
  /*   let newCards = cards.filter((c) => {
    if (c._id === _id) {
      c.list = list;
    }
    return c;
  });
  newCards = newCards.sort((a, b) => a.timeStamp - b.timeStamp); */

  const postData = JSON.stringify(payload);
  console.log(postData);
  await fetch(`${restDB}/${_id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  });

  /*   callback(newCards); */
}

export async function dragCard(payload, _id, list, cards, timeStamp) {
  /*   let newCards = cards.filter((c) => {
    if (c._id === _id) {
      c.list = list;
    }
    return c;
  });
  newCards = newCards.sort((a, b) => a.timeStamp - b.timeStamp); */

  const postData = JSON.stringify(payload);
  console.log(postData);
  await fetch(`${restDB}/${_id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  });
  /* 
  callback(newCards); */
}
async function editCard(
  callback,
  payload,
  _id,
  title,
  list,
  assignedTo,
  color,
  category,
  description,
  cards
) {
  console.log(
    payload,
    _id,
    title,
    list,
    assignedTo,
    color,
    category,
    description,
    cards
  );
  const newCards = cards.filter((c) => {
    if (c._id === _id) {
      c.title = title;
      c.category = category;
      c.list = list;
      c.color = color;
      c.description = description;
      c.assignedTo = assignedTo;
    }
    return c;
  });
  console.log(newCards);
  console.log(payload);

  const postData = JSON.stringify(payload);
  console.log(postData);
  await fetch(`${restDB}/${_id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
      "cache-control": "no-cache",
    },
    body: postData,
  });

  callback(newCards);
  console.log("editCard i restDB.js");
}

export const RestDb = {
  getCards,
  moveCard,
  postCard,
  deleteCard,
  editCard,
  dragCard,
};
