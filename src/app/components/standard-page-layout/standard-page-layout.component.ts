import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { ToastModule } from 'primeng/toast';

@Component({
  standalone: true,
  selector: 'amov-standard-page-layout',
  templateUrl: './standard-page-layout.component.html',
  styleUrl: './standard-page-layout.component.scss',
  imports: [RouterOutlet, HeaderComponent, LeftSidebarComponent, ToastModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardPageLayoutComponent {}
