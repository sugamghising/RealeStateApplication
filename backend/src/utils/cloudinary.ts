import cloudinary from "../config/cloudinary";

export const uploadToCloudinary = async (buffer: Buffer): Promise<string> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder: "games",
                resource_type: "image"
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result!.secure_url);
            }
        ).end(buffer);
    });
}

// export const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
//     try {
//         // Extract public_id from URL
//         const parts = imageUrl.split('/');
//         const filename = parts[parts.length - 1];
//         const publicId = `realstate/avatars/${filename.split('.')[0]}`;

//         await cloudinary.uploader.destroy(publicId);
//     } catch (error) {
//         console.error('Error deleting image from Cloudinary:', error);
//     }
// };