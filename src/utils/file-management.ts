// In browser
export function fileToBase64(file: File) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result === "string") {
                const base64 = reader.result
                resolve(base64);
            } else {
                resolve("");
            }
        };
        reader.onerror = (error) => reject(error);
    });
}
