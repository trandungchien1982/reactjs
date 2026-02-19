function AuthButton({ isLoggedIn }) {
  return (
    <div>
      <p>Current value of isLoggedIn: {isLoggedIn}</p>
      {isLoggedIn ? (
        <button>Đăng xuất</button>
      ) : (
        <button>Đăng nhập</button>
      )}
    </div>
  );
}

export default AuthButton;