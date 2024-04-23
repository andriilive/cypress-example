import {CYPRESS_DIR} from "@cy/const";

export const download_file_path = (fileName: string) => `${CYPRESS_DIR}/downloads/${fileName}`;