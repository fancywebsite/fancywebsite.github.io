import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html'
})
export class ReviewListComponent {

  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any> | undefined;

  public scrollRight(): void {
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 450), behavior: 'smooth' });
    }
  }

  public scrollLeft(): void {
    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 450), behavior: 'smooth' });
    }
  }

}
