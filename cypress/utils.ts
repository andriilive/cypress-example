/**
 * Returns the path to the downloads file
 * @param {string} fileName - The name of the file
 * @returns {string} - The path to the file
 * @example download_file_path('file.txt')
 * @returns 'cypress/generated/downloads/file.txt'
 * */
export const download_file_path = (fileName: string): string => `cypress/downloads/${fileName}`;