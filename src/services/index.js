import { axiosDefaultInstance } from 'settings/axios';

export const getAllFilters = async () => {
  return axiosDefaultInstance.get('/filters');
};

export const getFiltersByDashboardId = async dashboardId => {
  return axiosDefaultInstance.get(`/filters/${dashboardId}`);
};

export const setFilters = async (
  filterId,
  sectionId,
  subSectionId,
  selected
) => {
  return axiosDefaultInstance.post('/filters/set', {
    filterId,
    sectionId,
    subSectionId,
    selected
  });
};

export const setFiltersWithOptions = async (
  filterId,
  sectionId,
  subSectionId,
  selected,
  userValue
) => {
  return axiosDefaultInstance.post('/filters/set-option', {
    filterId,
    sectionId,
    subSectionId,
    selected,
    userValue
  });
};
