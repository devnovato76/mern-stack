import { v2 as cloudinary } from "cloudinary";

cloudinary.config(process.env.CLOUDINARY_URL);

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
