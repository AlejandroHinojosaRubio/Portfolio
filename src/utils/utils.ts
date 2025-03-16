const images = import.meta.glob("/src/images/*.{jpeg,jpg,png,gif,webp}");

export const handleTopPageScroll = (e) => {
    if (window.location.pathname === '/') { 
      e.preventDefault(); 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState({}, document.title, '/');
    }
  };
  
export const getOptimizedImage = async (imagePath) => {
  if (!imagePath) return null;
  
  try {
    // Extract filename from path
    const fileName = imagePath.split("/").pop();
    const fullPath = `/src/images/${fileName}`;
    
    // Check if the image exists in imports map
    if (images[fullPath]) {
      // Dynamically import the image
      const importedImage = await images[fullPath]();
      return importedImage.default;
    }
    
    // If not found in our imports, return the original path
    return imagePath;
  } catch (error) {
    console.error(`Error loading image: ${imagePath}`, error);
    return imagePath; 
  }
}
