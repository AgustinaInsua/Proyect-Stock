import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  sidebarVisible: boolean = false;

  ngOnInit(): void {
    // Realiza la inicialización aquí si es necesario
  }

  closeCallback(): void {
    if (this.sidebarRef) {
      this.sidebarRef.hide();
    }
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    if (this.sidebarVisible && this.sidebarRef) {
      this.sidebarRef.show();
    } else if (!this.sidebarVisible && this.sidebarRef) {
      this.sidebarRef.hide();
    }
  }
}