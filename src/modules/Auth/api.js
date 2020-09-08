export const auth = async (userName, userPassword) => {
  const response = await fetch(
    `https://loft-taxi.glitch.me/auth?username=${userName}&password=${userPassword}`
  );
  return await response.json();
};
