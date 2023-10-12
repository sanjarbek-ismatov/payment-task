import List from "../List";
function ProfileList() {
  return (
    <ul
      role="list"
      className="max-w-sm divide-y divide-gray-200 dark:divide-gray-700"
    >
      <List />
      <List />
    </ul>
  );
}
export default ProfileList;
