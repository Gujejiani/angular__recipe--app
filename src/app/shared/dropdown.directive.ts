import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appDropDown]",
})
export class DropDownDirective {
  @HostBinding("class.open") dropdown: boolean = false;

  @HostListener("click") toggleDropdown(event: Event) {
    this.dropdown = !this.dropdown;
  }
  //   @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
  //     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  //   }
  constructor(private ElementRef: ElementRef) {}
}
