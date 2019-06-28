export function getItems(state) {
  return state.medicine.data.data;
};

export function getError(state) {
  return state.medicine.error;
}