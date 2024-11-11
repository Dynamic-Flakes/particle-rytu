export function loadNFTImages(): Array<{ default: string }> {
    const images: Array<{ default: string }> = [];
  
    for (let i = 1; i <= 32; i++) {
      // Import images based on the pattern
      const image = require(`@/assets/images/nft/nft-${i}.jpg`);
      images.push(image);
    }
  
    return images;
  }
  
  function getRandomInteger(): number {
    return Math.floor(Math.random() * 32) + 1;
  }
  
  export function getRandomNFTImage(): string {
    const images = loadNFTImages();
    const randomIndex = getRandomInteger() - 1;
    return images[randomIndex].default;
  }