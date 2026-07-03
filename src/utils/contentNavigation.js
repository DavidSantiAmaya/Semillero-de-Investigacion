import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const CONTENT_ID_PARAM = "id";

const normalizeId = (value) => String(value).trim().toLowerCase();

export const getContentIdFromLocation = (location) => {
  const params = new URLSearchParams(location.search);

  return (
    location.state?.contentId ??
    location.state?.id ??
    params.get(CONTENT_ID_PARAM)
  );
};

export const getContentIndexById = (items, contentId, fallbackIndex = 0) => {
  if (contentId === undefined || contentId === null || contentId === "") {
    return fallbackIndex;
  }

  const directIndex = items.findIndex(
    (item) => normalizeId(item.id) === normalizeId(contentId)
  );

  if (directIndex >= 0) return directIndex;

  const numericIndex = Number(contentId) - 1;

  if (
    Number.isInteger(numericIndex) &&
    numericIndex >= 0 &&
    numericIndex < items.length
  ) {
    return numericIndex;
  }

  return fallbackIndex;
};

export const useContentIndexFromNavigation = (items, fallbackIndex = 0) => {
  const location = useLocation();
  const contentId = getContentIdFromLocation(location);

  return useMemo(
    () => getContentIndexById(items, contentId, fallbackIndex),
    [items, contentId, fallbackIndex]
  );
};

export const navigateToContent = (
  navigate,
  { to, id, direction = 1, state = {} }
) => {
  const hasContentId = id !== undefined && id !== null && id !== "";

  navigate(
    {
      pathname: to,
      search: hasContentId
        ? `?${CONTENT_ID_PARAM}=${encodeURIComponent(id)}`
        : "",
    },
    {
      state: {
        ...state,
        direction,
        ...(hasContentId ? { contentId: id } : {}),
      },
    }
  );
};
