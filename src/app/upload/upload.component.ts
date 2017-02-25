import { MediaService } from './../services/media.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent {

  constructor(private uploadService: MediaService) { }

  upload = (event, value: any) => {
    const fileElement = event.target.querySelector('input[type=file]');
    const file = fileElement.files[0];

    const fd = new FormData();
    fd.append('file', file);
    fd.append('title',value.title);
    fd.append('description', value.description);

    this.uploadService.uploadMedia(fd).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
