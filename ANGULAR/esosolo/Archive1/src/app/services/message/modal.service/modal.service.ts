import {
  Injectable,
  ComponentFactoryResolver,
  Injector,
  Inject,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalComponent } from 'src/app/components/modal/modal.component';

export type Content<T> = string | Type<T> | TemplateRef<T>;

@Injectable()
export class ModalService {
  // Select if the modal backdrop can be closed or not
  cantModalBackDropClose: boolean = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * @description Create modal component, add the dynamic component content to it and finally attach the modal component to the body of the app,
   *
   * @param {string | Type<T>} content Content passed to the open function can either be a string, component or templateRef
   *
   * @returns void
   */
  open<T>(content: Content<T>, context?: any) {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const ngContent = this.resolveNgContent(content, context);
    const componentRef = factory.create(this.injector, ngContent);

    // if (content instanceof TemplateRef) {
    //   const embeddedView =
    //     ModalComponent.prototype.container.createEmbeddedView(content, context);

    //   embeddedView.detectChanges();

    //   embeddedView.rootNodes.forEach((node) => {
    //     this.document.body.appendChild(node);
    //   });
    // } else {
    componentRef.hostView.detectChanges();
    // console.log('changes: ', componentRef.hostView.detectChanges());

    const { nativeElement } = componentRef.location;
    // console.log('native element: ', nativeElement, componentRef.location);

    this.document.body.appendChild(nativeElement);
    // }

    // console.log('factory: ', factory, componentRef);
    // console.log('template content: ', ngContent);
  }

  /**
   *
   * @description Returns a second order array whose content can either be an element string or a component in it's nativeElement structure
   *
   * @param {string | Type<T>} content Content passed to the open function can either be a string, component or templateRef
   *
   * @returns {Array<element | Component>}
   *
   */
  resolveNgContent<T>(content: Content<T>, context?: any) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(context);
      console.log('view ref root nodes: ', viewRef.rootNodes);
      console.log('view ref context: ', viewRef.context);
      console.log('view ref context: ', viewRef);
      // In earlier versions, you may need to add this line
      // this.appRef.attachView(viewRef);
      return [[viewRef.rootNodes]];
    }

    const factory = this.resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }

  /**
   *@description Close the modal with a button or programmatically
   */
  close() {
    const modal = this.document.getElementById('custom-modal') as HTMLElement;
    modal.parentElement?.remove();
  }

  /**
   * @description Close the modal using the backdrop
   */
  closeBackDrop() {
    const modal = this.document.getElementById('custom-modal') as HTMLElement;
    if (this.cantModalBackDropClose != true) modal.parentElement?.remove();
  }

  /**
   * @description Ensures modal can't be closed by its backdrop
   */
  noCloseBackground() {
    this.cantModalBackDropClose = true;
  }
}
