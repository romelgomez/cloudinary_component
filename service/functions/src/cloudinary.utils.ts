
import { config } from 'firebase-functions';

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: config().cloudinary.dev.cloud_name.toString(),
    api_key: config().cloudinary.dev.api_key.toString(),
    api_secret: config().cloudinary.dev.api_secret.toString(),
});

interface Fields {
    // File ID, is individual
    fileId: string;
    // Group ID, can be repeated
    setId: string;
}

/**
 *  Upload file
 */
const upload = (filePath: string, file: File, fields: Fields) => {
    return new Promise((resolve, reject) => {
        const callback = (error: any, result: any) => error ? reject(error) : resolve(result);

        cloudinary.uploader.upload(
            filePath,
            callback,
            {
                public_id: fields.fileId,
                upload_preset: config().cloudinary.dev.upload_preset.toString(),
                context: 'alt=' + file.name + '|caption=' + file.name + '|photo=' + file.name,
                tags: [fields.setId],
            }
        );
    });
}

/**
 * Delete uploaded resource by public IDs
 * @param idList  
 */
const deleteByIDs = (idList: string[]) => {
    return new Promise((resolve, reject) => {
        const callback = (error: any, result: any) => error ? reject(error) : resolve(result);

        cloudinary.api.delete_resources(idList, callback);
    });
}

/**
 * Delete all resources with the given tag name.
 * @param tag 
 */
const deleteByTag = (tag: string) => {
    return new Promise((resolve, reject) => {
        const callback = (error: any, result: any) => error ? reject(error) : resolve(result);

        cloudinary.api.delete_resources_by_tag(tag, callback);
    });
}

export {
    upload,
    deleteByIDs,
    deleteByTag,
};
