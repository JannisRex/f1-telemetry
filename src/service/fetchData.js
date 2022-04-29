export const fetch = () => {
  return fetch('').then(async (res) => res.json())
}
