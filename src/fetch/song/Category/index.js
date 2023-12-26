import { categoryUrl } from "../../url";

export const fetchCategories = async() => {
  const response  = await fetch(categoryUrl, {
    method: "GET",
  });
  if(response.ok){
    console.log(response);
    const result = await response.json();
    return result.object;
  }
  else {
    return [];
  }
};


