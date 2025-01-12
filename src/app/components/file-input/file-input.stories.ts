import { Meta, moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { UsaFileInputComponent, UsaFileInputModule, UsaTableModule } from "@gsa-sam/ngx-uswds";
import { ReactiveFormsModule } from '@angular/forms';
import { FileInputTableModule } from "./file-input-table/file-input-table.module";
import { FileInputUploadModule } from "./file-input-upload/file-input-upload.module";
import { ANGULAR_CODESANDBOX } from "src/app/shared/sandbox/angular-dependencies";
import { of } from "rxjs";
import { action } from "@storybook/addon-actions";
import { delay } from "rxjs/operators";
import { generateConfig } from "src/app/shared/sandbox/sandbox-utils";


const template = require('!!raw-loader!./file-input-basic/file-input-basic.component.html');
const basicTs = require('!!raw-loader!./file-input-basic/file-input-basic.component.ts');
const basicModule = require('!!raw-loader!./file-input-basic/file-input-basic.module.ts')


const sandboxConfig = {
  files: {
    'file-input-basic.component.ts': basicTs.default,
    'file-input-basic.component.html': template.default,
    'file-input-basic.module.ts': basicModule.default,
  },
  moduleName: 'FileInputBasicModule',
  selector: 'file-input-basic'
};

export default {
  title: 'Components/FileInput',
  component: UsaFileInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule, 
        UsaFileInputModule, 
        ReactiveFormsModule, 
        UsaTableModule,
        FileInputTableModule,
        FileInputUploadModule,
      ],
    }),
  ],
  args: {
    multiple: false,
    acceptFileType: '.pdf,.csv',
    id: 'file-input-basic',
    hint: undefined,
    disabled: false,
    selectedFiles: [],
    clearFilesOnAdd: false,
    displayFileInfo: true,
  },
  argTypes: {
    hint: {type: 'string'},
  },
} as Meta;

export const Basic = (args) => ({
  template: template.default,
  props: {
    multiple: args.multiple,
    acceptFileType: args.acceptFileType,
    id: args.id,
    hint: args.hint,
    disabled: args.disabled,
    selectedFiles: args.selectedFiles,
    clearFilesOnAdd: args.clearFilesOnAdd,
    displayFileInfo: args.displayFileInfo,
    uploadRequest: (file) => {
      // Consider upload as success after 3 second mocked delay
      return of(true).pipe(delay(3000));
    },
  }
});

Basic.parameters = {
  preview: generateConfig('components/file-input/file-input-basic', 'FileInputBasicModule', 'file-input-basic')
}


export const InputWithTable = () => ({
  template: '<file-input-table></file-input-table>',
});
InputWithTable.parameters = {
  preview: generateConfig('components/file-input/file-input-table', 'FileInputTableModule', 'file-input-table')
}

export const ServerUpload = () => ({
  template: '<file-input-upload></file-input-upload>'
})
ServerUpload.parameters = {
  preview: generateConfig('components/file-input/file-input-upload', 'FileInputUploadModule', 'file-input-upload')
}
