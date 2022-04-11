import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';
import { extname } from 'path';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (
    _req: Request,
    _file: Express.Multer.File,
    cb: DestinationCallback
  ): void => {
    cb(null, '/files');
  },

  filename: (
    req: any,
    file: Express.Multer.File,
    cb: FileNameCallback
  ): void => {
    cb(null, `${req.user.id}_${Date.now()}_${extname(file.originalname)}`);
  }
});

const fileFilter: any = (
  _req: Request,
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
