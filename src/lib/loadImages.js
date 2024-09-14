export function loadImages(folderName) {
    try {
      const context = require.context(`../../public/portfolioImage/${folderName}`, false, /\.(jpg|jpeg|png)$/);
      return context.keys().reduce((images, item) => {
        images[item.replace('./', '')] = context(item);
        return images;
      }, {});
    } catch (error) {
      console.error(`Error loading images from folder "${folderName}":`, error);
      return {};
    }
}