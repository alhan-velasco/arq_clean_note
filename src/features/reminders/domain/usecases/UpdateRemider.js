export const UpdateReminder = (repo) => async (id, reminder) => {
  return await repo.updateReminder(id, reminder);
};