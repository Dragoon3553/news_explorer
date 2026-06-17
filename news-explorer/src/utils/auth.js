// export const authorize = (email, password) => {
//   // Pretend we did a fetch request that gave us back a token
//   return new Promise((resolve, reject) => {
//     resolve({ token: "a fake token" });
//   });
// };

// export const checkToken = (token) => {
//   // Pretend we did a fetch request that gave us back a user
//   return new Promise((resolve, reject) => {
//     resolve({
//       data: {
//         username: "fake user",
//         email: "fake@example.com",
//         _id: "fake-id",
//       },
//     });
//   });
// };

const USERS_KEY = "mock_users";
const TOKEN_KEY = "mock_token";

const getUsers = () => {
  const data = localStorage.getItem(USERS_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("Corrupted users data in localStorage:", err);
    return [];
  }
};
const setUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const register = ({ email, password, username }) => {
  const users = getUsers();

  const newUser = {
    _id: crypto.randomUUID(),
    email,
    password,
    username,
  };

  users.push(newUser);
  setUsers(users);

  return Promise.resolve({
    data: {
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
    },
  });
};

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      reject(new Error("Invalid email or password"));
      return;
    }

    const token = crypto.randomUUID();
    localStorage.setItem(
      TOKEN_KEY,
      JSON.stringify({
        token,
        userId: user._id,
      }),
    );

    resolve({ token });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    if (!token) {
      reject(new Error("No token"));
      return;
    }

    const session = JSON.parse(localStorage.getItem(TOKEN_KEY));

    if (!session || session.token !== token) {
      reject(new Error("Invalid Token"));
    }

    const users = getUsers();

    const user = users.find((u) => u._id === session.userId);

    if (!user) {
      reject(new Error("User not found"));
      return;
    }

    resolve({
      data: {
        _id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  });
};
