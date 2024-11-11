import pinataSDK from "@pinata/sdk";
import { Readable } from "stream";
import crypto from "crypto";
import { exec } from "child_process";
import fs from "fs/promises";
import path from "path";
import { fileTypeFromBuffer } from "file-type";

const pinata = new pinataSDK(
  process.env.NEXT_PUBLIC_PINATA_API_KEY!,
  process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY!
);

export const allowedIPMimeTypes = [
  // Audio
  "audio/mp3",
  "audio/wav",
  "audio/mpeg",

  // Video
  "video/mp4",

  // Documents
  "application/pdf", // PDF
  "application/msword", // Word (.doc)
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // Word (.docx)
  "application/vnd.ms-excel", // Excel (.xls)
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // Excel (.xlsx)
  "application/vnd.ms-powerpoint", // PowerPoint (.ppt)
  "application/vnd.openxmlformats-officedocument.presentationml.presentation", // PowerPoint (.pptx)
  "text/plain", // Plain text
  "application/rtf", // Rich Text Format (.rtf)
  "application/vnd.oasis.opendocument.text", // OpenDocument Text (.odt)
  "application/vnd.oasis.opendocument.spreadsheet", // OpenDocument Spreadsheet (.ods)
  "application/vnd.oasis.opendocument.presentation", // OpenDocument Presentation (.odp)
  "application/x-iwork-pages-sffpages", // Apple Pages (.pages)
  "application/x-iwork-numbers-sffnumbers", // Apple Numbers (.numbers)
  "application/x-iwork-keynote-sffkey", // Apple Keynote (.key)

  // Code files
  "text/x-python", // Python (.py)
  "text/x-java-source", // Java (.java)
  "text/javascript", // JavaScript (.js)
  "application/json", // JSON (.json)
  "application/x-httpd-php", // PHP (.php)
  "application/x-ruby", // Ruby (.rb)
  "application/xml", // XML (.xml)
  "text/x-csrc", // C (.c)
  "text/x-c++src", // C++ (.cpp)
  "text/markdown", // Markdown (.md)
  "application/x-shellscript", // Shell script (.sh)
  "text/x-go", // Go (.go)
  "application/x-sql", // SQL (.sql)
  "application/x-perl", // Perl (.pl)
  "text/x-swift", // Swift (.swift)
  "text/x-yaml", // YAML (.yml, .yaml)
  "text/x-kotlin", // Kotlin (.kt)
  "application/x-typescript", // TypeScript (.ts)
];

export const allowedArtworkMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

function bufferToStream(buffer: Buffer): Readable {
  const readable = new Readable();
  readable.push(buffer);
  readable.push(null);
  return readable;
}

export async function uploadToIPFS(
  fileBuffer: Buffer,
  filename: string
): Promise<string> {
  const stream = bufferToStream(fileBuffer);
  const options = { pinataMetadata: { name: filename } };
  const result = await pinata.pinFileToIPFS(stream, options);
  return result.IpfsHash;
}

// Generate fingerprint for audio and video (by extracting audio)
export async function generateFingerprint(
  fileBuffer: Buffer,
  mimeType: string
): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const extension = mimeType.includes("audio") ? "wav" : "mp4";
      const tempFilePath = path.join(
        process.cwd(),
        `./temp-${Date.now()}.${extension}`
      );
      await fs.writeFile(tempFilePath, fileBuffer);

      const finalPath = tempFilePath;

      exec(`fpcalc -raw -length 120 "${finalPath}"`, async (error, stdout) => {
        if (await fs.stat(finalPath).catch(() => false)) {
          await fs.unlink(finalPath);
        }

        if (error) return reject(error);

        const fingerprint = stdout.split("FINGERPRINT=")[1]?.trim();
        if (!fingerprint)
          return reject(new Error("No fingerprint found in output"));
        resolve(fingerprint);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export async function generateHash(fileBuffer: Buffer): Promise<string> {
  const hash = crypto.createHash("sha256").update(fileBuffer).digest("hex");
  return hash;
}
