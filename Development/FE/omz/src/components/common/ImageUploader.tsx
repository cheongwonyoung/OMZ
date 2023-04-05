import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  file: any;
  onFile(f: []): void;
  shape: boolean;
};

// file에는 상위 컴포넌트에서 만든 이미지 파일을 담을 빈배열 state
// onFile은 file을 변경할 함수
// shape은 이미지 업로더 모양을 결정할 boolean
export default function ImageUploader({ file, onFile, shape }: Props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: any) => {
      onFile(
        acceptedFiles.map((file: MediaSource) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => file.forEach((f: any) => URL.revokeObjectURL(f.preview));
  }, []);

  const circle =
    "dropzone w-60 h-60 border border-black border-2 border-solid rounded-full";

  const circle_img = "object-cover w-full h-full rounded-full";

  const square = "dropzone w-full h-30";

  // "dropzone w-60 h-60 border border-red-200 border-4 border-dashed";
  const square_img = "object-cover w-full h-full";
  return (
    <section className="container flex justify-center rounded-full">
      <div
        {...getRootProps({
          className: `${shape ? circle : square}`,
        })}
      >
        {/* <input {...getInputProps()} /> */}
        {file.length === 1 ? (
          <img
            id="face-image"
            src={file[0].preview}
            className={shape ? circle_img : square_img}
          />
        ) : (
          <div className="flex h-full justify-center items-center">
            <div className=" flex flex-col items-center text-center p-5">
              <p>
                여기를 클릭하거나 <br />
                파일을 드래그하세요.
              </p>
            </div>
            <input {...getInputProps()} />
          </div>
        )}
      </div>
    </section>
  );
}
