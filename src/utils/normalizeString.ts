const normalizeString = (value: string) => {
  const normValue = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return normValue;
};

export default normalizeString;
