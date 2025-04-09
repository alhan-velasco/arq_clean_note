export const CreateReminder = (repo) => async (reminder) => {
  return await repo.addReminder(reminder);
};