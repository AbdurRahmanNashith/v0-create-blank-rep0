const { google } = require("googleapis")
const fs = require("fs")
const path = require("path")

class GoogleDriveService {
  constructor() {
    this.auth = new google.auth.OAuth2(
      process.env.GOOGLE_DRIVE_CLIENT_ID,
      process.env.GOOGLE_DRIVE_CLIENT_SECRET,
      process.env.GOOGLE_DRIVE_REDIRECT_URI,
    )

    this.auth.setCredentials({
      refresh_token: process.env.GOOGLE_DRIVE_REFRESH_TOKEN,
    })

    this.drive = google.drive({ version: "v3", auth: this.auth })
  }

  async uploadFile(filePath, fileName) {
    try {
      const fileMetadata = {
        name: fileName,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID],
      }

      const media = {
        mimeType: "image/jpeg",
        body: fs.createReadStream(filePath),
      }

      const response = await this.drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: "id",
      })

      // Make file publicly accessible
      await this.drive.permissions.create({
        fileId: response.data.id,
        resource: {
          role: "reader",
          type: "anyone",
        },
      })

      // Return public URL
      const publicUrl = `https://drive.google.com/uc?id=${response.data.id}`

      // Clean up local file
      fs.unlinkSync(filePath)

      return publicUrl
    } catch (error) {
      console.error("Error uploading to Google Drive:", error)
      throw new Error("Failed to upload image to Google Drive")
    }
  }

  async deleteFile(fileId) {
    try {
      await this.drive.files.delete({
        fileId: fileId,
      })
      return true
    } catch (error) {
      console.error("Error deleting from Google Drive:", error)
      return false
    }
  }

  // Extract file ID from Google Drive URL
  extractFileId(url) {
    const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/)
    return match ? match[1] : null
  }
}

module.exports = new GoogleDriveService()
