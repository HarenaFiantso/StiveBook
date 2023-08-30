import { StorageProvider } from "./storage";

const get = () => {
  const storageSelf = StorageProvider.getItem("self");
  return storageSelf ? storageSelf : ({
    username: "Not Connected",
    photo: "/user.jpg"
  })
}

export const SelfService = {
  get
}