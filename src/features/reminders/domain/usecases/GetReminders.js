export const GetReminders = (repo) => async () => {
  return await repo.getAllReminders();
};