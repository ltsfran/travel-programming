export function getItems(state) {
  return state.disease.data.data;
};

export function getError(state) {
  return state.disease.error;
}