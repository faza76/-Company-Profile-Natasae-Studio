// src/utils/getImagePaths.js
import imageManifest from "@/data/data.json"
export function getImagePaths(imgDir, imgFiles) {
    try {
        // console.log(imgFiles);
        // console.log(imgDir);
        const baseURL = `/${imgDir}/`;
        return imgFiles.map((fileName) => ({
          name: fileName,
          path: `${baseURL}${fileName}`
        }));
      } catch (error) {
        console.error(`Error loading images from directory "${imgDir}":`, error);
        return [];
      }
}

export function getManifest() {
  return imageManifest;
}
