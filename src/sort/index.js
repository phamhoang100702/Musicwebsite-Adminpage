export const sortDataByName = (data, sortOrder) => {
  const sortedData = [...data].sort((a, b) => {
    const nameA = `${a.name}`.toLowerCase();
    const nameB = `${b.name}`.toLowerCase();

    if (nameA < nameB) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (nameA > nameB) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return sortedData;
};
