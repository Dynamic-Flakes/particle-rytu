import { NextResponse } from "next/server";
import {
  uploadToIPFS,
  generateFingerprint,
  generateHash,
  allowedArtworkMimeTypes,
  allowedIPMimeTypes,
} from "./ipfsHelpers";
import { fileTypeFromBuffer } from "file-type";

export async function POST(req: Request) {
  const requestType = req.headers.get("X-Request-Type");

  if (requestType === "process-ip") {
    return await IPSILOHandler(req);
  } else if (requestType === "process-artwork") {
    return ArtworkHandler(req);
  } else {
    return NextResponse.json(
      { error: "Unsupported request type" },
      { status: 400 }
    );
  }
}

async function ArtworkHandler(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.startsWith("application/octet-stream")) {
      return NextResponse.json(
        { error: "Unsupported content type" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await req.arrayBuffer());
    const contentDisposition = req.headers.get("content-disposition");
    const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
    const filename = filenameMatch ? filenameMatch[1] : "uploaded_artwork";

    const fileType = await fileTypeFromBuffer(fileBuffer);
    const mimeType = fileType?.mime;
    if (!mimeType || !allowedArtworkMimeTypes.includes(mimeType)) {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }

    const [ipfsCID] = await Promise.all([uploadToIPFS(fileBuffer, filename)]);

    return NextResponse.json({ ipfsCID });
  } catch (error) {
    console.error("Error processing media file:", error);
    return NextResponse.json(
      { error: "Failed to process media file" },
      { status: 500 }
    );
  }
}

async function IPSILOHandler(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.startsWith("application/octet-stream")) {
      return NextResponse.json(
        { error: "Unsupported content type" },
        { status: 400 }
      );
    }

    const fileBuffer = Buffer.from(await req.arrayBuffer());
    const contentDisposition = req.headers.get("content-disposition");
    const filenameMatch = contentDisposition?.match(/filename="(.+)"/);
    const filename = filenameMatch ? filenameMatch[1] : "uploaded_ip";

    const fileType = await fileTypeFromBuffer(fileBuffer);
    const mimeType = fileType?.mime;

    if (
      !mimeType ||
      (!allowedIPMimeTypes.includes(mimeType) &&
        !allowedArtworkMimeTypes.includes(mimeType))
    ) {
      return NextResponse.json(
        { error: "Unsupported file type" },
        { status: 400 }
      );
    }

    const [ipfsCID, fingerprint, hash] = await Promise.all([
      uploadToIPFS(fileBuffer, filename),
      mimeType.includes("audio") || mimeType === "video/mp4"
        ? generateFingerprint(fileBuffer, mimeType)
        : null,
      generateHash(fileBuffer),
    ]);

    return NextResponse.json({ ipfsCID, fingerprint, hash });
  } catch (error) {
    console.error("Error processing media file:", error);
    return NextResponse.json(
      { error: "Failed to process media file" },
      { status: 500 }
    );
  }
}
