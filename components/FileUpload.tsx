import {Group, Text, useMantineTheme, MantineTheme, Code} from '@mantine/core';
import {Dropzone, DropzoneStatus, IMAGE_MIME_TYPE} from '@mantine/dropzone';

export const dropzoneChildren = (status: DropzoneStatus) => (
    <Group position="center" spacing="xl" style={{minHeight: 220, pointerEvents: 'none'}}>
        <div>
            <Text size="xl" inline>
                Drag your Whatsapp chat <Code>.txt</Code> export here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
                Your file should not exceed 5mb
            </Text>
        </div>
    </Group>
);


import React, {ChangeEventHandler} from "react";


interface IFileUpload {
    changeHandler: any
}

const FileUpload: React.FC<IFileUpload> = ({ changeHandler }) => {
  return (
      <>
            <Dropzone
                className='flex-initial'
                onDrop={(files) => changeHandler(files)}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={3 * 1024 ** 2}
                accept={["text/plain"]}
            >
                {(status) => dropzoneChildren(status)}
            </Dropzone>
      </>
  )
}

export default FileUpload;