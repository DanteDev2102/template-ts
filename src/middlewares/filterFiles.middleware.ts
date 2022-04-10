import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    request: Request,
    file: Express.Multer.File,
    callback: DestinationCallback
  ): void => {},

  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: FileNameCallback
  ): void => {}
});

const fileFilter = (
  request: Request,
  file: Express.Multer.File,
  callback: FileFilterCallback
): void => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export default multer({
  storage,
  fileFilter
});
