const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') return undefined;
  const normalized = contactType.toLowerCase();
  const allowed = ['work', 'home', 'personal'];
  return allowed.includes(normalized) ? normalized : undefined;
};

const parseBoolean = (value) => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
  }
  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;
  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    ...(parsedContactType !== undefined && { contactType: parsedContactType }),
    ...(parsedIsFavourite !== undefined && { isFavourite: parsedIsFavourite }),
  };
};
