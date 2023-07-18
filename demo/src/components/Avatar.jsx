export function Avatar({ user}) {
  return <div className="card">
    <img src = {user.imageUrl} />
  </div>;
}
