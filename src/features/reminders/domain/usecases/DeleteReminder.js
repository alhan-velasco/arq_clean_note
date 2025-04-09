export const DeleteReminder = (repo) => async (id) => {
  await repo.removeReminder(id);
};