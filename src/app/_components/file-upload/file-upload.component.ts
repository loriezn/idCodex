import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  // Main Task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    const file = event.item(0);

    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The Storage Path
    const path = `files/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'idCodex powered PWA!'};

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(

      // The file's download URL
      finalize(() => this.downloadURL = fileRef.getDownloadURL()),
      tap(snap => {
        console.log(snap);
        if ( snap.bytesTransferred === snap.totalBytes ) {
          this.db.collection('photos').add( { path, size: snap.totalByes });
        }
      })
    );
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
