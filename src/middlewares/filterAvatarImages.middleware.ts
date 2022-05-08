import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb: DestinationCallback): void => {
    cb(null, 'src/files');
  },
  filename: (_, file: Express.Multer.File, cb: FileNameCallback) => {
    cb(null, `${Date.now()}_${file.fieldname}.${file.mimetype.split('/')[1]}`);
  }
});

const fileFilter = (_req: Request, { mimetype }: Express.Multer.File, callback: FileFilterCallback): void => {
  if (mimetype === 'image/png' || mimetype === 'image/jpg' || mimetype === 'image/jpeg') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export const filterAvatarImages = multer({
  storage,
  fileFilter
});
