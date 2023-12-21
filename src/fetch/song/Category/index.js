import { categoryUrl } from "../../url";
let listCategories = [];

export const fetchCategories = () => {
  fetch(categoryUrl, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
      }
    })
    .then((data) => {
      if (data) {
        listCategories = data.object;
        return data.object;
      }
    });
};

export { listCategories };
