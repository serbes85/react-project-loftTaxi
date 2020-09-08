export const getAddressList = async () => {
  const response = await fetch(`https://loft-taxi.glitch.me/addressList`);
  return await response.json();
};

export const getRoute = async (address1, address2) => {
  // console.log("getRoute", address1, address2);
  const response = await fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
  );
  console.log("response", response);
  return response.json();
};
