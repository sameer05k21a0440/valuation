import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[my-auto-fit-layout]'
})
export class AutoFitLayout {
    constructor(public element: ElementRef, public renderer: Renderer) {
        // Because ionic's default padding width is 16 
        renderer.setElementStyle(element.nativeElement, 'width', `${(document.body.clientWidth - 32 ).toString()}px`);
    }

}
