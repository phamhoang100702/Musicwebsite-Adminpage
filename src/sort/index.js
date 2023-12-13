export const sortDataByName = (data, sortOrder) => {
  const sortedData = [...data].sort((a, b) => {
    const nameA = `${a.name.first} ${a.name.last}`.toLowerCase();
    const nameB = `${b.name.first} ${b.name.last}`.toLowerCase();

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
