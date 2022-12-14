import { BoxShadowDirective } from './box-shadow.directive';
import { SidenavToggleDirective } from './sidenav-toggle.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontSizeDirective } from './font-size.directive';
import { ScrollToDirective } from './scroll-to.directive';
import { AppDropdownDirective } from './dropdown.directive';
import { DropdownAnchorDirective } from './dropdown-anchor.directive';
import { DropdownLinkDirective } from './dropdown-link.directive';
import { EgretSideNavToggleDirective } from './egret-side-nav-toggle.directive';
import { EgretSidenavHelperDirective, EgretSidenavTogglerDirective } from './egret-sidenav-helper/egret-sidenav-helper.directive';
import { DropdownStyleDirective} from './dropdown-style.directive';

const directives = [
  FontSizeDirective,
  ScrollToDirective,
  AppDropdownDirective,
  DropdownAnchorDirective,
  DropdownLinkDirective,
  DropdownStyleDirective,
  SidenavToggleDirective,
  EgretSideNavToggleDirective,
  EgretSidenavHelperDirective,
  EgretSidenavTogglerDirective,
  BoxShadowDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule {}