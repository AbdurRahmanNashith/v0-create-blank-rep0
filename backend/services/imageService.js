const googleDriveService = require("./googleDriveService")
const path = require("path")

class ImageService {
  async uploadProductImage(file) {
    try {
      if (!file) {
        throw new Error("No file provided")
      }

      // Generate a unique filename for Google Drive
      const timestamp = Date.now()
      const extension = path.extname(file.originalname)
      const fileName = `product-${timestamp}${extension}`

      // Upload to Google Drive
      const publicUrl = await googleDriveService.uploadFile(file.path, fileName)

      return {
        success: true,
        url: publicUrl,
        fileName: fileName,
      }
    } catch (error) {
      console.error("Image upload error:", error)
      throw new Error(`Image upload failed: ${error.message}`)
    }
  }

  async deleteProductImage(imageUrl) {
    try {
      const fileId = googleDriveService.extractFileId(imageUrl)
      if (fileId) {
        await googleDriveService.deleteFile(fileId)
        return true
      }
      return false
    } catch (error) {
      console.error("Image deletion error:", error)
      return false
    }
  }
}

module.exports = new ImageService()
