import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage: multer.StorageEngine = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, cb: DestinationCallback) => {
    cb(null, './src/files');
  },

  filename: (_, file: Express.Multer.File, cb: FileNameCallback) => {
    cb(null, `${Date.now()}_${file.fieldname}.${file.mimetype.split('/')[1]}`);
  }
});

const fileFilter: any = (_req: Request, file: Express.Multer.File, callback: FileFilterCallback) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export default multer({
  storage: storage,
  fileFilter: fileFilter
});
